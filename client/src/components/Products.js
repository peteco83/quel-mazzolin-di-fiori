import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import '../styles/products.css'
import pizza from '../images/pizza.jpg'
import pasta from '../images/pasta.jpg'
import focaccia from '../images/focaccia.jpg'
import antipasti from '../images/antipasti.jpg'
import dessert from '../images/tiramisu.jpg'

import { ContextTotal } from './Context'

const Products = () => {
    const { token, setProducts } = useContext(ContextTotal)

    const getData = () => {
        console.log(token)
        fetch("http://localhost:4000/products", {
            headers: {
                "content-type": "application/json",
                "x-auth": token
            }
        }

        )
            .then(res => res.json())
            .then(product => {

                setProducts(product.products)
                console.log(product.products)

            })
    }

    useEffect(() => {
        getData()
    }, [token])




    return (

        //me mostraba todos los links dentro de aca porque tenia puesta el browserrouter
        <div className="products">
            <Link to="/products/Pizza">
                <div className="card">
                    <div className="imgCard">
                        <img src={pizza} alt="pizza" width="300" height="200"></img>
                    </div>
                    <div className="content">
                        <h1>Pizza</h1>
                    </div>
                </div>
            </Link>
            <Link to="/products/Pasta">
                <div className="card">
                    <div className="imgCard">
                        <img src={pasta} alt="pasta" width="300" height="200"></img>
                    </div>
                    <div className="content">
                        <h1>Pasta</h1>
                    </div>
                </div>
            </Link>
            <Link to="/products/Focacce">
                <div className="card">
                    <div className="imgCard">
                        <img src={focaccia} alt="focaccia" width="300" height="200"></img>
                    </div>
                    <div className="content">
                        <h1>Focaccia</h1>
                    </div>
                </div>
            </Link>
            <Link to="/products/Antipasti">
                <div className="card">
                    <div className="imgCard">
                        <img src={antipasti} alt="antipasti" width="300" height="200"></img>
                    </div>
                    <div className="content">
                        <h1>Antipasti</h1>
                    </div>
                </div>
            </Link>
            <Link to="/products/Desserts">
                <div className="card">
                    <div className="imgCard">
                        <img src={dessert} alt="tiramisu" width="300" height="200"></img>
                    </div>
                    <div className="content">
                        <h1>Desserts</h1>
                    </div>
                </div>
            </Link>


        </div>
    )
}

export default Products