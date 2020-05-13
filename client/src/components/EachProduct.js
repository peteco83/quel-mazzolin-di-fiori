import React, { useEffect, useContext, useState } from 'react'
import { ContextTotal } from './Context'


export default function EachProduct(props) {
    const { products, filteredProduct, setFilteredProduct, cart, setCart, client } = useContext(ContextTotal)
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


    const addToCart = (product) => {
        const orderData = {
            // quantity: quantity,
            id: product._id,
            product: product

        }
        setCart([...cart, orderData]);
        alert("Added")
    }

    return (
        <div>
            <ul className="container-products">
                {filteredProduct && filteredProduct.length > 0 ? filteredProduct.map((product, i) => (
                    <div key={i}>
                        <img src={product.img} alt={product.name} width="200" height="100" />
                        <li>{product.type}</li>
                        <li>{product.name}</li>
                        <li>{product.price}€</li>
                        {/* <li>Quantity: <input type="number" id="quantity" name="quantity" onChange={(e) => setQuantity(e.target.value)} required></input></li> */}
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
