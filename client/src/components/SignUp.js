import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { ContextTotal } from './Context'
import '../styles/login.css'

export default function SignUp() {

    const { setToken, client, setClient, cookies, setCookies } = useContext(ContextTotal)
    console.log("cookies:" + cookies)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [street, setStreet] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [phone, setPhone] = useState(null)
    const [statusSignup, setStatusSignup] = useState(true)
    const [messageEmail, setMessageEmail] = useState("")
    const [messagePassword, setMessagePassword] = useState("")
    const [messageAlreadyEmail, setMessageAlreadyEmail] = useState("")

    const [input, setInput] = useState("")

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
        console.log(data, "This is data signup")
        if (data.success) {
            // setStatus(true)
            setToken(data.token)
            setClient(data.client)
            // setIsLogged(true)
            localStorage.setItem("login", true)
            localStorage.setItem("id", data.client._id)
            setCookies(true)
            setStatusSignup(true)

        }
        if (data.message) {
            setStatusSignup(false)
            setMessagePassword(null)
            setMessageAlreadyEmail(null)

            data.message.map(msg => {

                if (msg.email) {
                    setMessageEmail(msg.email)
                }
                if (msg.password) {
                    setMessagePassword(msg.password)
                }
            })
        }
        if (data.err) {
            setStatusSignup(false)
            setMessagePassword(null)
            setMessageEmail(null)
            setMessageAlreadyEmail(data.err)
        }

        // if (data.message && data.err) {
        //     setStatusSignup(false)
        //     setMessageEmail(null)
        //     setMessageAlreadyEmail(data.err)
        // }

    }

    return (
        <div className="form-container">
            {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null}
            {cookies && client && client.role === "User" ? <Redirect to="/account" /> : null}
            <div className="signup-form">
                <h1>Sign up</h1>
                <form onSubmit={handleSignUp} className="login">
                    <label>First Name:
                            <input type="text" id="first-name" name="firstName" onChange={(e) => setFirstName(e.target.value)} required />
                    </label>


                    <label>Last Name:
                        <input type="text" id="last-name" name="lastName" onChange={(e) => setLastName(e.target.value)} required /></label>

                    <label>E-Mail:
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    </label>

                    {!statusSignup && messageEmail ? <p>{messageEmail}</p> : null}
                    {!statusSignup && messageAlreadyEmail ? <p>E-mail already exists</p> : null}


                    <label>Password:<input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                    {!statusSignup && messagePassword ? <p>{messagePassword}</p> : null}
                    <label>Phone:<input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} required /></label>
                    <label>Street and Number:
                            <input type="text" id="street" name="street" onChange={(e) => setStreet(e.target.value)} required />
                    </label>


                    <label>Zipcode:<input type="text" id="zipcode" name="zipCode" onChange={(e) => setZipCode(e.target.value)} required /></label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
