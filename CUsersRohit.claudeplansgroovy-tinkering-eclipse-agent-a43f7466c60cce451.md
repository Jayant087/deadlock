# Migration Plan: Django to FastAPI for Smart Tourism AI Trip Planner

## Overview
Migrate the `POST /api/planner/generate-personalized/` endpoint from Django to FastAPI while reusing the existing `OllamaService`.

## 1. Dependency Installation
The following packages are required:
- `fastapi`: The web framework.
- `uvicorn`: ASGI server to run FastAPI.
- `pydantic`: Data validation and settings management.
- `pydantic-settings`: For environment variable management (modern replacement for `python-dotenv` in Pydantic v2).
- `python-dotenv`: To load `.env` files.
- `requests`: Used by `OllamaService`.

**Installation Command:**
\`\`\`bash
pip install fastapi uvicorn pydantic pydantic-settings python-dotenv requests
\`\`\`

## 2. Pydantic Model Design
The `PlannerRequest` model will replace the Django Rest Framework data handling.

**File:** `app/models.py` (or within `main.py`)
\`\`\`python
from pydantic import BaseModel, Field
from typing import Optional

class PlannerRequest(BaseModel):
    budget: int = Field(..., description="Budget in INR")
    destination: str = Field(..., description="Destination city/region")
    from_date: str = Field(..., description="Start date (YYYY-MM-DD)")
    to_date: str = Field(..., description="End date (YYYY-MM-DD)")
    travelers: int = Field(default=1)
    trip_type: str = Field(default="adventure")
    activity_preferences: str = Field(default="")
    accommodation_type: str = Field(default="mid_range")
    fitness_level: str = Field(default="moderate")
    age: int = Field(default=30)
    weather_preference: str = Field(default="any")
    special_interests: str = Field(default="")
\`\`\`

## 3. FastAPI Application Structure (`main.py`)
The `main.py` will handle CORS, configuration, and the endpoint.

\`\`\`python
import logging
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings, SettingsConfigDict
from planner.ollama_service import OllamaService
from .models import PlannerRequest # assuming models.py exists

# Logging configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration management
class Settings(BaseSettings):
    OPENWEATHER_API_KEY: str
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()

app = FastAPI(title="Smart Tourism AI Trip Planner API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency Injection for OllamaService
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
        # Convert Pydantic model to dict for OllamaService
        planner_data = request.model_dump()
        
        logger.info(f"Generating AI itinerary for {planner_data['destination']} via Ollama")
        
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
\`\`\`

## 4. Architectural Decisions
- **Dependency Injection:** used `app.state` to maintain a singleton instance of `OllamaService`, avoiding recreating the service on every request.
- **Environment Variables:** used `pydantic-settings` for type-safe configuration of `OPENWEATHER_API_KEY`.
- **Trailing Slashes:** FastAPI (Starlette) handles trailing slashes by default. A request to `/api/planner/generate-personalized` will be redirected to `/api/planner/generate-personalized/`.
- **Error Handling:** Mapped `RuntimeError` from `OllamaService` to HTTP 500.

## 5. Implementation Steps
1. Create a `.env` file with `OPENWEATHER_API_KEY`.
2. Install dependencies.
3. Implement `app/models.py` with the `PlannerRequest` model.
4. Implement `main.py` with the FastAPI app and endpoint.
5. Run the server: `uvicorn main:app --reload`.
