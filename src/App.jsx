import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Ab } from "./components/ab";
import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
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

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Ab data={landingPageData.Ab} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
      <ProfileCard data={landingPageData.Contact}/>
    </div>
  );
};

export default App;
