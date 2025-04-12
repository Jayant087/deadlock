import logo from "../assets/location.png";
const BusHotelSearch = () => {
  return (
    <div className="relative shadow-xl shadow-gray-700 w-[55vw] h-[37vh] bg-white/50 backdrop-blur-md rounded-3xl">
      <div className="flex justify-center pt-5">
        <div className="flex bg-white bg-opacity-70 rounded-full w-[9vw] p-1 justify-evenly">
          <div className="rounded-full flex bg-[#023471] ">
            <button className="text-white p-2 w-[8vw]">Hotels</button>
          </div>
        </div>
      </div>
      <p className="text-blue-950 text-center my-3 font-bold text-xl">
        Book your stay
      </p>
      <div className="flex justify-center p-2 m-auto">
        <div className="rounded-l-full w-[2vw] bg-white"></div>
        <div className="flex bg-white pr-2">
          <input
            type="text"
            placeholder="Search destination hotel"
            className="flex w-[12.5vw] p-2 focus:outline-none"
          />
          <div className="py-1 hover:cursor-pointer">
            <div className="p-0.5 rounded-md flex justify-between border-1 border-2 border-blue-500">
              <div className="flex flex-col justify-center">
                <img src={`${logo}`} alt="" className="max-w-[2vw] h-[2vh]" />
              </div>
              <div className="">Near me</div>
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
      <div className="rounded-full text-white bg-[#389020] w-[50vw] text-center m-auto my-5 p-2 font-sans hover:cursor-pointer hover:bg-green-600">
        Search Hotel
      </div>
    </div>
  );
};
export default BusHotelSearch;
