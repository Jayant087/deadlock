// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Conclusion from "./pages/Conclusion";
import MiddlePage from "./pages/MiddlePage";
import PlanYourTrip from "./pages/PlanYourTrip";
import HotelOfferPage from "./pages/HotelOfferPage";
// import HotelResults from "./pages/HotelResults";
import HotelList from "./pages/HotelList";
import SearchFilterPage from "./pages/SearchFilterPage";
import RoomLayout from "./pages/RoomsLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <MiddlePage />
              <HotelOfferPage />
              <Conclusion />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/results" element={<HotelResults />} /> */}
        <Route path="/searchfilter" element={<SearchFilterPage />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/hotels/:location" element={<HotelList />} />
        <Route path="/room-layout" element={<RoomLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
