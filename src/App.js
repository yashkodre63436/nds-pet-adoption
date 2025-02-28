import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Home from "./components/Home"; // Make sure you import Home from the correct file
// import About from "./components/About";
// import PetAdoption from "./components/PetAdoption";
// import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/adoption" element={<PetAdoption />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;