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
import Game1Window from "./components/game1Window";
import Sinhala from "./components/lessons/sinhala";
import English from "./components/lessons/english";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Add from "./components/adminPanel/Add";
import Edit from "./components/adminPanel/Edit";

import './components/style.css';
import "./App.css";
import "./components/style.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [idToken, setIdToken] = useState(null);
  const [landingPageData, setLandingPageData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleLogin = (username, token) => {
    setEmail(username);
    setIdToken(token); 
    setLoggedIn(true); 
    // alert(`User ${username} logged in successfully!`);
  };

  const handleSignup = (username) => {
    // Handle signup logic
    setEmail(username);
    // alert(`User ${username} signed up successfully!`);
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
          element={loggedIn ? <Game idToken={idToken} email={email}/> : <Navigate to="/login" />}
        />
        <Route
          path="/leaderboard"
          element={<Board idToken={idToken} />}
        />
        <Route path="/leaderBoard" element={<Board />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/game1" element={<Game1Window />} />
        <Route path="/lesson/sinhala" element={<Sinhala />} />
        <Route path="/lesson/english" element={<English />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/create" element={<Add/>} />
        <Route path="/admin/update/:id" element={<Edit/>} />
        <Route path="/admin/delete/:id" element={<Add/>} />
        {/* <Route path="/profileCard" element={<ProfileCard/>} /> */}
        {/* <Route path="/student" element={<StudentProfile/>} />
        <Route path="/teacher" element={<TeacherProfile/>} /> */}


      </Routes>
    </Router>
  );
};

export default App;
