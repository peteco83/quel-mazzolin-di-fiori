import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ContextTotal } from "./Context";
import Zoom from "react-reveal/Zoom";
import "../styles/login.css";

export default function SignUp() {
  const { setToken, client, setClient, cookies, setCookies } = useContext(
    ContextTotal
  );
  console.log("cookies:" + cookies);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [street, setStreet] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [phone, setPhone] = useState(null);
  const [statusSignup, setStatusSignup] = useState(true);
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageAlreadyEmail, setMessageAlreadyEmail] = useState("");

  const [input, setInput] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const clientData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phone,
      street: street,
      zipCode: zipCode,
    };
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clientData),
    };
    const response = await fetch("/clients", options);
    const data = await response.json();
    console.log(data, "This is data signup");
    if (data.success) {
      // setStatus(true)
      setToken(data.token);
      setClient(data.client);
      // setIsLogged(true)
      localStorage.setItem("login", true);
      localStorage.setItem("id", data.client._id);
      setCookies(true);
      setStatusSignup(true);
    }
    if (data.message) {
      setStatusSignup(false);
      setMessagePassword(null);
      setMessageAlreadyEmail(null);

      data.message.map((msg) => {
        if (msg.email) {
          setMessageEmail(msg.email);
        }
        if (msg.password) {
          setMessagePassword(msg.password);
        }
      });
    }
    if (data.err) {
      setStatusSignup(false);
      setMessagePassword(null);
      setMessageEmail(null);
      setMessageAlreadyEmail(data.err);
    }
  };

  return (
    <div className="form-container">
      {cookies && client && client.role === "Admin" ? (
        <Redirect to="/admin" />
      ) : null}
      {cookies && client && client.role === "User" ? (
        <Redirect to="/account" />
      ) : null}
      <Zoom>
        <div className="signup-form">
          <h1>Sign up</h1>
          <h4>
            Create an account to make <br />
            your order
          </h4>
          <form onSubmit={handleSignUp} className="login">
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {!statusSignup && messageEmail ? <p>{messageEmail}</p> : null}
            {!statusSignup && messageAlreadyEmail ? (
              <p>E-mail already exists</p>
            ) : null}

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!statusSignup && messagePassword ? <p>{messagePassword}</p> : null}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telephone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Your Adress"
              onChange={(e) => setStreet(e.target.value)}
              required
            />

            <input
              type="text"
              id="zipcode"
              name="zipCode"
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Zoom>
    </div>
  );
}
