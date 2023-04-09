import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Destination from "./components/Destination";
import Crew from "./components/Crew.jsx";
import Technology from "./components/Technology";
import { Routes, Route } from "react-router-dom";
import data from './components/data.js'

// const res = await fetch("../data.json").then((response) => response.json());
const res = await data();

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination data={res.destinations} />}
        />
        <Route 
        path="/crew" 
        element={<Crew data={res.crew} />}
         />
        <Route
          path="/technology"
          element={<Technology data={res.technology} />}
        />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
