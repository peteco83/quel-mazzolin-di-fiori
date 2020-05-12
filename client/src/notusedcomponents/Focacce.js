import React, { useContext, useEffect } from 'react'
import { ContextTotal } from './Context'
import "../styles/products.css"

export default function Focacce() {
    const { products, focacce, setFocacce } = useContext(ContextTotal)

    const focacceFilter = () => {
        let focacceFilter = products && products.filter((prod) => prod.type === "Focaccia")
        setFocacce(focacceFilter)
        console.log(focacceFilter);
    }

    useEffect(() => {
        focacceFilter()
    }, [])



    return (
        <div>
            <ul className="container-products">
                {focacce && focacce.length > 0 ? focacce.map((product, i) => (
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
