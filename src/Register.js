import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { auth, provider } from './firebase'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: '',

        }
    }

    onHandleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(value)

    }


    onSubmit = e => {
        console.log("testing")
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
            console.log('You have signed out')
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
            console.log('error')
        });

    }





    render() {
        return (
            <div>
                <h1>Register</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" name="dname" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="confirmpassword" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <Button variant="success" type="submit" onClick={this.signInWithGoogle}>
                    Google Sign In
                </Button>

                <Button variant="warning" type="submit" onClick={this.signOutFromGoogle}>
                    Google Sign Out
                </Button>

            </div>
        )
    }
}

export default Register 