import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/feeds" element={<Main />} />
      </Routes>
  );
}

export default App;
