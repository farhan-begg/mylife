import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './navbar.css'


function Customnavbar() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="rgba(253, 250, 250, 0.397);" variant="dark">
            <Navbar.Brand href="/" style={{color:'grey'}}>My Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/todolist" style={{color:'grey'}}>Todolist 📝</Nav.Link>
                    <Nav.Link href="/habit" style={{color:'grey'}}>Habit Tracker 📈</Nav.Link>
                    <Nav.Link href="/login" style={{color:'grey'}}>Login/Register 👤</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Customnavbar;