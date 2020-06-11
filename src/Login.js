import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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




    render() {
        return (
            <div>
                <h1>Login</h1>

                <Form>

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