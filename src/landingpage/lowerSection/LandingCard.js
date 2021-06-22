import React from 'react'
import lasvegas from './images/lasvegas.png'
import todolist from './images/todolist.png'
import login from './images/login.png'
import './LandingCard.css'
const Landingdiv = () => {
    return (
        <div className="section">
            <div className="first">
              <div class="card card1">
        <div class="img-container">
            <img src={lasvegas} alt="las vegas"/>
        </div>
        <div class="details">
            <span>Habit Tracker</span>
            <p>One of the main feature MyLyfe provides is the ability to track any habit at any given moment, all at the same time while visually seeing the progress. </p>
        </div>
        </div>
        </div>

        <div className="second">
        <div class="card card2">
        <div class="img-container">
            <img src={todolist} alt="las vegas"/>
        </div>
        <div class="details">
        <span>Todo List</span>
            <p>Mylife provides the newest form of todolist. With it's instant speed, it allows users to input their todo with no delay. My life provides instant feedback</p>
        </div>
        </div>
        </div>

        <div className="third">
        <div class="card card3">
        <div class="img-container">
            <img src={login} alt="las vegas"/>
        </div>
        <div class="details">
            <span>Authentication</span>
            <p>Mylife users firebase and firestore to implement secured and unbreachable authentication. So users know their information protected</p>
        </div>
        </div>
        </div>
     
        </div>
    )
}

export default Landingdiv
