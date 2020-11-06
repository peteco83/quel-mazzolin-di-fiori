import React, { useState, useContext, useEffect } from "react";
import { ContextTotal } from "./Context";
import Fade from "react-reveal/Fade";
import "../styles/home.css";
import { Button } from "react-bootstrap";

export default function HeroSection() {
  const { client, setClient, cookies } = useContext(ContextTotal);
  return (
    <div className="main-container">
      {cookies ? (
        <div className="home-main">
          <Fade top>
            <div className="home-container">
              <h1>Benvenuti in Italia</h1>
              <h1>Benvenuti al Ristorante "Quel Mazzolin di Fiori"</h1>
            </div>
          </Fade>
        </div>
      ) : (
        <div className="home-main">
          <Fade top>
            <div className="home-container">
              <h1>Benvenuti in Italia</h1>
              <h1>Benvenuti al Ristorante "Quel Mazzolin di Fiori"</h1>
              <h2>Please register or login to make your order</h2>
            </div>
            <div className="btn-log-reg">
              <Button className="buttons">Sign Up</Button>
              <Button className="buttons">Login</Button>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
}
