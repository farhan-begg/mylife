import React from 'react';
import './Footer.css'

const Footer = () => {
    return (




        <div className="three-cards">
            <div className="big-box">
                <div className="conatiner">
                    <div className="wrap">
                        <div className="box one">
                            <h1>My Life</h1>
                            <div className="poster p1">
                                <h4>A</h4>
                            </div>
                        </div>
                        <div className="box two">
                            <h1>Habit</h1>
                            <div className="poster p2">
                                <h4>F</h4>
                            </div>
                        </div>
                        <div className="box three">
                            <h1>
                                Your List
                    </h1>
                            <div className="poster p3">
                                <h4>S</h4>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <footer align="center">
                        &copy;{new Date().getFullYear()} My Life Inc | All rights reserved | Terms of Service | Privacy
            </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer;