import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Customnavbar() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">My Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/todolist">Todolist</Nav.Link>
                    <Nav.Link href="/habit">Habit Tracker</Nav.Link>
                    <Nav.Link href="/login">Login/Register</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Customnavbar;