import React from 'react';
import './Signup.css';
import LeftBg from '../../components/LeftBg/LeftBg';

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-left">
        <LeftBg/>
      </div>

      <div className="signup-right">
        <div className="signup-main">
          <h3>Sign up to see photos and videos from your friends</h3>
          <button className="fb-btn">Log in with Facebook</button>

          <div className="lines">
            <span className="line"></span> Or <span className="line"></span>
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

            <button type="submit">Signup</button>

            <div className="terms">
              <p>
                By signing up, you agree to our Terms. Learn how we collect, use
                and share your data in our Data Policy and how we use cookies
                and similar technology in our Cookies Policy.
              </p>
            </div>
          </form>
          <div>
            <p>Get the app</p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup