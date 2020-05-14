import React, { useState, useEffect } from 'react';
import '../styles/app.css'
import Products from './Products';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from './Home';
import { ContextTotal } from "./Context"
import Cart from './Cart'
import Account from './Account'
import EachProduct from './EachProduct'
import CheckOut from './CheckOut'
import Admin from './Admin'


function App() {


  const [token, setToken] = useState(null)
  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [cart, setCart] = useState([])
  const [isLogged, setIsLogged] = useState(false)
  const [total, setTotal] = useState(0)
  const [client, setClient] = useState(null)
  const [cookies, setCookies] = useState(false)
  const [status, setStatus] = useState(false)
  const [order, setOrder] = useState([])



  useEffect(() => {
    let data = localStorage.getItem("login")

    if (data) {
      setCookies(true)
    }

  }, [])

  const logout = () => {
    fetch("/clients/logout")
    localStorage.clear()
    setCookies(false)

  }

  return (


    <ContextTotal.Provider value={{ logout, order, setOrder, status, setStatus, setCookies, cookies, isLogged, setIsLogged, client, setClient, token, setToken, products, setProducts, cart, setCart, filteredProduct, setFilteredProduct, total, setTotal }}>
      <BrowserRouter>
        <div className="App">
          <header>
            <h1><span className="green">Quel</span> <span className="white">Mazzolin di</span> <span className="red">Fiori</span></h1>
            <nav>
              <ul>
                <li>
                  <NavLink activeStyle={{ color: "white" }} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ color: "white" }} to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ color: "white" }} to="/cart">Your Cart</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ color: "white" }} to="/account">Your Account</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />


            <Route exact path="/products" component={Products} />

            <Route exact path="/products/:name" component={EachProduct} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/account" component={Account} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/admin" component={Admin} />

          </Switch>

        </div>
      </BrowserRouter>
    </ContextTotal.Provider>
  );
}


export default App;