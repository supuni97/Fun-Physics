import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Ab } from "./components/ab";
import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import "./App.css";
import { ProfileCard } from "./components/profileCard";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleLogin = (username) => {
    alert(`User ${username} logged in successfully!`);
    // You can redirect the user to a different page or perform other actions after login
  };

  const handleSignup = (username) => {
    // Handle signup logic
    alert(`User ${username} signed up successfully!`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navigation />
              <Header data={landingPageData.Header} />
              <Ab data={landingPageData.Ab} />
              <Features data={landingPageData.Features} />
              <Gallery data={landingPageData.Gallery} />
              <Contact data={landingPageData.Contact} />
    </div>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/profile" element={<ProfileCard data={landingPageData.Profile}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
