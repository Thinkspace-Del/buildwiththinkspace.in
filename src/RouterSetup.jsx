import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Join from "./pages/Join";

function RouterSetup() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/start-building" element={<Join />} />
    </Routes>
  );
}

export default RouterSetup;
