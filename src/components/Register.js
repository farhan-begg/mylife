import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { auth, provider, addUserDocument } from '../firebase'


class Register extends Component {
    constructor() {
        super();

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
            <div>
                <h1>Register</h1>

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicDisplay">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter display name" name="dname" onChange={this.onHandleChange} />
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
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                </Form>

                <Button variant="success" type="submit" onClick={this.signInWithGoogle}>
                    Google Sign IN
                </Button>

                <Button variant="secondary" type="submit" onClick={this.signOutFromGoogle}>
                    Google Sign OUT
                 </Button>

            </div>
        )
    }
}
export default Register