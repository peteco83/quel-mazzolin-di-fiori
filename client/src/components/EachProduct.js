import React, { useEffect, useContext, useState } from 'react'
import { ContextTotal } from './Context'


export default function EachProduct(props) {
    const { products, filteredProduct, setFilteredProduct, cart, setCart, token } = useContext(ContextTotal)
    console.log(props)
    const [quantity, setQuantity] = useState(1)




    const productFilter = () => {
        let productFilter = products && products.filter((prod) => prod.type === props.match.params.name)
        setFilteredProduct(productFilter)
        console.log(productFilter);
    }

    useEffect(() => {
        productFilter()
    }, [])

    // const addToCart = async () => {
    //     const orderData = {
    //         quantity: quantity,
    //     }
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "x-auth": token

    //         },
    //         body: JSON.stringify(orderData)
    //     };
    //     const response = await fetch("http://localhost:4000/orders", options);
    //     const data = await response.json()

    //     console.log(data)
    // }

    const addToCart = (product) => {
        const orderData = {
            quantity: quantity,
            id: product._id,
            product: product
        }
        setCart([...cart, orderData]);
        alert("Added")
    }

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
                {filteredProduct && filteredProduct.length > 0 ? filteredProduct.map((product, i) => (
                    <div key={i}>
                        <img src={product.img} alt={product.name} width="200" height="100" />
                        <li>{product.type}</li>
                        <li>{product.name}</li>
                        <li>{product.price}€</li>
                        <li>Quantity: <input type="number" id="quantity" name="quantity" onChange={(e) => setQuantity(e.target.value)} required></input></li>
                        <button onClick={() => {
                            addToCart(product)
                        }

                        }
                        >Add to Cart</button>



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
