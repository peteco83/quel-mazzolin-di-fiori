import React, { useContext, useEffect } from 'react'
import { ContextTotal } from './Context'
import "../styles/products.css"

export default function Pizza() {

    const { products, pizza, setPizza } = useContext(ContextTotal)

    const pizzaFilter = () => {
        let pizzaFilter = products && products.filter((prod) => prod.type === "Pizza")
        setPizza(pizzaFilter)
        console.log(pizzaFilter);
    }

    useEffect(() => {
        pizzaFilter()
    }, [])



    return (
        <div>
            <ul className="container-products">
                {pizza && pizza.length > 0 ? pizza.map((product, i) => (
                    <div key={i}>
                        <img src={product.img} alt={product.name} width="300" height="200" />
                        <li>{product.type}</li>
                        <li>{product.name}</li>
                        <li>{product.price}€</li>
                        <button>Add to Cart</button>

                    </div>
                )) : (
                        <div>
                            <h1>
                                PLEASE LOGIN FIRST OR CREATE AN ACCOUNT
                            </h1>
                        </div>
                    )}
            </ul>
        </div>
    )
}
