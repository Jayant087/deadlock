from pydantic import BaseModel, Field

class PlannerRequest(BaseModel):
    # Required core fields
    budget: int = Field(..., description="Budget in INR")
    destination: str = Field(..., description="Destination city/region")
    from_date: str = Field(..., description="Start date (YYYY-MM-DD)")
    to_date: str = Field(..., description="End date (YYYY-MM-DD)")

    # Optional fields with defaults matching existing logic
    travelers: int = Field(default=1)
    trip_type: str = Field(default="adventure")
    activity_preferences: str = Field(default="")
    accommodation_type: str = Field(default="mid_range")
    fitness_level: str = Field(default="moderate")
    age: int = Field(default=30)
    weather_preference: str = Field(default="any")
    special_interests: str = Field(default="")
