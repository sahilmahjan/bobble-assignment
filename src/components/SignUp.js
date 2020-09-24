import React, { Component } from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { IconContext } from "react-icons";

class SignUp extends Component {
    render() {
        return (
            <div className="main">
            <div class="page">
                <div class="header">
                    <h1 class="logo">SIGN UP</h1>
                    <h2 class="">Create your account</h2>
                    <IconContext.Provider value={{ color: "blue",size: "1.4em" }}>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" class="google-button">
                    <span class="google-button__text"> <FcGoogle/>Sign in with Google</span>
                    </button>
                    <button type="button" class="google-button">
                    <span class="google-button__text"> <AiFillFacebook/>Sign in with Facebook</span>
                    </button>
                    </IconContext.Provider>
                    <div>
                    <hr/>
                    <h6 className="or">OR</h6>
                    <hr/>
                    </div>
                </div>
                <div class="container">
                    <form action="">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <ul className="terms">
                        <li>By clicking sign up, you agree to our </li>
                        <li><a href="#">Terms </a></li>
                        <li><a href="#">of use</a></li>
                        <li> and </li>
                        <li><a href="#">our privacy policy</a> .</li>
                    </ul>
                    <button>Sign up</button>
                    </form>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default SignUp
