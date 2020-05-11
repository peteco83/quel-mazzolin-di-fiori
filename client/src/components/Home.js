import React, { useState, useContext } from 'react'
import { Redirect } from "react-router-dom"
import { ContextTotal } from './Context'


export default function Home(props) {

    const { setToken, client, setClient, } = useContext(ContextTotal)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [street, setStreet] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [phone, setPhone] = useState(null)
    const [status, setStatus] = useState(false)

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
        const response = await fetch("http://localhost:4000/clients", options);
        const data = await response.json()
        console.log(data)
        if (data.success) {
            setStatus(true)
            setToken(data.token)
            setClient(data.client)
        }
        console.log(response.headers.get("x-auth"))
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
        const response = await fetch("http://localhost:4000/clients/login", options);
        const data = await response.json()
        console.log(data)
        if (data.success) {
            setStatus(true)
            setToken(data.token)
        }


    }


    return (
        <div className="main-container">
            {status ? <Redirect to="/products" /> : <div className="form-container">
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
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>


                        <label>Password:<input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
            }

        </div>
    )
}