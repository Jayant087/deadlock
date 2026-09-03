import logging
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings, SettingsConfigDict
from app.schemas import PlannerRequest
from app.ollama_service import OllamaService

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration management using pydantic-settings
class Settings(BaseSettings):
    OPENWEATHER_API_KEY: str = "fallback_key"
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()

app = FastAPI(title="Smart Tourism AI Trip Planner API")

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
