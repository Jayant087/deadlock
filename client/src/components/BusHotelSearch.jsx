import { useNavigate } from "react-router-dom";
import logo from "../assets/location.png";
import hotels from "../hotels.json";
import { useState } from "react";

const BusHotelSearch = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (selectedHotel && selectedHotel.location) {
      navigate(`/hotels/${selectedHotel.location}`);
    }
  };

  return (
    <div className="relative shadow-xl shadow-gray-700 w-[55vw] h-[37vh] bg-white/50 backdrop-blur-md rounded-3xl">
      <div className="flex justify-center pt-5">
        <div className="flex bg-white bg-opacity-70 rounded-full w-[9vw] p-1 justify-evenly">
          <div className="rounded-full flex bg-[#023471]">
            <button className="text-white p-2 w-[8vw]">Hotels</button>
          </div>
        </div>
      </div>
      <p className="text-blue-950 text-center my-3 font-bold text-xl">
        Book your stay
      </p>
      <div className="flex justify-center p-2 m-auto">
        <div className="rounded-l-full w-[20px] bg-white"></div>
        <div className="relative flex bg-white pr-2">
          <input
            type="text"
            value={
              selectedHotel
                ? `${selectedHotel.hotel_name}, ${selectedHotel.location}`
                : ""
            }
            readOnly
            placeholder="Search destination hotel"
            className="flex border-gray-300 rounded-lg w-[12.5vw] p-2 focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute z-10 top-[4.5vh] mt-2 w-[18vw] max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-md">
              {hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                  onClick={() => handleSelectHotel(hotel)}
                >
                  <p className="font-semibold">{hotel.hotel_name}</p>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                </div>
              ))}
            </div>
          )}
          <div className="py-1 hover:cursor-pointer">
            <div className="p-0.5 rounded-md flex justify-between border-1 border-2 border-blue-500">
              <div className="flex flex-col justify-center">
                <img src={`${logo}`} alt="" className="w-[1.5vw] h-[3vh]" />
              </div>
              <div className="ml-1 leading-none p-1">Near me</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="py-2 bg-[#023471] items-center  w-[15.5vw] text-center text-white">
            7 Apr, Mon - 9 Apr, Wed
          </div>
        </div>

        <div className="w-px h-100%"></div>
        <div className="flex  flex-col justify-center">
          <div className="py-2 bg-[#023471] rounded-r-full w-[13vw] text-center text-white ">
            4 Guests - 2 Rooms
          </div>
        </div>
      </div>
      <div
        className="rounded-full text-white bg-[#389020] w-[50vw] text-center m-auto my-5 p-2 font-sans hover:cursor-pointer hover:bg-green-600"
        onClick={handleSearch}
      >
        Search Hotel
      </div>
      {/* {filteredHotels.length > 0 && (
        <div className="mt-6">
          <HotelResults hotels={filteredHotels} />
        </div>
      )} */}
    </div>
  );
};
export default BusHotelSearch;
