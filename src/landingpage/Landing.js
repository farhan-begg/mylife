
import React ,{useEffect}from 'react';
import Footer from './lowerSection/Footer';
import './Landing.css';
import Landingdiv from './lowerSection/Landingdiv'
import Aos from "aos";
import "aos/dist/aos.css"

function Landing() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
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
      </div>
      <div>
      </div>
      <div data-aos="fade-left"> <Landingdiv/></div>
     <div data-aos="fade-right"><Footer/></div>
    </div>

  );
}

export default Landing;