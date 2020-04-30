import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"


export default function Home() {
    return (
        <div className="main-container">
            <header>
                <h1><span className="green">Quel</span> <span className="white">Mazzolin di</span> <span className="red">Fiori</span></h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeStyle={{ color: "white" }} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color: "white" }} to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color: "white" }} to="/signup">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color: "white" }} to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="form-container">
                <div className="signup-form">
                    <h1>Sign up for your order</h1>
                    <form className="signup">
                        <label>First Name:
                            <input type="text" name="firstname" />
                        </label>


                        <label>Last Name:
                        <input type="text" name="lastname" required /></label>

                        <label>E-Mail:
                            <input type="email" name="email" />
                        </label>


                        <label>Password:<input type="password" name="password" required /></label>
                        <label>Address::
                            <input type="text" name="address" />
                        </label>


                        <label>Zipcode:<input type="text" name="zipcode" required /></label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
                <div className="login-form">
                    <h1>Log in if you have an account</h1>
                    <form className="login">

                        <label>E-Mail:
                            <input type="email" name="email" />
                        </label>


                        <label>Password:<input type="password" name="password" required /></label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
