import React from "react";
// import loginImg from "../../login.svg";
import{  auth, provider, addUserDocument } 
from '../firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


export class Login extends React.Component {
    constructor(props) {
        super(props);

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
            <Form>
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="form" onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder="Enter email" name="email"  onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"onChange={this.onHandleChange}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                  
                <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </div>
            </div>
            </Form>
        );
    }
}


{/* <Form onSubmit={this.onSubmit}>
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
</Form> */}