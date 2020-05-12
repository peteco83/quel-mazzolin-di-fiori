import React, { useContext, useEffect } from 'react'
import { ContextTotal } from './Context'
import "../styles/products.css"


export default function Pasta() {

    const { products, pasta, setPasta, cart, setCart } = useContext(ContextTotal)


    const pastafilter = () => {
        let pastafilter = products && products.filter((prod) => prod.type === "Pasta")
        setPasta(pastafilter)
        console.log(pastafilter);
    }

    useEffect(() => {
        pastafilter()
    }, [])


    return (
        <div>
            {/* {pasta && pasta.length > 0 && pasta.map(pasta => {
                return (
                    <div>
                        {pasta.name}
                        {pasta.img}
                    </div>
                )
            })} */}
            <ul className="container-products">
                {pasta && pasta.length > 0 ? pasta.map((product, i) => (
                    <div key={i}>
                        <img src={product.img} alt={product.name} width="200" height="100" />
                        <li>{product.type}</li>
                        <li>{product.name}</li>
                        <li>{product.price}€</li>
                        <button onClick={() => {
                            setCart([...cart, product]);
                            console.log(product)
                        }
                        }>Add to Cart</button>



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


