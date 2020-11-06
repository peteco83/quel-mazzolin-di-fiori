import React, { useContext } from "react";
import { ContextTotal } from "./Context";
import "../styles/eachproduct.css";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Cart() {
  const {
    cart,
    setCart,
    user,
    status,
    setStatus,
    client,
    order,
    setOrder,
  } = useContext(ContextTotal);
  console.log(cart);

  const deleteItem = (id) => {
    // let newCart = cart.filter(item => item.product._id !== id)
    let newCart = [...cart];
    newCart.splice(id, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => {
    let total = acc + item.product.price;
    return total;
  }, 0);

  const checkOut = async (e) => {
    e.preventDefault();
    const checkoutData = cart.map((product) => {
      return product.id;
    });
    const clientData = {
      order: checkoutData,
      client: client._id,
    };
    console.log(checkoutData);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clientData),
    };
    const response = await fetch("/orders", options);
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setStatus(true);
      setOrder(data);
      setCart([]);
    }
  };

  return (
    <div className="cart">
      {status ? (
        <Redirect to="/checkout" />
      ) : (
        <ul className="container-products">
          {cart ? (
            cart.map((product) => {
              return (
                <div className="product-card">
                  <img
                    src={product.product.img}
                    alt={product.product.name}
                    width="200"
                    height="100"
                  />
                  <li>Type: {product.product.type}</li>
                  <li>Name: {product.product.name}</li>
                  <li>Price: {product.product.price}€</li>
                  <button onClick={deleteItem}>Remove</button>
                </div>
              );
            })
          ) : (
            <h1>Add your desired product first</h1>
          )}
        </ul>
      )}

      {cart && cart.length > 0 ? (
        <div className="total">
          <h1>Total: {totalPrice} €</h1>
          <Button onClick={checkOut}>CheckOut</Button>
        </div>
      ) : null}
    </div>
  );
}
