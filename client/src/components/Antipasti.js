import React, { useContext, useEffect } from 'react'
import { ContextTotal } from './Context'
import "../styles/products.css"

export default function Antipasti() {

    const { products, antipasti, setAntipasti } = useContext(ContextTotal)

    const antipastiFilter = () => {
        let antipastiFilter = products && products.filter((prod) => prod.type === "Antipasti")
        setAntipasti(antipastiFilter)
        console.log(antipastiFilter);
    }

    useEffect(() => {
        antipastiFilter()
    }, [])



    return (
        <div>
            <ul className="container-products">
                {antipasti && antipasti.length > 0 ? antipasti.map((product, i) => (
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
