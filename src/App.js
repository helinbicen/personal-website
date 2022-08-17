import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./shared/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
