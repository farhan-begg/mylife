import React, { useState } from 'react';
import { Navbar, Nav, } from 'react-bootstrap'
import './navbar.css'
import firebase from '../../firebase'



function Customnavbar() {
    // initialize variable false 
    let [usersignedin, setUsersignedin] = useState(false)

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // changes value of state variable to true
            setUsersignedin(true)

        }

    })

    // reloads page once signed out
    let handleSignout = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                window.location.reload()
            })


    }

    return (
        <div className="background-image"> 
        
        <Navbar collapseOnSelect expand="lg" >

            <div className="Logo"></div>
            <Navbar.Brand className="navbar_brand"  style={{ color: "white" }} href="/" >My Lyfe</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="/">Home 🛖</Nav.Link>
                    <Nav.Link href="/todolist">Todolist 📝</Nav.Link>
                    <Nav.Link href="/habit">Habit Tracker 📈</Nav.Link>


                    {!usersignedin && (
                        <Nav.Link href="/login">Login/Register 👤</Nav.Link>
                    )}

                    {usersignedin && (
                        <button className="sign-out-button" align="right" onClick={handleSignout}>Sign out</button>)

                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >

        </div>



    )
}

export default Customnavbar;
