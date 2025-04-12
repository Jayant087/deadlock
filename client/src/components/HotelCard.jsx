import React from "react";
import logo from "../assets/hotel.png";

const HotelCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image slider (can be implemented with a library) */}
      <div className="relative">
        <img className="w-full" src={logo} alt="Hotel" />
        <div className="absolute top-[17vh] left-3 ">
          {/* Placeholder for carousel controls */}
          <button className="bg-white rounded-full px-2 shadow-md">❮</button>
        </div>
        <div className="absolute top-[17vh] right-3 ">
          {/* Placeholder for carousel controls */}
          <button className="bg-white rounded-full px-2 shadow-md">❯</button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">SVH hotels Manali</h2>
        <p className="text-gray-600">Hadimba temple road, mall road</p>

        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-green-700">
            ₹ 4,500/night
          </span>
          <span className="line-through text-gray-400 ml-2">₹ 5,300</span>
        </div>

        <p className="text-gray-600">1 Room - 2 Guests</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
          <span className="text-gray-500 ml-2">(69)</span>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View details
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
