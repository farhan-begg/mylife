import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import firebase from '../../firebase'
import './navbar.css'
function Customnavbar() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="rgba(253, 250, 250, 0.397);" variant="dark">
            <Navbar.Brand href="/" style={{ color: 'grey' }}>My Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/todolist">Todolist</Nav.Link>
                    <Nav.Link href="/habit">Habit Tracker</Nav.Link>
                    <Nav.Link href="/login">Login/Register</Nav.Link>
                    <button align="right" onClick={() => firebase.auth().signOut()}>Sign out</button>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Customnavbar;