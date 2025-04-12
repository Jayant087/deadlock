import React from "react";
import bgImage from "../assets/monk.jpg";
import BusHotelSearch from "./BusHotelSearch";
import Navbar from "./Navbar";
import { useRef } from "react";

const Homepage = () => {
  return (
    <div
      className="h-max-screen w-max-screen bg-no-repeat bg-center object-cover bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <div className="flex items-center flex-col">
        <div className="font-poppins mt-10 text-white flex  sm:text-base md:text-[50px] lg:text-[50px] leading-relaxed font-bold ">
          Discover the untouched charm of Himachal
        </div>
        <div className=" font-poppins text-white sm:text-base md:text-lg lg:text-[25px] leading-relaxed text-[30px] my-5">
          where every valley whispers stories, and every sunrise invites a new
          adventure.
        </div>
      </div>
      <div className="flex justify-end mr-20 mt-10">
        <BusHotelSearch />
      </div>
      <div className="h-[22vh]"></div>
      <p className="p-2 bg-[#023471] text-white text-center text-sm">
        Himachal is the most loved tourist destination of india-dont miss out
        your chance to visit himachal. Manali caters about 1,00,000 people every
        year from outside himachal through himachal tourism website
      </p>
    </div>
  );
};

export default Homepage;
