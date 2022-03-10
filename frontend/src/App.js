import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
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
