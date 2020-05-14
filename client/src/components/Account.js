import React, { useContext } from 'react'
import { ContextTotal } from "./Context"
import { Redirect } from "react-router-dom"
import '../styles/account.css'

export default function Account() {

    const { setCookies, cookies, client, order } = useContext(ContextTotal)
    console.log(client);
    console.log(order)

    // const getOrders = () => {
    //     console.
    // }

    const logout = () => {
        fetch("/clients/logout")
        localStorage.clear("login")
        setCookies(false)


    }

    return (
        <div>

            {cookies ?

                <div className="account">
                    <h1>Hi {client.firstName}</h1>
                    <h2>Your details</h2>
                    <h3>Firstname: {client.firstName}</h3>
                    <h3>Lastname: {client.lastName}</h3>
                    <h3>Email: {client.email}</h3>
                    <h3>Address: {client.street}</h3>
                    <h3>Zipcode: {client.zipCode}</h3>
                    <h3>Your Orders: </h3>

                    <button onClick={logout}>logout</button>
                </div>

                : <Redirect to="/" />}

            {/* <button onClick={logout}>logout</button> */}
        </div>
    )
}
