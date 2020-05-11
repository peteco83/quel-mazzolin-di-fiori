import React, { useState } from 'react';
import '../styles/app.css'
import Products from './Products';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from './Home';
import { ContextTotal } from "./Context"
// import Pizza from './Pizza'
// import Pasta from './Pasta'
// import Focacce from './Focacce'
// import Antipasti from './Antipasti'
// import Desserts from './Dessert'
import Cart from './Cart'
import Account from './Account'
import EachProduct from './EachProduct'


function App() {


  const [token, setToken] = useState(null)
  const [products, setProducts] = useState([])
  // const [pizza, setPizza] = useState([])
  // const [antipasti, setAntipasti] = useState([])
  // const [focacce, setFocacce] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  // const [desserts, setDesserts] = useState([])
  const [cart, setCart] = useState([])
  const [isLogged, setIsLogged] = useState(false)
  const [total, setTotal] = useState(0)
  const [client, setClient] = useState(null)




  return (

    <ContextTotal.Provider value={{ isLogged, setIsLogged, client, setClient, token, setToken, products, setProducts, cart, setCart, filteredProduct, setFilteredProduct, total, setTotal }}>
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
                  <NavLink activeStyle={{ color: "white" }} to="/cart">Your Account</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />


            <Route exact path="/products" component={Products} />

            {/* <Route path="/products/pizza" component={Pizza} />
            <Route path="/products/pasta" component={Pasta} />
            <Route path="/products/focacce" component={Focacce} />
            <Route path="/products/antipasti" component={Antipasti} />
            <Route path="/products/desserts" component={Desserts} /> */}

            <Route exact path="/products/:name" component={EachProduct} />

            <Route exact path="/cart" component={Cart} />
            <Route exact path="/account" component={Account} />


          </Switch>

        </div>
      </BrowserRouter>
    </ContextTotal.Provider>
  );
}


export default App;