import React, { useEffect, useContext } from "react";
import { ContextTotal } from "./Context";
import "../styles/checkout.css";
import ParticlesBg from "particles-bg";

export default function CheckOut() {
  const { status, setStatus } = useContext(ContextTotal);

  useEffect(() => {
    setStatus(false);
  });

  return (
    <div className="checkout">
      <ParticlesBg type="tadpole" bg={true} />
      <h1>
        Thank you for <br />
        your Purchase
      </h1>
    </div>
  );
}
