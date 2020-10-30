import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Products from "./Products";
import {
  HashRouter,
  NavLink,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import { ContextTotal } from "./Context";
import Cart from "./Cart";
import Account from "./Account";
import EachProduct from "./EachProduct";
import CheckOut from "./CheckOut";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
// import Footer from './Footer'
import Contact from "./Contact";
import "../styles/footer.css";
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
  const [menuOn, setMenuOn] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("login");

    if (data) {
      setCookies(true);
    }

    showHamburgerMenu();
  }, []);

  const logout = () => {
    fetch("/clients/logout");
    localStorage.clear();
    setCookies(false);
  };

  const handleClick = () => {
    setMenuOn(!menuOn);
  };
  const closeMobileMenu = () => setMenuOn(false);

  const showHamburgerMenu = () => {
    if (window.innerWidth <= 960) {
      setMenuMobile(true);
    } else {
      setMenuMobile(false);
    }
  };

  window.addEventListener("resize", showHamburgerMenu);

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
      <HashRouter>
        <div className="App">
          <header>
            <div className="main-logo">
              <Link className="logo-link" to="/" onClick={handleClick}>
                <h1 className="logo">Quel Mazzolin di Fiori</h1>
              </Link>
              {menuMobile ? (
                <Link className="menu-icon" onClick={handleClick}>
                  <FontAwesomeIcon
                    className={!menuOn ? "icon" : "icon-rotate"}
                    icon={faBars}
                  />
                </Link>
              ) : null}
            </div>
            <nav className="nav-options">
              <ul className={menuOn ? "nav-menu active" : "nav-menu"}>
                {cookies ? (
                  <li>
                    <Link
                      className="link"
                      to="/products"
                      onClick={closeMobileMenu}
                    >
                      Products
                    </Link>
                  </li>
                ) : null}

                {cookies && client && client.role === "User" ? (
                  <li>
                    <Link
                      className="link"
                      to="/account"
                      onClick={closeMobileMenu}
                    >
                      Your Account
                    </Link>
                  </li>
                ) : null}

                {cookies ? (
                  <li>
                    <Link className="link" to="/cart" onClick={closeMobileMenu}>
                      Your Cart
                    </Link>
                  </li>
                ) : null}

                {cookies && client && client.role === "Admin" ? (
                  <li>
                    <Link
                      className="link"
                      to="/admin"
                      onClick={closeMobileMenu}
                    >
                      Admin
                    </Link>
                  </li>
                ) : null}

                {!cookies ? (
                  <li>
                    <Link
                      className="link"
                      to="/login"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>
                  </li>
                ) : null}

                {!cookies ? (
                  <li>
                    <Link
                      className="link"
                      to="/register"
                      onClick={closeMobileMenu}
                    >
                      Register
                    </Link>
                  </li>
                ) : null}

                {cookies ? (
                  <li>
                    <Link className="link" onClick={logout} to="/">
                      Logout
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          </header>
          <footer className="footer">
            <div className="footer-content">
              <h2 className="logo">Quel Mazzolin di fiori</h2>
              <h2 className="year">2020</h2>

              <div className="contact-and-icon">
                <FontAwesomeIcon className="comment" icon={faCommentAlt} />

                <h2>
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </h2>
              </div>
            </div>
          </footer>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/products" component={Products} />

            <Route exact path="/products/:name" component={EachProduct} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/account" component={Account} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    </ContextTotal.Provider>
  );
}

export default App;
