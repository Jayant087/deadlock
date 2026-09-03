import requests
import json
import logging

logger = logging.getLogger(__name__)

class OllamaService:
    def __init__(self, model="llama3.2:3b", base_url="http://localhost:11434"):
        self.model = model
        self.base_url = base_url

    def generate_itinerary(self, data):
        """
        Generates a personalized itinerary using a local Ollama model.
        Returns a structured JSON matching the expected frontend format.
        """
        prompt = self._build_prompt(data)

        try:
            response = requests.post(
                f"{self.base_url}/api/generate",
                json={
                    "model": self.model,
                    "prompt": prompt,
                    "stream": False,
                    "format": "json"
                },
                timeout=180
            )
            response.raise_for_status()
            result = response.json()
            return json.loads(result['response'])
        except Exception as e:
            logger.error(f"Ollama API error: {str(e)}")
            raise RuntimeError(f"Failed to generate itinerary from AI: {str(e)}")

    def _build_prompt(self, data):
        return f"""
        You are a professional travel planner specializing in Himachal Pradesh, India.
        Generate a detailed, personalized travel itinerary in STRICT JSON format.

        User Inputs:
        - Destination: {data.get('destination')}
        - Budget: ₹{data.get('budget')}
        - Dates: {data.get('from_date')} to {data.get('to_date')}
        - Travelers: {data.get('travelers')}
        - Trip Type: {data.get('trip_type')}
        - Activity Preferences: {data.get('activity_preferences')}
        - Accommodation Type: {data.get('accommodation_type')}
        - Fitness Level: {data.get('fitness_level')}
        - Age: {data.get('age')}
        - Weather Preference: {data.get('weather_preference')}
        - Special Interests: {data.get('special_interests')}

        The output MUST be a JSON object with the following structure:
        {{
            "destination": "string",
            "from": "YYYY-MM-DD",
            "to": "YYYY-MM-DD",
            "num_days": integer,
            "travelers": integer,
            "selected_hotel": {{
                "name": "string",
                "rating": float,
                "price_per_night": integer,
                "amenities": "string"
            }},
            "total_estimated_expense": integer,
            "budget_breakdown": {{
                "accommodation": integer,
                "transport": integer,
                "activities": integer,
                "food": integer
            }},
            "itinerary": [
                {{
                    "day": "Day X (YYYY-MM-DD)",
                    "hotel": "string",
                    "hotel_rating": float,
                    "activities": [
                        {{
                            "name": "string",
                            "type": "string",
                            "cost": integer,
                            "match_score": float (0.0 to 1.0),
                            "satisfaction": integer (0 to 100)
                        }}
                    ],
                    "cost": {{
                        "accommodation": integer,
                        "food": integer,
                        "activities": integer,
                        "daily_total": integer
                    }}
                }}
            ],
            "recommendations": {{
                "best_time": "string",
                "packing_tips": ["string"],
                "local_cuisine": ["string"]
            }},
            "personalization_applied": {{
                "accommodation_type": "string",
                "user_profile": {{
                    "fitness_level": "string",
                    "age": integer
                }}
            }}
        }}
        Ensure the budget is realistically distributed and the activities match the preferences.
        """
