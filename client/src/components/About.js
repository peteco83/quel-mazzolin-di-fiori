import React from "react";
import Carousel from "../components/Carousel";
import "../styles/about.css";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div>
      <Fade top>
        <div className="about">
          <h1>About us</h1>
          <h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quam
            recusandae praesentium quasi natus sequi voluptates beatae
            voluptatibus nisi officia autem laudantium cumque laborum magnam
            adipisci, nihil fugiat? Deleniti, libero?
          </h5>

          <h2>These are some of our best dishes</h2>
        </div>
      </Fade>
      <Carousel />
    </div>
  );
}
