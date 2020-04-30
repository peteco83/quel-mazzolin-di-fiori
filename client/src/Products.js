import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from './Home'
import './products.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")
    console.log(props);

    const getData = () => {
        fetch("http://localhost:4000/products", {
            headers: {
                "content-type": "application/json",
                "test": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhYzAxOWU1ZGJlOTczNzUzNzM1ZWQiLCJpYXQiOjE1ODgyNTA3ODd9.SwzeBq3qbVT1ObV6-Ga-kFbYkajqE4cKdBa_I5lXDHs"
            }
        }

        )
            .then(res => res.json())
            .then(product => {
                setProducts(product.products)
                console.log(product);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="products">
            <Home />
            <div>
                <ul className="container-products">
                    {products.length > 0 ? products.map((product, i) => (
                        <div key={i}>
                            <img src={product.img} alt={product.name} width="300" height="200" />
                            <li>{product.type}</li>
                            <li>{product.name}</li>
                            <li>{product.price}€</li>
                            <button>Add to Cart</button>

                        </div>
                    )) : null}
                </ul>
            </div>
        </div>
    )
}

export default Products