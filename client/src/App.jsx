import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import NoticesPage from "./pages/NoticesPage.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Routes for landing page and notices */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        {/* You can add more routes here, e.g., /events, /timetable */}
      </Routes>
    </div>
  );
}

export default App;
