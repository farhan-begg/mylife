// src/Title.js

import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
    return (
      <div className="Title">
        <header>
          <h1>myLife</h1>
          <div className="Title-Subtitle">habit and todo list tracker</div>

          <div>
            {/* <NavLink to="/">List</NavLink>
            <NavLink to="/about">About</NavLink> */}
            {/* Add a class name to add style with  Title.css */}
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/signup">Sign-Up</NavLink>

          </div>
        </header>
      </div>
    )
}


export default Title