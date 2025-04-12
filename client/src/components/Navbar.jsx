import React from "react";
import logo from "../assets/image1.png"; // Replace with your actual logo image

const Navbar = () => {
  return (
    <div className="flex items-center ">
      <div className="h-16 mt-5 mr-20 w-[10vw] items-start">
        <img
          src={logo}
          alt="Logo"
          className="object-contain h-full w-full hover:cursor-pointer"
        />
      </div>
      <div className="relative flex h-10 ml-20 mr-15 w-[65vw] gap-6 mt-4">
        {/* Left: Logo image block */}

        {/* Center: Floating Nav */}
        <div className="flex">
          <nav className="bg-white/20 backdrop-blur-md h-[6vh] rounded-full w-[51vw] px-6shadow-lg flex justify-between items-center max-w-6xl z-10">
            {/* Middle: Nav Buttons */}
            <div className="flex">
              {[
                "Home",
                "Destinations",
                "Activities",
                "How to reach",
                "Contact us",
                "Tour and Packages",
                "About us",
              ].map((item) => (
                <button
                  key={item}
                  className={`ml-1.5 rounded-full px-3 py-1 transition duration-200
      ${
        item === "Home"
          ? "bg-[#023471] text-white"
          : " hover:bg-[#023471] hover:text-white"
      }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="relative flex justify-center transform ml-20">
          <nav className="bg-white/20 w-[12vw] backdrop-blur-md rounded-full h-[6vh] px-0.25 shadow-lg flex justify-between items-center max-w-6xl z-10">
            {/* Middle: Nav Buttons */}
            <div className="flex gap-3">
              {["Login", "Signup"].map((item) => (
                <button
                  key={item}
                  className={`text-black-600 ml-1.5 rounded-full w-[5vw] px-3 py-1 transition duration-200 hover:bg-[#023471]
              hover:text-white ${
                item === "Login"
                  ? "bg-[#023471] text-white"
                  : " hover:bg-[#023471] hover:text-white"
              }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
