import React from 'react'
import './Login.css';
import LeftBg from '../../components/LeftBg/LeftBg'
// import Faeye from 'react-icons/lib/fa/eye';
import appStoreImg from "../../assets/appstore.png";
import playStoreImg from "../../assets/playstore.png";
import fbIcon from "../../assets/fb-blue.png";
const Login = (question, action) => {
  return (
    <div className="signup-right">
      <div className="signup-main">
        <p>Login to see photos and videos from your friends</p>

        <form action="">
          <div className="inputs">
            <div>
              <input
                type="text"
                placeholder="Mobile Number or Email"
                required
              />
            </div>

            <div>
              <input type="password" placeholder="Password" required />
            </div>
          </div>

          <button className="submit-btn" type="submit">
            Log in
          </button>
        </form>

        <div className="lines">
          <div className="line"></div> <span>OR</span>{" "}
          <div className="line"></div>
        </div>

        <button className="login-fb-btn">
          <img src={fbIcon} alt="facebook icon" /> Log in with Facebook
        </button>

        <div className="get-app">
          <p>Get the app</p>
          <div>
            <img src={playStoreImg} alt="Playstore" />
            <img src={appStoreImg} alt="Appstore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login