
import React from 'react';
// import { Navbar, Jumbotron, Nav, Container } from 'react-bootstrap';
import './Landing.css';
import firebase from "../firebase";


function Landing() {

  return (
    <div>
      <div>
        <header className="header-1" >
          {/* <img src={`${process.env.PUBLIC_URL}images/LandingImage.jpg`} alt="Logo" className="image" /> */}
          <div className="logo-box">
            {/* <img src={`${process.env.PUBLIC_URL}images/Logo.png`} alt="Logo" className="logo" /> */}

          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">myLyfe</span>
              <span className="heading-primary-sub">Time To Level Up</span>
            </h1>
            <a href="/register" className="btn btn-white btn-animated">Start Your Journey</a>
          </div>
        </header>
      </div>
    </div>

  );
}

export default Landing;