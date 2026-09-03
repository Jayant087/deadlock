import logging
import hashlib
import hmac
import secrets
import sqlite3
from pathlib import Path
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings, SettingsConfigDict
from app.schemas import LoginRequest, PlannerRequest, SignupRequest
from app.ollama_service import OllamaService

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration management using pydantic-settings
class Settings(BaseSettings):
    OPENWEATHER_API_KEY: str = "fallback_key"
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
DATABASE_PATH = Path(__file__).resolve().parent.parent / "users.sqlite3"

app = FastAPI(title="Smart Tourism AI Trip Planner API")


def initialize_database():
    with sqlite3.connect(DATABASE_PATH) as connection:
        connection.execute(
            "CREATE TABLE IF NOT EXISTS users ("
            "id INTEGER PRIMARY KEY AUTOINCREMENT, "
            "name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL)"
        )


initialize_database()


def hash_password(password: str, salt: bytes | None = None):
    salt = salt or secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 120000)
    return f"{salt.hex()}:{digest.hex()}"


def verify_password(password: str, stored_hash: str):
    salt_hex, digest_hex = stored_hash.split(":", 1)
    expected = hashlib.pbkdf2_hmac(
        "sha256", password.encode(), bytes.fromhex(salt_hex), 120000
    )
    return hmac.compare_digest(expected.hex(), digest_hex)

# CORS Configuration to allow the Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency Injection for OllamaService to maintain a singleton instance
def get_ollama_service():
    if not hasattr(app.state, "ollama_service"):
        app.state.ollama_service = OllamaService()
    return app.state.ollama_service


@app.post("/api/auth/signup/")
def signup(request: SignupRequest):
    email = request.email.strip().lower()
    try:
        with sqlite3.connect(DATABASE_PATH) as connection:
            connection.execute(
                "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
                (request.name.strip(), email, hash_password(request.password)),
            )
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=409, detail="An account with this email already exists")
    return {"message": "Account created successfully"}


@app.post("/api/auth/login/")
def login(request: LoginRequest):
    email = request.email.strip().lower()
    with sqlite3.connect(DATABASE_PATH) as connection:
        user = connection.execute(
            "SELECT name, email, password_hash FROM users WHERE email = ?", (email,)
        ).fetchone()
    if not user or not verify_password(request.password, user[2]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"message": "Login successful", "user": {"name": user[0], "email": user[1]}}

@app.post("/api/planner/generate-personalized/")
async def generate_personalized_itinerary(
    request: PlannerRequest,
    service: OllamaService = Depends(get_ollama_service)
):
    try:
        # Convert Pydantic model to dict for compatibility with OllamaService
        planner_data = request.model_dump()

        logger.info(f"Generating AI itinerary for {planner_data['destination']} via Ollama")

        # Reuse existing OllamaService logic without modification
        itinerary = service.generate_itinerary(planner_data)

        return {
            "success": True,
            "data": itinerary,
            "personalization_metadata": {
                "engine": "Ollama Llama 3.2:3b",
                "inputs": planner_data
            }
        }
    except RuntimeError as e:
        logger.error(f"AI Generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
