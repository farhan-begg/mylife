import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import { AuthContext } from "./Auth.js";
import './Login.css'

export const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);

            } catch (error) {
                alert(error);
            }
        },
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        console.log()
        console.log(currentUser.uid)
        return <Redirect to="/" />;
    }
    return (
        <form onSubmit={handleLogin}>

            <div className="base-container" >
                <div className="header-99">Login</div>
                <div className="content-99">
                    <div className="form"  >
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>

                    </div>
                </div>
                <div className="footer">

                    <button className="submit-button" variant="primary" type="submit" Redirect="/home">
                        Submit
                    </button>

                </div>
            </div>
        </form>
    );
}


export default withRouter(Login);