import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { Game } from "./components/game";
import { Ab } from "./components/ab";
import Feedback from "./components/feedback";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { ProfileCard } from "./components/profileCard";
import Board from "./components/board";
import { Footer } from "./components/footer";
import Game1Window from "./components/game1Window"; // Make sure to import the Game1Window component
import './components/style.css';
import "./App.css";
import "./components/style.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleLogin = (username) => {
    alert(`User ${username} logged in successfully!`);
    setLoggedIn(true);
    // You can redirect the user to a different page or perform other actions after login
  };

  const handleSignup = (username) => {
    // Handle signup logic
    alert(`User ${username} signed up successfully!`);
    setLoggedIn(true);
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
              <Intro data={landingPageData.Intro} />
              <Features data={landingPageData.Features} />
              <Gallery data={landingPageData.Gallery} />
              <Footer data={landingPageData.Footer} />
            </div>
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignup={handleSignup} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/game"
          element={loggedIn ? <Game /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={<ProfileCard data={landingPageData.Profile} />}
        />
        <Route path="/leaderBoard" element={<Board />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/game1" element={<Game1Window />} /> {/* Add route for Game1Window */}
      </Routes>
    </Router>
  );
};

export default App;
