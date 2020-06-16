import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./CustomNavbar.css"



function CustomNavbar(){
    return (
        <div>
            <Navbar className="Navbar" expand="lg">
                <Navbar.Brand href="#home"><img src={`${process.env.PUBLIC_URL}images/Logo.png`} alt="Logo" className="brand"/></Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <div className="navlink">
                        <Nav.Link>Login</Nav.Link>
                    </div> 
                </Nav>
            </Navbar>  
        </div>
    )
}


export default CustomNavbar;    