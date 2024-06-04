import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactDateOfWedding: '',
    contactServices: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to Formspree
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Your message has been sent!');
        } else {
          alert('There was an error sending your message.');
        }
      })
      .catch((error) => {
        alert('There was an error sending your message.');
      });
  };

  return (
    <div className="contact-container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="contactFirstName">First Name</label>
          <input
            type="text"
            className="contact-form-control"
            id="contactFirstName"
            name="contactFirstName"
            value={formData.contactFirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="contactLastName">Last Name</label>
          <input
            type="text"
            className="contact-form-control"
            id="contactLastName"
            name="contactLastName"
            value={formData.contactLastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="contactEmail">Email address</label>
          <input
            type="email"
            className="contact-form-control"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="contactDateOfWedding">Date of Wedding</label>
          <input
            type="date"
            className="contact-form-control"
            id="contactDateOfWedding"
            name="contactDateOfWedding"
            value={formData.contactDateOfWedding}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="contactServices">Services</label>
          <textarea
            className="contact-form-control"
            id="contactServices"
            name="contactServices"
            rows="3"
            value={formData.contactServices}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
