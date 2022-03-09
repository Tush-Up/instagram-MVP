import React from 'react'
import './Login.module.css';
// import Faeye from 'react-icons/lib/fa/eye';
import Or from "../../asserts/Or.jpg";
const Login = () => {
  return (
    <>
      <div className="mainform">
        <form>
          <div>
            <h4>Log in to see photos and videos from your friends.</h4>
          </div>
          <div className="form-group">
            <input placeholder="Email" type="email" />
          </div>
          <div className="form-group">
            <input placeholder="Password" type="password"/>
          </div>
          <div className="form-group">
            <button className="btn">Login</button>
          </div>
          <div className="form-group">
            <img src={Or} alt="Or" classname="OrImage"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login