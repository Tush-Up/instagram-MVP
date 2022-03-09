import React from "react";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Routes>
    //   <Route path="/login" element={<Main />} />
    //   <Route path="/" element={<Login />} />
    //   <Route path="/signup" element={<Signup />} />
    // </Routes>
    <Auth/>
  );
}

export default App;
