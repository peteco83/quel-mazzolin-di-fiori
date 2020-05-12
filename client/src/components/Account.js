import React, { useContext } from 'react'
import { ContextTotal } from "./Context"
import { Redirect } from "react-router-dom"

export default function Account() {

    const { setCookies, cookies } = useContext(ContextTotal)

    const logout = () => {
        localStorage.clear("login")
        setCookies(false)
        fetch("/clients/logout")
    }

    return (
        <div>{cookies ? <button onClick={logout}>logout</button> : <Redirect to="/" />}

        </div>
    )
}
