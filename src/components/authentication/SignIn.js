import React, { Component } from 'react'
import './Signin.css'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container-3">


                <div class="content">
                    <div class="title">Create account</div>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="checkbox" id="rememberMe" />
                    <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                    <button>Create Account</button>
                    <div class="social"> <span>or sign up with social media</span></div>
                    <div class="buttons">
                        <button class="facebook"><i class="fa fa-facebook"></i>Facebook</button>
                        <button class="twitter"><i class="fa fa-twitter"></i>Twitter</button>
                        <button class="google"><i class="fa fa-google-plus"></i>Google</button>
                    </div>
                    <div class="already">Already have an account? <a href="#">Sign In</a></div>
                </div>


            </div>
        )
    }
}

export default SignIn