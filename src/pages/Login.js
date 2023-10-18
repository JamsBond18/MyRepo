import React from "react";
import login from './Login.css'
import pngegg from '../../src/images/pngegg.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = () => {

    const nextPath = () => {
        this.Route.path('/Home')
    }

    return (
        <>
            <form >
                <div class="imgcontainer">
                    <img src={pngegg} alt="Avatar" class="avatar" />
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button  onClick={() => nextPath()}>Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div class="container" style={{ 'background-color': '#f1f1f1' }}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>

        </>

    )

}
export default Login;