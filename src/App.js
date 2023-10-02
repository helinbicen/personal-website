import "./App.css";
import "./utils/gtm";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import CoinSearch from "./components/Projects/CoinSearch";
import Momentum from "./components/Projects/Momentum";
import TourismAssistant from "./components/Projects/TourismAssistant";
import Survey from "./components/Projects/Survey";
import Contact from "./components/Contact";
import RickAndMorty from "./components/Projects/RickAndMorty";
import LittleLemon from "./components/Projects/LittleLemon"

function App() {
  return (
    <div className="App" id="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Education />
      <TourismAssistant />
      <Survey />
      <RickAndMorty />
      <LittleLemon />
      <CoinSearch />
      <Momentum />
      <Contact />

    </div>
  );
}

export default App;
