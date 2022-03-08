import React from 'react';
import '../Nav/Nav.css';
import {RiSearchLine} from "react-icons/ri";
import NavLogo from '../../asserts/navLogo.jpg';
import compass from '../../asserts/compass.jpg';
import home from '../../asserts/home.jpg';
import love from '../../asserts/love.jpg';
import messenger from '../../asserts/messenger.jpg';
import tushup from '../../asserts/tushup.jpg';
import zoomin from '../../asserts/zoom-in.jpg';


const Nav = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <div className="navLogo">
              <a href="/" className="brand-logo">
                <img src={NavLogo} alt="NavLogo" />
              </a>
            </div>
            <div className="searchBar">
              <RiSearchLine className="color" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="navLinks">
              <ul className="nav">
                <li><img src={home} alt=""/></li>
                <li><img src={messenger} alt=""/></li>
                <li><img src={zoomin} alt=""/></li>
                <li><img src={compass} alt=""/></li>
                <li><img src={love} alt=""/></li>
                <li><img src={tushup} alt=""/></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;