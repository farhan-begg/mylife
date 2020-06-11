import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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

            </div>
        )
    }
}

export default Register 