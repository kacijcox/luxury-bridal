import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgegjpnw");

  if (state.succeeded) {
    return (
      <p className="return-message">Thanks! We will contact you back soon!</p>
    );
  }

  return (
    <div className="form-container">
      <div className="question">
        Have a question? Send us a message at{" "}
        <a href="mailto:contact@theluxurybridal.com" className="email-link">
          <b>
            <i>contact@theluxurybridal.com</i>
          </b>
        </a>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="weddingDate">Wedding Date</label>
          <input id="weddingDate" type="date" name="weddingDate" />

          <label htmlFor="services">Services</label>
          <textarea id="services" name="services"></textarea>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
