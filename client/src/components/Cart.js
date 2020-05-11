import React, { useContext } from 'react'
import { ContextTotal } from './Context'
import '../styles/products.css'

export default function Cart() {

    const { cart, setCart, user } = useContext(ContextTotal)
    console.log(cart);


    const deleteItem = (id) => {
        // let newCart = cart.filter(item => item.product._id !== id)
        let newCart = [...cart]
        newCart.splice(id, 1)
        setCart(newCart)
    }

    const totalPrice = cart.reduce((acc, item) => {
        let total = acc + (item.product.price * item.quantity)
        return total
    }, 0)

    return (
        <div className="container-products">
            {cart && cart.map((product) => {
                return (

                    <div>
                        <img src={product.product.img} alt={product.product.name} width="200" height="100" />
                        <li>Type: {product.product.type}</li>
                        <li>Name: {product.product.name}</li>
                        <li>Price: {product.product.price}€</li>
                        <li>Quantity: {product.quantity}</li>
                        <button onClick={deleteItem}>Remove</button>
                    </div>

                )
            })}

            {cart && cart.length > 0 ?
                (<h1>Total: {totalPrice}</h1>) :

                (<div>
                    <h1>
                        PLEASE ADD THE DESIRED PRODUCTS TO THE CART
                            </h1>
                </div>)

            }






        </div>
    )
}
