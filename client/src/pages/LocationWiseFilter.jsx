// import React from "react";
// import HotelCard from "../components/HotelCard";

// const hotels = [
//   {
//     id: 1,
//     name: "SVH Hotels Manali",
//     location: "Manali",
//     price: 4500,
//     originalPrice: 5300,
//     rating: 69,
//   },
//   {
//     id: 2,
//     name: "NIT Himachal",
//     location: "Chamba",
//     price: 3600,
//     originalPrice: 4700,
//     rating: 171,
//   },
//   {
//     id: 3,
//     name: "SRP Motels, Manali",
//     location: "Manali",
//     price: 9800,
//     originalPrice: 11000,
//     rating: 569,
//   },
//   {
//     id: 4,
//     name: "Kullu Katers",
//     location: "Kullu",
//     price: 3599,
//     originalPrice: 5300,
//     rating: 175,
//   },
//   {
//     id: 5,
//     name: "Simle Te Hotel",
//     location: "Shimla",
//     price: 4500,
//     originalPrice: 5300,
//     rating: 102,
//   },
//   {
//     id: 6,
//     name: "HPS hotel ,Manali",
//     location: "Manali",
//     price: 3700,
//     originalPrice: 4100,
//     rating: 78,
//   },
// ];

// const HotelOffer = () => {
//   return (
//     <div className="w-[70vw]">
//       {/* parent */}
//       <div className="flex border-2 border-gray rounded-full">
//         <div className=" w-full text-sm h-10 rounded-l-lg ml-2 p-2">
//           Checkout some best hotels
//         </div>
//         <div className="flex justify-between items-center mr-5">
//           <select className="border rounded-full px-1 border-gray-500">
//             <option>Manali</option>
//             <option>Kullu</option>
//             <option>Bir Billing</option>
//             <option>Dharmshala</option>
//             <option>Shimla</option>
//             <option>Chamba</option>
//             <option>Maclodganj</option>
//             <option>Kinnaur</option>
//             {/* Other locations can be added here */}
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-6 mt-2">
//         {hotels.map((hotel, id) => (
//           <HotelCard />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotelOffer;
import React, { useState } from "react";
import HotelCard from "../components/HotelCard";

const hotels = [
  {
    id: 1,
    name: "SVH Hotels Manali",
    location: "Manali",
    price: 4500,
    originalPrice: 5300,
    rating: 69,
  },
  {
    id: 2,
    name: "NIT Himachal",
    location: "Chamba",
    price: 3600,
    originalPrice: 4700,
    rating: 171,
  },
  {
    id: 3,
    name: "SRP Motels, Manali",
    location: "Manali",
    price: 9800,
    originalPrice: 11000,
    rating: 569,
  },
  {
    id: 4,
    name: "Kullu Katers",
    location: "Kullu",
    price: 3599,
    originalPrice: 5300,
    rating: 175,
  },
  {
    id: 5,
    name: "Simle Te Hotel",
    location: "Shimla",
    price: 4500,
    originalPrice: 5300,
    rating: 102,
  },
  {
    id: 6,
    name: "HPS hotel ,Manali",
    location: "Manali",
    price: 3700,
    originalPrice: 4100,
    rating: 78,
  },
];

const HotelOffer = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredHotels =
    selectedLocation === ""
      ? hotels
      : hotels.filter((hotel) => hotel.location === selectedLocation);

  return (
    <div className="w-[70vw] mx-auto">
      {/* Filter Section */}
      <div className="flex border-2 border-gray rounded-full mb-4">
        <div className="pb-1.5 font-spartan w-full text-sm font-semibold h-10 rounded-l-lg ml-2 p-2">
          Checkout some best hotels
        </div>

        <div className="flex justify-between items-center mr-5">
          <select
            className="border rounded-full px-3 py-1 border-gray-500"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option>Manali</option>
            <option>Kullu</option>
            <option>Bir Billing</option>
            <option>Dharmshala</option>
            <option>Shimla</option>
            <option>Chamba</option>
            <option>Maclodganj</option>
            <option>Kinnaur</option>
          </select>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="h-[80vh] overflow-y-auto space-y-4 pr-2 flex flex-col items-center scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <p>No hotels found in selected location.</p>
        )}
      </div>
    </div>
  );
};

export default HotelOffer;
