import React, { useState } from "react";
import { useForm } from "react-hook-form";
import google from './Icons/google.png';
import facebook from './Icons/facebook.png';
import signIn from './Icons/sign-in.png';
import signup from './Icons/add-user.png'
import './style.css';

export default function Overlay() {
    const [loginState, setLoginState] = useState(true); 

    return (
        <div className="overlaybackground">
            <div className="toggle-container">
                <button 
                    className="toggle-button" 
                    onClick={() => setLoginState((prevState) => !prevState)}
                >
                    {loginState ? <img className="loginPics" src={signIn}/> : <img className="loginPics" src={signup}/>}
                </button>
            </div>
            {loginState ? <SignUp /> : <SignIn />}
        </div>
    );
}

function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="Signin-box">
            <h2 className="headingText">Sign in to Miro</h2>
            <button className="signin-button"><img src={google} className="socialimg" alt="Google" /></button>
            <div className="login-border"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="emailheading">Email</h3>
                <input
                    type="text"
                    className="login-feild"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <h3 className="emailheading">Password</h3>
                <input
                    type="password"
                    className="login-feild"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                        },
                    })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                <p className="forgotpassword">Forgot Password</p>
                <div className="checkbox">
                    <input type="checkbox" {...register('rememberMe')} /> Remember me
                </div>
                <button type="submit" className="continue-email">Continue with email</button>
            </form>
        </div>
    );
}

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <div className="Signup-box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="headingText">Sign up for free</h2>
                <h4 className="emailtext">
                    We recommend using your <span className="spantext">work email</span> — it keeps work and life separate.
                </h4>
                <h3 className="emailheading">Email</h3>
                <input
                    type="text"
                    className="login-feild"
                    {...register("email", {
                        required: "Email field is empty. Enter your Email.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address.",
                        },
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <button type="submit" className="continue-email">Continue with email</button>
                <div className="login-border"></div>
                <button type="button" className="with-social">
                    <img src={google} className="socialimg" alt="Google" /> Sign up with Google
                </button>
                <button type="button" className="with-social">
                    <img src={facebook} className="socialimg" alt="Facebook" /> Sign up with Facebook
                </button>
            </form>
        </div>
    );
}
