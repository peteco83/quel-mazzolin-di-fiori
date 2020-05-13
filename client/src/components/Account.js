import React, { useContext } from 'react'
import { ContextTotal } from "./Context"
import { Redirect } from "react-router-dom"
import '../styles/account.css'

export default function Account() {

    const { setCookies, cookies, client } = useContext(ContextTotal)
    console.log(client);

    const logout = () => {
        // const response = await fetch("clients/logout");
        // const logout = await response.json()
        // console.log(logout)

        // localStorage.clear("login")
        // setCookies(false)
        // fetch("/clients/logout")
        fetch("/clients/logout")
        localStorage.clear("login")
        setCookies(false)
        // .then(res => res.json())
        // .then(logout => {
        //     if (logout.success) {
        //         localStorage.clear("login")
        //         setCookies(false)
        //     }
        // })

    }

    return (
        <div>

            {cookies ?

                <div className="account">
                    <h1>Hi {client.firstName}</h1>
                    <button onClick={logout}>logout</button>
                </div>

                : <Redirect to="/" />}
            {/* <button onClick={logout}>logout</button> */}
        </div>
    )
}
