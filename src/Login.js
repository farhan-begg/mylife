import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { auth } from './firebase'



class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    onHandleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(value)
    }

    onSubmit = e => {
        const { email, password } = this.state
        try {
            auth.signInWithEmailAndPassword(email, password)
            alert("You have signed in!")
        } catch (error) {
            console.log("there was a problem: ", + error.message)
        }
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onHandleChange} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onHandleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login