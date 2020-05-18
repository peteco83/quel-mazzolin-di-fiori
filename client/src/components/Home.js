import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { ContextTotal } from './Context'
import '../styles/home.css'


export default function Home() {

    const { client, setClient, cookies } = useContext(ContextTotal)
    console.log("cookies:" + cookies)

    useEffect(() => {
        let id = localStorage.getItem("id")
        if (id) {
            fetch(`/clients/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setClient(data.client)
                }
                )
        }
    }, [])

    console.log(client, "from Homepage")

    return (



        <div className="main-container">
            {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null}
            {cookies && client && client.role === "User" ? <Redirect to="/account" /> : null}
            <div className="home-main">

                <div className="home-container">
                    <h1>Benvenuti in Italia</h1>
                    <h1>Benvenuti al Ristorante "Quel Mazzolin di Fiori"</h1>
                    <h2>Please register or login to make your order</h2>
                </div>
            </div>

        </div>
    )
}