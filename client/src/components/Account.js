import React, { useContext, useEffect, useState } from "react";
import { ContextTotal } from "./Context";
import { Redirect } from "react-router-dom";
import "../styles/account.css";
import Fade from "react-reveal/Fade";
import ParticlesBg from "particles-bg";

export default function Account() {
  const { setCookies, cookies, client, order, setClient, logout } = useContext(
    ContextTotal
  );
  const [ownOrder, setOwnOrder] = useState([]);
  console.log(client, "from account");
  console.log(order);

  return (
    <div className="account-container">
      <ParticlesBg type="tadpole" bg={true} />

      {/* {cookies && client && client.role === "Admin" ? <Redirect to="/admin" /> : null} */}
      {cookies ? (
        <Fade top>
          <div className="account">
            <h1>Hi {client.firstName}</h1>
            <h2>Your details</h2>
            <div className="account-info">
              <h3>Firstname: {client.firstName}</h3>
              <h3>Lastname: {client.lastName}</h3>
            </div>
            <div className="account-info">
              <h3>Email:</h3>
              <h3>{client.email}</h3>
            </div>
            <div className="account-info">
              <h3>Address: {client.street}</h3>
              <h3>Zipcode: {client.zipCode}</h3>
            </div>
            {/* <h3 className="orders">Your Orders:</h3> */}
            {/* {client.role === "Admin" ? <button onClick={() => props.history.push("Admin")}>Admin</button> : null} */}
            {/* para usar redirect en una funcion hay q usar props.history.push("el route donde queremos mandarlo ")  */}
          </div>
        </Fade>
      ) : null}
    </div>
  );
}
