import React from 'react';
import { Navbar, Jumbotron, Nav, Container } from 'react-bootstrap';
import '../components/Landing.css'


function Landing() {
    return (
      <div>
        <Navbar className="Navbar" expand="lg">
            <Navbar.Brand href="#home">myLife</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <div className="navlink">
                    <Nav.Link>Login</Nav.Link>
                </div> 
            </Nav>
        </Navbar>  
      </div>
    
    );
  }
  
  export default Landing;