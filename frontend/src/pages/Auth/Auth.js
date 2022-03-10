import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import LeftBg from "../../components/LeftBg/LeftBg";
import "./Auth.css";

const Auth = (question, action) => {
  return (
    <div className="auth">
      <div className="auth-left">
        <LeftBg
          question={
            window.location.pathname === "/login" ||
            window.location.pathname === "/"
              ? "Don't have an account?"
              : window.location.pathname === "/signup"
              ? "Already have an account"
              : ""
          }
          action={
            window.location.pathname === "/login" ||
            window.location.pathname === "/" ? (
              <Link to="/signup">Sign up</Link>
            ) : window.location.pathname === "/signup" ? (
              <Link to="/login">Log in</Link>
            ) : (
              ""
            )
          }
        />
      </div>
      <div className="auth-right">
        {window.location.pathname === "/" && <Login />}
        {window.location.pathname === "/login" && <Login />}
        {window.location.pathname === "/signup" && <Signup />}
      </div>
    </div>
  );
};

export default Auth;
