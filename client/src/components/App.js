import React, { useState, useEffect } from "react";
import { ContextTotal } from "./Context";
import "../styles/app.css";

import {
  HashRouter,
  NavLink,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import Routes from "../components/Routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState(null);
  const [cookies, setCookies] = useState(false);
  const [status, setStatus] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("login");

    if (data) {
      setCookies(true);
    }
  }, []);

  const logout = () => {
    fetch("/clients/logout");
    localStorage.clear();
    setCookies(false);
  };

  return (
    <ContextTotal.Provider
      value={{
        logout,
        order,
        setOrder,
        status,
        setStatus,
        setCookies,
        cookies,
        isLogged,
        setIsLogged,
        client,
        setClient,
        token,
        setToken,
        products,
        setProducts,
        cart,
        setCart,
        filteredProduct,
        setFilteredProduct,
        total,
        setTotal,
      }}
    >
      <div className="App">
        <HashRouter>
          <Header />
          <Routes />
        </HashRouter>
      </div>
    </ContextTotal.Provider>
  );
}

export default App;
