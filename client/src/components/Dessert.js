import React, { useContext, useEffect } from 'react'
import { ContextTotal } from './Context'
import "../styles/products.css"

export default function Dessert() {
    const { products, desserts, setDesserts } = useContext(ContextTotal)

    const dessertsFilter = () => {
        let dessertsFilter = products && products.filter((prod) => prod.type === "Desserts")
        setDesserts(dessertsFilter)
        console.log(dessertsFilter);
    }

    useEffect(() => {
        dessertsFilter()
    }, [])



    return (
        <div>
            <ul className="container-products">
                {desserts && desserts.length > 0 ? desserts.map((product, i) => (
                    <div key={i}>
                        <img src={product.img} alt={product.name} width="200" height="100" />
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
