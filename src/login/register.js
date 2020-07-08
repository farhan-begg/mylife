
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
        {/* <style>{'body { background-image:url(https://i1.wp.com/wanderlustphotosblog.com/wp-content/uploads/2018/02/beach-sunset.jpg?resize=960%2C638&ssl=1)}'}</style> */}
        <div className="header-99">Register</div>
        <div className="content-99">
          <div className="image-99">
            {/* <img src="http://hdwpro.com/wp-content/uploads/2019/02/mountain-4K-Nature-image.jpg" /> */}
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