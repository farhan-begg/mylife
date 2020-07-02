
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './About.css';
import firebase from "../firebase";


function About() {

  return (
    <div className="card-about">
        <img className="card-image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67315201_10220148779936551_5482333523492732928_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_oc=AQljI5d4x3wJzaZ-2gmvSmdmgbyem-l5opTCL-M0uVeZad1PoNtx04eDjHW_I4_lja_QylblhHW4jqPduUdVbW7J&_nc_ht=scontent-sjc3-1.xx&oh=9c28eecd73d660916c976ee457929eff&oe=5F24223A" alt="Avatar"/>
        <div className="container-card">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
    </div>

  );
}

export default About;