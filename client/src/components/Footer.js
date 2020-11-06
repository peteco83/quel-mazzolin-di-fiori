import React from "react";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import "../styles/footer.css";
import Contact from "../components/Contact";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="logo">Quel Mazzolin di fiori</h2>
          <h2 className="year">2020</h2>

          {/* <div className="contact-and-icon">
            <FontAwesomeIcon className="comment" icon={faCommentAlt} />

            <h2>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </h2>
          </div>*/}
        </div>
      </footer>
    </div>
  );
}
