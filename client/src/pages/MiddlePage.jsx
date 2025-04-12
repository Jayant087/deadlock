import React from "react";
import logo1 from "../assets/temple.png";
import logo2 from "../assets/treking.png";
import logo3 from "../assets/snow.png";
import logo4 from "../assets/rafting.png";
import logo5 from "../assets/paragliding.png";
export default function MiddlePage() {
  return (
    <div className="flex ">
      <div className="flex flex-col items-center bg-white p-6">
        <div className="bg-blue-600 text-white rounded-full px-4 hover:cursor-pointer py-2 mb-4 hover:bg-blue-700">
          Why choose himachal tourism?
        </div>
        <h1 className="text-4xl font-bold mb-6">
          Your search for perfect{" "}
          <span className="text-blue-600">Himachali Itinerary</span> ends here
        </h1>
        <div className="mb-4">
          <div className="overflow-hidden flex justify-between">
            <img
              src={logo5}
              alt="paragliding"
              className="w-[23vw] h-[30vh] object-cover rounded-3xl transition-transform duration-500 hover:scale-110"
            />
            <img
              src={logo4}
              alt="rafting"
              className="w-[30vw] h-[30vh] rounded-3xl object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-around gap-1 mt-5 overflow-hidden">
            <img
              src={logo2}
              alt="mountain view"
              className="w-[20vw] h-[30vh] object-contain rounded-3xl transition-transform duration-500 hover:scale-110"
            />
            <img
              src={logo1}
              alt="temple"
              className="w-[20vw] h-[40vh] object-contain rounded-3xl transition-transform duration-500 hover:scale-110"
            />
            <img
              src={logo3}
              alt="snowboarding"
              className="w-[15vw] h-[25vh] mt-5 object-contain rounded-3xl transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 text-center rounded-xl">
        <button className="text-lg bg-[#023471] text-white rounded-full p-1 px-5">
          Dont know much about himachal?
        </button>
        <p className="mt-2 text-gray-600 ">
          <span className=" text-gray-500 font-bold flex justify-end">
            you sure wonder about
          </span>
          <span className="font-semibold flex justify-end">
            where to stay <span className="pl-1 text-red-500">?</span>
          </span>
          <span className="font-semibold flex justify-end">
            which way to take <span className="pl-1 text-red-500">?</span>
          </span>
          <span className="font-semibold flex justify-end">
            which exquisite palces to visit{" "}
            <span className="pl-1 text-red-500">?</span>
          </span>
          <span className="font-semibold flex justify-end">
            Where to have local himachali food{" "}
            <span className="pl-1 text-red-500">?</span>
          </span>
        </p>

        <h1 className="mt-6 text-4xl font-bold text-orange-500">
          We have got you covered
        </h1>
        <h1 className="text-5xl font-black text-red-600">Curated itinerary</h1>
        <h2 className="mt-2 text-xl font-light text-gray-500">for you</h2>

        <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded shadow hover:bg-blue-700">
          Plan your trip ➔
        </button>
      </div>
    </div>
  );
}
