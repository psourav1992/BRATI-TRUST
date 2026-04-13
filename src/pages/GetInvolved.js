import "../css/GetInvolved.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetInvolved() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact"); // redirects to News page
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/volunteers`, formData) // proxy to backend
      .then(() => {
        alert("Thank you for volunteering!");
        // Reset form fields
        setFormData({ fullName: "", email: "", message: "" });
      })
      .catch(() => alert("Error submitting form"));
  };
  return (
    <div className="get-involved">
      {/* Page Header */}
      <section className="header_involved">
        <h1>Get Involved</h1>
        <p>
          Join BRATI Trust in making a difference. Whether you volunteer,
          donate, or partner with us, your support empowers communities.
        </p>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <h2>Volunteer With Us</h2>
        <p>
          Become part of our mission by contributing your time and skills. Fill
          out the form below to register as a volunteer.
        </p>
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName} // controlled input
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email} // controlled input
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us how you'd like to help"
            rows="4"
            value={formData.message} // controlled input
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Donation Section */}
      <section className="donate">
        <h2>Support Our Work</h2>
        <p>
          Your contributions help us expand our programs and reach more lives.
          You can donate directly to our official bank account:
        </p>
        <div className="bank-info">
          <p>
            <strong>Account Name:</strong> M/S BRATI
          </p>
          <p>
            <strong>Bank Name:</strong> Union Bank of India
          </p>
          <p>
            <strong>Branch:</strong> Shibpur
          </p>
          <p>
            <strong>Account Number:</strong> 301902010112222
          </p>
          <p>
            <strong>IFSC Code:</strong> UBIN0530191
          </p>
          <p>
            <strong>UPI ID:</strong> QR919088833340-2222@unionbankofindia
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner">
        <h2>Partner With Us</h2>
        <p>
          Collaborate with BRATI Trust to create lasting impact. We welcome
          partnerships with organizations, institutions, and individuals.
        </p>
        <button className="cta" onClick={goToContact}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default GetInvolved;
