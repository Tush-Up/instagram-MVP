import React from 'react';
import './Signup.css';
import LeftBg from '../../components/LeftBg/LeftBg';
import appStoreImg from '../../assets/appstore.png';
import playStoreImg from '../../assets/playstore.png';
import fbIcon from '../../assets/fb-icon.png';

const Signup = (question, action) => {
  
  return (
  
      <div className="signup-right">
        <div className="signup-main">
          <p>Sign up to see photos and videos from your friends</p>
          <button className="fb-btn">
            <img src={fbIcon} alt="facebook icon" /> Log in with Facebook
          </button>

          <div className="lines">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <form action="">
            <div className="inputs">
              <div>
                <input type="text" placeholder="Mobile Number or Email" />
              </div>
              <div>
                <input type="text" placeholder="Full Name" />
              </div>

              <div>
                <input type="text" placeholder="Username" />
              </div>

              <div>
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <button className="submit-btn" type="submit">
              Sign up
            </button>

            <div className="terms">
              <p>
                By signing up, you agree to our Terms. Learn how we collect, use
                and share your data in our Data Policy and how we use cookies
                and similar technology in our Cookies Policy.
              </p>
            </div>
          </form>
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

export default Signup