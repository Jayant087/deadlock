// src/App.jsx
import React from "react";
import Homepage from "./components/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HotelCard from "./components/HotelCard";
import Demo from "./pages/Demo";
import EndPage from "./pages/EndPage";
import MiddlePage from "./pages/MiddlePage";
function App() {
  return (
    <div>
      <Homepage />
      <MiddlePage />
      {/* <Signup />
      <Login /> */}
      <Demo />
      <EndPage />
    </div>
  );
}

export default App;
