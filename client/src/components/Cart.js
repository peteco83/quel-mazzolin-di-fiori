import React, { useContext } from 'react'
import { ContextTotal } from './Context'
import '../styles/products.css'
import { Redirect } from 'react-router-dom';

export default function Cart() {

    const { cart, setCart, user, status, setStatus, client } = useContext(ContextTotal)
    console.log(cart);


    const deleteItem = (id) => {
        // let newCart = cart.filter(item => item.product._id !== id)
        let newCart = [...cart]
        newCart.splice(id, 1)
        setCart(newCart)
    }

    const deleteAll = () => {
        let newCart = [...cart]
        newCart.splice(0, -1)
        setCart(newCart)
    }

    const totalPrice = cart.reduce((acc, item) => {
        let total = acc + item.product.price
        return total
    }, 0)

    const checkOut = async (e) => {
        e.preventDefault()
        const checkoutData = cart.map(product => {
            return product.id
        })
        const clientData = {
            order: checkoutData,
            client: client._id
        }
        console.log(checkoutData)

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(clientData)
        }
        const response = await fetch("/orders", options)
        const data = await response.json()
        console.log(data)
        if (data.success) {
            setStatus(true)
            data.splice(0, data.length)
        }
    }

    return (
        <div className="container-products">
            {status ? <Redirect to="/checkout" /> :

                <div className="container-products">
                    {cart && cart.map((product) => {
                        return (

                            <div>
                                <img src={product.product.img} alt={product.product.name} width="200" height="100" />
                                <li>Type: {product.product.type}</li>
                                <li>Name: {product.product.name}</li>
                                <li>Price: {product.product.price}€</li>
                                {/* <li>Quantity: {product.quantity}</li> */}
                                <button onClick={deleteItem}>Remove</button>
                            </div>

                        )
                    })}

                    {cart && cart.length > 0 ?
                        (<div>
                            <h1>Total: {totalPrice}</h1>
                            <button onClick={checkOut}>CheckOut</button>
                        </div>
                        ) :

                        (<div>
                            <h1>
                                PLEASE ADD THE DESIRED PRODUCTS TO THE CART
                            </h1>
                        </div>)

                    }
                </div>

            }







        </div>
    )
}
