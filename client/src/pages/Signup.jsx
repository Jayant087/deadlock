import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/home/signup/", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error signing up");
    }
  };

  return (
    <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        className="w-[20vw] flex mx-auto px-4 py-2 rounded-full border border-gray-300"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-[20vw] flex mx-auto px-4 py-2 rounded-full border border-gray-300"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-[20vw] flex mx-auto px-4 py-2 rounded-full border border-gray-300"
        onChange={handleChange}
      />
      <div className="flex justify-center pb-5">
        <button className="w-[20vw] mx-auto text-center  bg-[#023471] text-white py-2 rounded-full">
          Sign Up
        </button>
      </div>
      {message && <p className="text-center text-sm mt-2">{message}</p>}
    </form>
  );
}
