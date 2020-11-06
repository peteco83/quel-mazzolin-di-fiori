import React, { useState, useEffect, useContext } from "react";
import { ContextTotal } from "./Context";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOn, setMenuOn] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const { setCookies, cookies, client, order, setClient, logout } = useContext(
    ContextTotal
  );

  useEffect(() => {
    let data = localStorage.getItem("login");

    if (data) {
      setCookies(true);
    }

    showHamburgerMenu();
  }, []);

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
    <nav>
      <div className="main-logo">
        <Link className="logo-link" to="/">
          <h1 className="logo">Quel Mazzolin di Fiori</h1>
        </Link>
        {menuMobile ? (
          <Link className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              className={menuOn ? "icon-rotate" : "icon"}
              icon={faBars}
            />
          </Link>
        ) : null}
      </div>

      <div className={menuOn ? "nav-menu active" : "nav-menu"}>
        <ul className="nav__list">
          {cookies ? (
            <li>
              <Link className="link" to="/products" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
          ) : null}

          {cookies && client && client.role === "User" ? (
            <li>
              <Link className="link" to="/account" onClick={closeMobileMenu}>
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
              <Link className="link" to="/admin" onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>
          ) : null}

          {!cookies ? (
            <li>
              <Link className="link" to="/login" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          ) : null}

          {!cookies ? (
            <li>
              <Link className="link" to="/register" onClick={closeMobileMenu}>
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
      </div>
    </nav>
  );
}
