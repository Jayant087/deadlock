import React from "react";
import bgImage from "../assets/bg.jpg";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Himachal Tourism</h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold">Dussehra in Kullu</h2>
          <p>
            Kullu Dussehra is a unique week-long festival celebrated in the
            Kullu Valley of Himachal Pradesh, starting on Vijayadashami. Unlike
            the rest of India, effigies of Ravanas are not burned here...
          </p>
          <a href="#" className="text-blue-500 underline">
            Explore now Dussehra in Kullu
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
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
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
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
      <div
        className="bg-white text-black rounded-lg shadow-lg p-6 border-2 border-white"
        style={{ backgroundImage: `url(${bgImage})`, objectFit: "contain" }}
      >
        <h2 className="text-xl font-semibold mb-4">
          Signup for Himachal tourism Monthly newsletter
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border w-[30vw] border-gray-300 rounded p-2"
              type="text"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border flex border-gray-300 rounded p-2 w-[30vw]"
              type="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
