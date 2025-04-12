import { useState } from "react";

const tripTypes = [
  "Pilgrimage",
  "Adventure",
  "Relaxation",
  "Nature",
  "Cultural",
];
const destinations = ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti"];

export default function PlanYourTrip() {
  const [form, setForm] = useState({
    budget: "",
    type: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "startDate" || name === "endDate") {
        const start = new Date(updated.startDate);
        const end = new Date(updated.endDate);

        if (!isNaN(start) && !isNaN(end) && end > start) {
          setDuration(Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1);
          setError("");
        } else if (updated.startDate && updated.endDate) {
          setError("End date must be after start date");
          setDuration(0);
        }
      }

      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { budget, type, destination, startDate, endDate } = form;

    if (!budget || !type || !destination || !startDate || !endDate) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:8000/api/generate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          budget: parseInt(budget),
          destination,
          trip_type: type,
          from_date: startDate,
          to_date: endDate,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setTripData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate trip.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="Budget"
          className="w-full p-2 border rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select trip type</option>
          {tripTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select destination</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {duration > 0 && <p>Trip Duration: {duration} days</p>}

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Planning..." : "Plan Trip"}
        </button>
      </form>

      {tripData && (
        <div className="mt-6 space-y-4 border-t pt-4">
          <h2 className="text-xl font-semibold">
            Trip to {tripData.destination}
          </h2>
          <p>
            From: {tripData.from} &nbsp; To: {tripData.to}
          </p>
          <p>Type: {tripData.type}</p>
          <p>Total Estimated Expense: ₹{tripData.total_estimated_expense}</p>

          {tripData.itinerary?.map((dayPlan, index) => (
            <div key={index} className="border rounded p-3 bg-gray-50">
              <h3 className="font-semibold">{dayPlan.day}</h3>
              <p>Activity: {dayPlan.activity}</p>
              <p>Stay: {dayPlan.stay}</p>
              <p>Cost Breakdown:</p>
              <ul className="list-disc list-inside">
                <li>Stay: ₹{dayPlan.cost.stay}</li>
                <li>Food: ₹{dayPlan.cost.food}</li>
                <li>Activity: ₹{dayPlan.cost.activity}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
