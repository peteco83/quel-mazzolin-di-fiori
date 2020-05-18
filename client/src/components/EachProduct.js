import React, { useEffect, useContext, useState } from 'react'
import { ContextTotal } from './Context'
import "../styles/eachproduct.css"


export default function EachProduct(props) {
    const { products, filteredProduct, setFilteredProduct, cart, setCart, client, cookies } = useContext(ContextTotal)
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
        <div className="eachproduct">
            {cookies ?
                <ul className="container-products">
                    {filteredProduct && filteredProduct.length > 0 ? filteredProduct.map((product, i) => (
                        <div key={i} className="product-card">
                            <img src={product.img} alt={product.name} width="200" height="100" />

                            <li>Type: {product.type}</li>
                            <li>Name: {product.name}</li>
                            <li>Price: {product.price} €</li>

                            <button onClick={() => { addToCart(product) }}>Add to Cart</button>

                        </div>
                    )) : null}
                </ul>
                :

                <h1>Please Login or Register to make your order</h1>}

        </div>
    )
}
