import React from "react";
import bgImage from "../assets/bg.jpg";
import kulludesh from "../assets/kulludesh.jpg";
import snowfall from "../assets/snowfall.jpg";
import forest from "../assets/forest.jpg";
const Conclusion = () => {
  return (
    <div
      className="bg-gradient-to-b from-blue-500 to-blue-700 text-white pt-8 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-3xl font-bold text-center mb-12">Himachal Tourism</h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40 mb-12">
        {/* Card 1 */}
        <div className="ml-20 bg-white text-black rounded-lg shadow-lg p-6">
          <img src={`${kulludesh}`} alt="" srcset="" />
          <h2 className="text-xl font-semibold">Dussehra in Kullu</h2>
          <p>
            Kullu Dussehra is a unique week-long festival celebrated in the the
            rest of India, effigies of Ravanas are not burned here... Kullu
            Dussehra is a unique week-long festival celebrated in the Kullu
            Valley of Himachal Pradesh, starting on Vijayadashami. Unlike the
            rest of India, effigies of Ravanas are not burned here...
          </p>
          <a href="#" className="text-blue-500 underline">
            Explore now Dussehra in Kullu
          </a>
        </div>

        {/* Card 2 */}
        <div className=" text-black rounded-lg shadow-lg p-6 border-2">
          <img src={`${snowfall}`} alt="" srcset="" className="rounded-lg" />
          <h2 className="text-xl font-semibold">Prashar Lake in Mandi</h2>
          <p>
            Prashar Lake is a beautiful lake situated in the Mandi district of
            Himachal Pradesh, known for its stunning views and unique
            surroundings...
          </p>
          <a href="#" className="text-blue-500 underline">
            Explore now Prashar Lake
          </a>
        </div>

        {/* Card 3 */}
        <div className="mr-20 bg-white text-black rounded-lg shadow-lg p-6">
          <img src={`${forest}`} alt="" srcset="" />
          <h2 className="text-xl font-semibold">Jibhi in Kullu</h2>
          <p>
            Jibhi is a captivating destination in the Kullu Valley known for its
            serene environment and scenic beauty...
          </p>
          <a href="#" className="text-blue-500 underline">
            Explore now Jibhi
          </a>
        </div>
      </div>

      {/* Newsletter Signup Form */}
      <div className="flex justify-around">
        <div className=" text-white rounded-lg w-[40vw] p-6">
          <h2 className="text-xl font-semibold mb-4">
            Signup for Himachal tourism Monthly newsletter
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-white" htmlFor="name">
                Name
              </label>
              <input
                className="bg-transparent border-b-2 border-gray-300 rounded-full text-white p-2 focus:outline-none w-[50%]"
                type="text"
                id="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white" htmlFor="email">
                Email
              </label>
              <input
                className="bg-transparent border-b-2 border-gray-300 rounded-full text-white p-2 focus:outline-none w-[50%]"
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black w-[50%] rounded p-2 hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="  text-white flex justify-evenly p-6">
          <div className="flex justify-around">
            {/* Quick Links Section */}
            <div className="w-[33%]">
              <h3 className="text-lg font-bold mb-4">Quick links</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Home</li>
                <li>Destinations</li>
                <li>Activities</li>
                <li>How to reach</li>
                <li>Tours and packages</li>
              </ul>
            </div>

            {/* About Us Section */}
            <div className="w-[33%]">
              <h3 className="text-lg font-bold mb-4">About us</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>About Himachal Tourism</li>
                <li>What we do</li>
                <li>Our story</li>
                <li>Why choose us</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Customer Support Section */}
            <div className="w-[33%]">
              <h3 className="text-lg font-bold mb-4">Customer support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Travel Insurance</li>
                <li>FAQs</li>
                <li>Cancellation policy</li>
                <li>Testimonials</li>
                <li>Call support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-500 leading-relaxed font-bold opacity-60 text-[70px] text-center">
        Himachal Tourism
      </div>
    </div>
  );
};

export default Conclusion;
