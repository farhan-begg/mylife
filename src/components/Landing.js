
import React from 'react';
// import { Navbar, Jumbotron, Nav, Container } from 'react-bootstrap';
import './Landing.css';
import About from './About'
import Features from './Features'


function Landing() {

  return (
    <div>
      <div>
        <header className="header-1" >
          <div className="logo-box">
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
      <div>
        <Features />
      </div>
      <div>
        <About />
      </div>
    </div>

  );
}

export default Landing;