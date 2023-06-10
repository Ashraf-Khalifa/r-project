import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Items from "./pages/items";
import Tourist from "./pages/tourist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/tourist" element={<Tourist />} />
    </Routes>
  );
}

export default App;
