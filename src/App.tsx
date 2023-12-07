import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import ServiceTerms from "./pages/Register/ServiceTerms";
import Register from "./pages/Register/Register";
import SuccessRegister from "./pages/Register/SuccessRegister";
import PostMain from "./pages/PostMain/PostMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-terms" element={<ServiceTerms />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<SuccessRegister />} />
        <Route path="/post-main" element={<PostMain />} />
      </Routes>
    </>
  );
}

export default App;
