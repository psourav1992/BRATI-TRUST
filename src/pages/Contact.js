import "../css/Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/contacts`, formData) // proxy to backend
      .then(() => {
        alert("Message sent successfully!");
        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Error sending message"));
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you. Reach out for inquiries, collaborations,
          or to learn more about BRATI Trust.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <h2>Our Details</h2>
        <p>
          <strong>Email:</strong> brati.organization@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91-9830237711
        </p>
        <p>
          <strong>Address:</strong> Howrah, West Bengal, India
        </p>
      </section>

      {/* Social Links */}
      <section className="social-links">
        <h2>Connect With Us</h2>
        <p>
          <a href="#">Facebook</a> |<a href="#"> Twitter</a> |
          <a href="#"> Instagram</a> |<a href="#"> LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
