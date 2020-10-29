import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="form-container">
      <div className="login-form">
        <h1>Contact us!!</h1>
        <h4>
          If you have any issue or any <br />
          question please send us an email
        </h4>
        <form className="login">
          <input type="text" placeholder="Your Name" name="name" />
          <input type="mail" placeholder="Your Email" name="email" />
          <textarea
            name="message"
            placeholder="Your Message"
            cols="0"
            rows="10"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
