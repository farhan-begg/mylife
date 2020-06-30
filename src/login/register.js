
// import loginImg from "/login.svg";
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { auth, provider, addUserDocument } from '../firebase'


export class Register extends React.Component {
  constructor(props) {
    super(props);


        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''

        }
    }

    onHandleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(value)
    }

    onSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmpassword } = this.state

        try {
            const { reguser } = await auth.createUserWithEmailAndPassword(email, password)
            addUserDocument(reguser)
            alert("You are now registered!")
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        } catch (error) {
            console.log("there was a problem: " + error.message)
        }
    }

    signInWithGoogle = e => {
        auth.signInWithRedirect(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }

    signOutFromGoogle = e => {
        auth.signOut().then(function () {
            console.log("You have signed out")
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
            console.log(error.message)
        });
    }


  render() {
    return (
        <Form onSubmit={this.onSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.onHandleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"  onChange={this.onHandleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"  onChange={this.onHandleChange}/>
            </div>
          </div>
        </div>
        <div className="footer">
                <Button variant="primary" type="submit">
                        Submit
                     </Button>
             

                <Button variant="success" type="submit" onClick={this.signInWithGoogle}>
                    Google Sign IN
                </Button>

                <Button variant="secondary" type="submit" onClick={this.signOutFromGoogle}>
                    Google Sign OUT
                 </Button>
        </div>
      </div>
      </Form>
    );
  }
}