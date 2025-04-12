import React from "react";
import HotelCard from "../components/HotelCard";

const hotels = [
  {
    name: "SVH Hotels Manali",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    name: "Nit maya hotel",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    name: "SVH Hotels Manali",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    name: "SVH Hotels Manali",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    name: "SVH Hotels Manali",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    name: "SVH Hotels Manali",
    location: "Hadimba temple road, mall road",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
];

const HotelOffer = () => {
  return (
    <div className="p-20 w-[70vw]">
      {/* parent */}
      <div className="flex border-2 border-gray rounded-full">
        <div className=" w-full text-sm h-10 rounded-l-lg ml-2 p-2">
          Checkout some best hotels
        </div>
        <div className="flex justify-between items-center mr-5">
          <select className="border rounded-full px-1 border-gray-500">
            <option>Manali</option>
            {/* Other locations can be added here */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {hotels.map((hotel, index) => (
          <HotelCard />
        ))}
      </div>
    </div>
  );
};

export default HotelOffer;
