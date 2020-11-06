import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Account from "./Account";
import EachProduct from "./EachProduct";
import CheckOut from "./CheckOut";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
import Contact from "./Contact";

export default function Routes() {
  return (
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
  );
}
