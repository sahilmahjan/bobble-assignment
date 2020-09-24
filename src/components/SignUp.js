import React, { Component } from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends Component {

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        registerResp:null,
        registerSuccess:false,
        isAgree:false
    }

    registerRequest()
    {
         //registering
          fetch('https://reqres.in/api/register',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.error)
            {
               toast.error("Use Default API credentails")
            }else{
                localStorage.setItem('token', data.token); //for future use
                this.setState({registerResp:data,registerSuccess:"true"})
                toast.success("Registeration Sucessful !");
            }
        }
      )
        .catch(err=> console.log(err));
    }

    handleRegister=(event)=> {
        event.preventDefault();

        if(this.state.firstName==='' || this.state.lastName==='' ||  this.state.email==='' || this.state.password==='')
        {
             toast.warn("Fill all the fields before submitting!")
        }else if(this.state.isAgree)
        {
            this.registerRequest();
        }else{
            toast.error("Please Accept Terms & Conditions")
        }
       
    }
    handleChange=(e)=>
    {
        // console.log(e.target.name);
        let value=e.target.type==='checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]:value});
    }

    render() {
        // console.log(this.state);
        return (
            <div className="main">
            <ToastContainer autoClose={2000} position="top-center"/>

            <div className="page">
                <div className="header">
                    <h1 className="logo">SIGN UP</h1>
                    <h2 className="">Create your account</h2>
                    <IconContext.Provider value={{ color: "blue",size: "1.4em" }}>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="google-button">
                    <span className="google-button__text"> <FcGoogle/>Sign in with Google</span>
                    </button>
                    <button type="button" className="google-button">
                    <span className="google-button__text"> <AiFillFacebook/>Sign in with Facebook</span>
                    </button>
                    </IconContext.Provider>
                    <div>
                    <hr/>
                    <h6 className="or">OR</h6>
                    <hr/>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={this.handleRegister}>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange}/>
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange}/>
                    <input type="email" placeholder="Email Address" name="email" onChange={this.handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    <input type="checkbox" name="isAgree" value={this.state.isAgree} onChange={this.handleChange} ></input>
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
