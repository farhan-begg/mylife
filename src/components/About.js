
import React from 'react';
import './About.css';
import firebase from "../firebase";


function About() {

  return (
    <div className="section">
        <h1 className="display">Meet the Team</h1>
        <div className="card-container">
            
                <div className="card-front">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="card-image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/68796215_10215911257634510_2431689480881569792_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_oc=AQmx67VWQ5sj3kpWry_GvGjleEUGd48sHlyiXfWw9Qe1KvMinI4n7f6VOgZq-wv3qZoR2Cz6SOgyIK4ui3IpruMO&_nc_ht=scontent-sjc3-1.xx&oh=a3a0b7b915271376f73563a6081dfd4c&oe=5F234248" alt="Avatar"/>
                            <div className="container-card">
                                <h4><b>Alanna Noguchi</b></h4> 
                                <p>Architect & Engineer</p> 
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>  
                    </div>
                </div>
                <div className="card-front">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="card-image" src="https://avatars2.githubusercontent.com/u/54567793?s=400&u=c841155d7401ee3eeed6632d4570dffdec37acff&v=4" alt="Avatar"/>
                            <div className="container-card">
                                <h4><b>Farhan Begg</b></h4> 
                                <p>Architect & Engineer</p> 
                            </div>  
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>  
                    </div>
                </div>
            <div className="card-front">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="card-image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67315201_10220148779936551_5482333523492732928_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_oc=AQljI5d4x3wJzaZ-2gmvSmdmgbyem-l5opTCL-M0uVeZad1PoNtx04eDjHW_I4_lja_QylblhHW4jqPduUdVbW7J&_nc_ht=scontent-sjc3-1.xx&oh=9c28eecd73d660916c976ee457929eff&oe=5F24223A" alt="Avatar"/>
                        <div className="container-card">
                            <h4><b>Shaan Hurley</b></h4> 
                            <p>Architect & Engineer</p> 
                        </div>
                    </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1> 
                    <p>Architect & Engineer</p> 
                    <p>We love that guy</p>
                </div>  
                </div>          
            </div>  
        </div>
    </div>
  );
}

export default About;

