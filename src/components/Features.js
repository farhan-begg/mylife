import React from 'react';
import './Features.css';
import firebase from "../firebase";


function Features() {

    return (
        <div className="section-feature">
            <h1 className="display">Product Features</h1>
            <div className="card-container">

                <div className="card-front-1">
                    <div className="flip-card-front-8">
                        <img className="card-image-1" src="https://images.unsplash.com/photo-1547480053-7d174f67b557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar" />
                        <div className="container-card-1">
                            <h4><b>Todo List</b></h4>
                            <p>Track your progression with each <b>habit
                                simply dummy text of ypesetting industry.
                                </b>
                                <b>
                                </b> Lorem Ipsum has been the industry's

                            <b />it to make a type specimen book. It has.</p>                        </div>
                    </div>
                </div>
                <div className="card-front-1">

                    <div className="flip-card-front-8">
                        <img className="card-image-1" src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar" />
                        <div className="container-card-1">
                            <h4><b>Habit Tracker</b></h4>
                            <p>Track your progression with each <b>habit
                                simply dummy text of ypesetting industry.
                                </b>
                                <b>
                                </b> Lorem Ipsum has been the industry's

                            <b />it to make a type specimen book. It has.</p>
                        </div>
                    </div>


                </div>
                <div className="card-front-1">

                    <div className="flip-card-front-8">
                        <img className="card-image-1" src="https://images.unsplash.com/photo-1535726685122-73b80565bf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Avatar" />
                        <div className="container-card-1">
                            <h4><b>Personalized</b></h4>
                            <p>Track your progression with each <b>habit
                                simply dummy text of ypesetting industry.
                                </b>
                                <b>
                                </b> Lorem Ipsum has been the industry's

                            <b />it to make a type specimen book. It has.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
}

export default Features;
