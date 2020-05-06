import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from './Home'
import './products.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")
    const [pizza, setPizza] = useState([])

    console.log("props.token", props.token);

    const getData = () => {
        console.log(props.token)
        fetch("http://localhost:4000/products", {
            headers: {
                "content-type": "application/json",
                "x-auth": props.token
            }
        }

        )
            .then(res => res.json())
            .then(product => {
                setProducts(product.products)
                console.log(product);
                let pizza = product.products.filter((prod) => prod.type === "pizza")
                setPizza(pizza)
            })
    }

    useEffect(() => {
        getData()
    }, [props.token])

    return (
        <div className="products">
            {/* <Home /> */}
            <div>
                <ul className="container-products">
                    {products && products.length > 0 ? products.map((product, i) => (
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