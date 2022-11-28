import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Press from "./pages/press";
import About from "./pages/about";
import Video from "./pages/video";
import Friends from "./pages/friends";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/press" element={<Press />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  );
}

export default App;
