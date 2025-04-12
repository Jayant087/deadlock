// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import EndPage from "./pages/EndPage";
import MiddlePage from "./pages/MiddlePage";
import PlanYourTrip from "./pages/PlanYourTrip";
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
              <Demo />
              <EndPage />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
