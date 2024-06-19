//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigations";
import Secondpage from "./components/Second";
import Thirdpage from "./components/Third";
("./components/Navigations");
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Secondpage />
      <Thirdpage />
    </div>
  );
};

export default App;
