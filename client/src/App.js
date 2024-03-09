import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import RoomAllotmentPage from "./components/RoomAllotmentPage";
import LandingPage from "./components/landingPage";
import RoomType from "./components/Roomtype";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/landing" element={<LandingPage />} exact />
        <Route path="/room" element={<RoomAllotmentPage />} exact />
        <Route path="/roomtype" element={<RoomType />} exact />
      </Routes>
    </div>
  );
}

export default App;
