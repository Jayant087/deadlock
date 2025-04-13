import RecommendedHotels from "./RecommendedHotels";
import LocationWiseFilter from "./LocationWiseFilter";

export default function HotelOfferPage() {
  return (
    <div className="h-[120vh] mt-[40vh] ml-[6vw]">
      <div className="font-helveticaCompressed text-[3.5rem] text-[#9a9a9a] mb-5">
        Exclusive deals in manali
      </div>
      <div className="flex">
        <RecommendedHotels />
        <LocationWiseFilter />
      </div>
    </div>
  );
}
