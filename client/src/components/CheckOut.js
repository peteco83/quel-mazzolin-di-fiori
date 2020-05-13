import React, { useEffect, useContext } from 'react'
import { ContextTotal } from './Context'
import '../styles/products.css'


export default function CheckOut() {

    const { status, setStatus } = useContext(ContextTotal)

    useEffect(() => {
        setStatus(false)
    })

    return (
        <div className="checkout">
            <h1>Thank you for your Purchase</h1>
        </div>
    )
}

