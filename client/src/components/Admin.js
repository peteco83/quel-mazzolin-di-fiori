import React, { useEffect, useContext } from 'react'
import '../styles/account.css'
import { ContextTotal } from './Context'

export default function Admin() {

    const { token } = useContext(ContextTotal)

    const getClients = () => {
        fetch("/clients", {
            headers: {
                "content-type": "application/json",
                "x-auth": token
            }
        })
            .then(res => res.json())
            .then(client => {
                console.log(client)
            })
    }

    const getOrders = () => {
        fetch("/orders", {
            headers: {
                "content-type": "application/json",
                "x-auth": token
            }
        })
            .then(res => res.json())
            .then(order => {
                console.log(order)
            })
    }

    return (
        <div className="admin">
            <h1>Get all Clients</h1>
            <button onClick={getClients}>Get all clients</button>
            <h1>Get all Orders</h1>
            <button onClick={getOrders}>Get all orders</button>

            <button>Add a Product</button>
        </div>
    )
}
