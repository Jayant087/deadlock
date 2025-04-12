import RecommendedHotels from "./RecommendedHotels";
import LocationWiseFilter from "./LocationWiseFilter";

export default function HotelOfferPage() {
  return (
    <div className="">
      <div className="font-helveticaCompressed font-medium text-[#9a9a9a] ml-10 text-3xl mb-5">
        Exclusive deals in manali
      </div>
      <div className="flex">
        <RecommendedHotels />
        <LocationWiseFilter />
      </div>
    </div>
  );
}
