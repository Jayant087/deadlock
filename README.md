# 🌍 Smart Tourism & AI Trip Planner

An AI-powered travel planning application that generates highly personalized, budget-conscious itineraries for destinations in Himachal Pradesh, India. By leveraging a local Large Language Model (LLM), the system transforms diverse user preferences—such as budget, activity interests, and fitness levels—into detailed day-by-day travel plans.

## 🚀 Project Overview

The Smart Tourism AI Trip Planner simplifies the complex process of trip planning. Instead of generic guides, users provide specific constraints (Budget, Dates, Travel Style), and the AI generates a structured itinerary including:
- **Daily Activity Schedules**: Tailored to user preferences with match scores.
- **Budget Breakdowns**: Realistic estimates for accommodation, food, and transport.
- **Personalized Recommendations**: Hotel suggestions and packing tips based on the destination's weather and user profile.
- **AI-Driven Personalization**: Adapts itineraries based on age, fitness level, and special interests.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite) - For a fast, responsive user interface.
- **Tailwind CSS** - For modern, utility-first styling.

### Backend
- **FastAPI** - High-performance asynchronous framework for the API layer.
- **Pydantic** - For strict data validation and type safety.
- **Uvicorn** - ASGI server for production-ready deployment.

### AI & Machine Learning
- **Ollama** - Local LLM orchestration.
- **Llama 3.2:3b** - The core generative model used for itinerary creation.
- **Structured JSON Prompting** - Custom prompt engineering to ensure deterministic and parseable AI outputs.

## 🏗️ Architecture

The project follows a decoupled Client-Server architecture:

1. **Client Layer (React)**: Collects user inputs through a dynamic form and sends them via REST API to the backend.
2. **API Layer (FastAPI)**: 
   - Validates incoming requests using Pydantic schemas.
   - Manages the lifecycle of the AI service via dependency injection.
   - Handles CORS for secure frontend-backend communication.
3. **Service Layer (OllamaService)**: 
   - Constructs a sophisticated, multi-dimensional prompt.
   - Interfaces with the local Ollama API.
   - Enforces a strict JSON format for the LLM response.
4. **AI Model (Llama 3.2)**: Processes the prompt and generates the personalized travel data.

## 📂 Project Structure

```text
plan_your_trip-main/
├── app/                    # FastAPI Application
│   ├── main.py             # Entry point, API routing, and CORS config
│   └── schemas.py          # Pydantic models for request/response validation
├── planner/                # Business Logic & AI Services
│   └── ollama_service.py   # Local LLM integration and prompt engineering
├── client/                 # React Frontend
│   └── src/
│       ├── pages/          # Main page components (e.g., PlanYourTripPage)
│       └── components/     # Reusable UI components (e.g., TripResultsDisplay)
└── .env                    # Environment variables (API keys, config)
```
