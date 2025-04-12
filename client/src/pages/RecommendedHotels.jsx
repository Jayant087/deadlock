import React, { useEffect, useState } from "react";
import hotel2 from "../assets/hotel2.png";
const CountdownTimer = () => {
  const [time, setTime] = useState({ minutes: 22, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let seconds = prevTime.seconds - 1;
        let minutes = prevTime.minutes;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }

        return {
          minutes: minutes < 0 ? 0 : minutes,
          seconds: seconds < 0 ? 0 : seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-2 border-black rounded-full w-[20vw] text-center">
      <h1 className="text-xl font-bold">Limited time Offer</h1>
      <div className="flex justify-center space-x-2 text-4xl font-mono">
        <div>{String(time.minutes).padStart(2, "0")}</div>:
        <div>{String(time.seconds).padStart(2, "0")}</div>
      </div>
    </div>
  );
};

const HotelCard = ({ title, description }) => (
  <div className="bg-white w-[20vw] rounded-lg shadow-md">
    <div
      className="w-[20vw] h-20 my-4  bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${hotel2})`,
        width: "12vw",
        height: "23vh",
      }}
    />
    <h2 className="text-lg justify-center flex font-semibold mt-3">{title}</h2>
    <p className="text-gray-700 justify-center flex">{description}</p>
    <div className="flex-">
      <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded">
        Check availability →
      </button>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="w-[30vw] flex justify-center">
      <div className="flex justify-evenly flex-col">
        <CountdownTimer />
        <HotelCard
          title="Fab Hotels Manali"
          description="60% flat off on booking now"
        />
        <HotelCard
          title="Fab Hotels Manali"
          description="60% flat off on booking now"
        />
        <HotelCard
          title="Fab Hotels Manali"
          description="60% flat off on booking now"
        />
      </div>
    </div>
  );
};

export default App;
