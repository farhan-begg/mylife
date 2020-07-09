import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Features.css';
import firebase from "../firebase";


function Features() {

  return (
    <div className="section">
        <h1 className="display">Product Features</h1>
        <div className="card-container">
            
                <div className="card-frontt">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="card-image" src="https://images.unsplash.com/photo-1547480053-7d174f67b557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar"/>
                            <div className="container-card">
                                <h4><b>Todo List</b></h4> 
                                <p>Keep a list of the things you need to do.</p> 
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <h1>Monday</h1> 
                            <p>1. Morning Run</p> 
                            <p>2. Feed dogs</p>
                            <p>3. Call Mom</p>
                            <p>4. Book flights to Hawaii</p>
                        </div>  
                    </div>
                </div>
                <div className="card-frontt">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="card-image" src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar"/>
                            <div className="container-card">
                                <h4><b>Habit Tracker</b></h4> 
                                <p>Track your progression with each habit.</p> 
                            </div>  
                        </div>
                        <div className="flip-card-back">
                            <h1>Name of Habit: Biking</h1> 
                            <p>Amount: 10</p> 
                            <p>Progress: 4/10</p>
                        </div>  
                    </div>
                </div>
            <div className="card-frontt">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="card-image" src="https://images.unsplash.com/photo-1535726685122-73b80565bf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar"/>
                        <div className="container-card">
                            <h4><b>Personalized</b></h4> 
                            <p>Made by you, for you.</p> 
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

export default Features;
