import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';




function SignUp() {
    return (
      <div>
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Sign Up
                </Button>
            </Form>
        </Container>
    
      </div>
    );
  }
  
  export default SignUp;