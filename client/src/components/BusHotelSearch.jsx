import logo from "../assets/chevron-arrow-down.png";
const BusHotelSearch = () => {
  return (
    <div className="relative shadow-xl shadow-gray-700 w-[55vw] h-[37vh] bg-white/50 backdrop-blur-md rounded-3xl">
      <div className="flex justify-center pt-5">
        <div className="flex bg-white bg-opacity-70 rounded-full w-[15vw] p-1 justify-evenly">
          <div className="rounded-full flex bg-[#023471] ">
            <button className="text-white w-[8vw]">Hotels</button>
          </div>

          <button className="rounded-full p-2 w-[6vw]">Buses</button>
        </div>
      </div>
      <p className="text-blue-950 text-center my-5 font-bold text-xl">
        Book your stay
      </p>
      <div className="flex justify-center w-[50vw] m-auto">
        <input
          type="text"
          placeholder="   Search destination hotel"
          className="flex rounded-l-full w-[20vw] focus:outline-none"
        />
        <div className="bg-[#023471] items-center w-[16vw] text-center text-white p-2">
          7 Apr, Mon - 9 Apr, Wed
        </div>
        <div className="w-px h-100%"></div>
        <div className="bg-[#023471] rounded-r-full w-[14vw] text-center text-white p-2">
          4 Guests - 2 Rooms
        </div>
      </div>
      <div className="rounded-full text-white bg-[#389020] w-[50vw] text-center m-auto my-5 p-2 font-sans hover:cursor-pointer hover:bg-green-600">
        Search Hotel
      </div>
    </div>
  );
};
export default BusHotelSearch;
