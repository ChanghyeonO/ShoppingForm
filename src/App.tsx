import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
