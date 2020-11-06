import React, { useState, useContext, useEffect } from "react";
import { ContextTotal } from "./Context";
import "../styles/home.css";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  const { client, setClient, cookies } = useContext(ContextTotal);
  console.log("cookies:" + cookies);

  useEffect(() => {
    let id = localStorage.getItem("id");
    if (id) {
      fetch(`/clients/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setClient(data.client);
        });
    }
  }, []);

  console.log(client, "from Homepage");

  return (
    <>
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
