import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { ContextTotal } from './Context'
import '../styles/login.css'

const Login = () => {

    const { setToken, client, setClient, cookies, setCookies } = useContext(ContextTotal)
    console.log("cookies:" + cookies)

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [statusLogin, setStatusLogin] = useState(true)


    const handleLogin = async (e) => {
        e.preventDefault()
        const loginData = {
            email: email,
            password: password,
        }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        };
        const response = await fetch("/clients/login", options);
        const data = await response.json()
        console.log(data, "This is data login")
        if (data.success) {
            setToken(data.token)
            setClient(data.client)
            localStorage.setItem("login", true)
            localStorage.setItem("id", data.client._id)
            setCookies(true)
            setStatusLogin(true)

        } else {
            setStatusLogin(false)
        }


    }

    return (
        <div className="form-container">

            {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null}
            {cookies && client && client.role === "User" ? <Redirect to="/account" /> : null}
            <div className="loginoflogin">
                <div className="login-form">
                    <h1>Log in</h1>
                    <form onSubmit={handleLogin} className="login">

                        <label>E-Mail:
                            <input type="email" id="email-login" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>


                        <label>Password:<input type="password" id="password-login" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                        <button type="submit">Log In</button>
                        {!statusLogin ? <p>Wrong email or wrong password</p> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login