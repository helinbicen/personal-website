import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import CoinSearch from "./components/Projects/CoinSearch";
import Momentum from "./components/Projects/Momentum";
import ToDo from "./components/Projects/ToDo";
import TourismAssistant from "./components/Projects/TourismAssistant";
import Survey from "./components/Projects/Survey";
import Contact from "./components/Contact";
import RickAndMorty from "./components/Projects/RickAndMorty";

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
      <CoinSearch />
      <Momentum />
      <ToDo />
      <Contact />

    </div>
  );
}

export default App;
