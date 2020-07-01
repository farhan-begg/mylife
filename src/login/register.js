
// import loginImg from "/login.svg";
import React, { Component, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router";
import firebase from "../firebase";

export const Register = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);

    } catch (error) {
      alert(error);
    }
  });


  return (
    <Form onSubmit={handleSignUp}>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button variant="primary" type="submit">
            Submit
            </button>



        </div>
      </div>
    </Form >
  );
}


export default withRouter(Register);