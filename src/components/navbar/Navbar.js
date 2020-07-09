import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './navbar.css'
import firebase from '../../firebase'


function Customnavbar() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="rgba(238, 245, 219, 0.397);" variant="dark">
            <div className="Logo"></div>
            <Navbar.Brand href="/" style={{ color: "#EEF5DB;" }}>My Lyfe</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/todolist">Todolist 📝</Nav.Link>
                    <Nav.Link href="/habit">Habit Tracker 📈</Nav.Link>
                    <Nav.Link href="/login">Login/Register 👤</Nav.Link>
                    <button className="sign-out-button" align="right" onClick={() => firebase.auth().signOut()}>Sign out</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Customnavbar;
