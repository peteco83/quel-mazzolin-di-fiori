import React, { useContext, useEffect, useState } from 'react'
import { ContextTotal } from "./Context"
import { Redirect } from "react-router-dom"
import '../styles/account.css'

export default function Account() {

    const { setCookies, cookies, client, order, setClient, logout } = useContext(ContextTotal)
    const [ownOrder, setOwnOrder] = useState([])
    console.log(client, "from account");
    console.log(order)

    return (
        <div>
            {/* {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null} */}
            {cookies ?

                <div className="account">
                    <h1>Hi {client.firstName}</h1>
                    <h2>Your details</h2>
                    <h3>Firstname: {client.firstName}</h3>
                    <h3>Lastname: {client.lastName}</h3>
                    <h3>Email: {client.email}</h3>
                    <h3>Address: {client.street}</h3>
                    <h3>Zipcode: {client.zipCode}</h3>
                    <h3>Your Orders:</h3>
                    {/* {client.role === "Admin" ? <button onClick={() => props.history.push("Admin")}>Admin</button> : null} */}
                    {/* para usar redirect en una funcion hay q usar props.history.push("el route donde queremos mandarlo ")  */}

                </div>

                : null}
        </div>
    )
}
