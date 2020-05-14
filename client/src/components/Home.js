import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { ContextTotal } from './Context'


export default function Home(props) {

    const { setToken, client, setClient, isLogged, setIsLogged, token, cookies, setCookies } = useContext(ContextTotal)
    console.log("cookies:" + cookies)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [street, setStreet] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [phone, setPhone] = useState(null)
    const [status, setStatus] = useState(false)

    // useEffect(() => {
    //     let id = localStorage.getItem("id")
    //     if (id) {
    //         fetch(`/clients/${id}`)
    //             .then(res => res.json())
    //             .then(client =>
    //                 setClient(client))
    //     }
    // }, [])


    const handleSignUp = async (e) => {
        e.preventDefault()
        const clientData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phone,
            street: street,
            zipCode: zipCode
        };
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(clientData)
        };
        const response = await fetch("/clients", options);
        const data = await response.json()
        console.log(data)
        if (data.success) {
            // setStatus(true)
            setToken(data.token)
            setClient(data.client)
            // setIsLogged(true)
            localStorage.setItem("login", true)
            localStorage.setItem("id", data.client._id)
            setCookies(true)
        }
        console.log(client)
    }

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
        console.log(data)
        if (data.success) {
            // setStatus(true)
            setToken(data.token)
            setClient(data.client)
            localStorage.setItem("login", true)
            localStorage.setItem("id", data.client._id)
            setCookies(true)

        } else {
            alert("Your email or password are wrong or doesn't exist in our database")
        }


    }


    return (
        <div className="main-container">
            {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null}
            {cookies && client && client.role === "User" ? <Redirect to="/account" /> : <div className="form-container">
                <div className="signup-form">
                    <h1>Sign up for your order</h1>
                    <form onSubmit={handleSignUp} className="signup">
                        <label>First Name:
                            <input type="text" id="first-name" name="firstName" onChange={(e) => setFirstName(e.target.value)} required />
                        </label>


                        <label>Last Name:
                        <input type="text" id="last-name" name="lastName" onChange={(e) => setLastName(e.target.value)} required /></label>

                        <label>E-Mail:
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>


                        <label>Password:<input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                        <label>Phone:<input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} required /></label>
                        <label>Street and Number:
                            <input type="text" id="street" name="street" onChange={(e) => setStreet(e.target.value)} required />
                        </label>


                        <label>Zipcode:<input type="text" id="zipcode" name="zipCode" onChange={(e) => setZipCode(e.target.value)} required /></label>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="login-form">
                    <h1>Log in if you have an account</h1>
                    <form onSubmit={handleLogin} className="login">

                        <label>E-Mail:
                            <input type="email" id="email-login" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>


                        <label>Password:<input type="password" id="password-login" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
            }

        </div>
    )
}
