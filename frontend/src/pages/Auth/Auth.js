import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import LeftBg from '../../components/LeftBg/LeftBg';
import './Auth.css';

const Auth = (question, action) => {
  return (
    <div className='auth'>
      <div className="auth-left">
        <LeftBg question="Don't have an account?" action="Sign up" />
      </div>
      <div className='auth-right'>
        <Login/>
      </div>
    </div>
  );
}

export default Auth