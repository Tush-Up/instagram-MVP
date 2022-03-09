import React from 'react';
import Signup from './pages/Signup/Signup';
import Main from "./pages/Main";
import LoginPage from './pages/LoginPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      // <Routes>
      //   <Route path="/login" element={<Main />} />
      //   <Route path="/" element={<LoginPage />} />
      // </Routes>
      <Signup/>
  );
}

export default App;
