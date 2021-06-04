
// import loginImg from "/login.svg";
import React, { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
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
        <style>{'body { background-image:url(https://wallpaperaccess.com/full/16692.jpg),}'}</style>
        <div className="header-99">Register</div>
        <div className="content-99">
          <div className="image-99">
            <div className="Logo"></div>
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
          <button className="submit-button" variant="primary" type="submit" Redirect="/home">
            Submit
            </button>



        </div>
      </div>
    </Form >

  );
}


export default withRouter(Register);