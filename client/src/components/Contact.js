import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { fullName, email, purpose } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/contacts",
        formData
      );
      console.log("Contact form submitted:", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-50">
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Let's Design Together
        </h1>
        {!submitted ? (
          <>
            <p className="text-center">
              Please fill out the form below to connect with me.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="purpose" className="form-label">
                  Purpose of Connecting (in brief)
                </label>
                <textarea
                  className="form-control"
                  id="purpose"
                  name="purpose"
                  rows="3"
                  value={purpose}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#ff6300", borderColor: "#ff6300" }}
              >
                Contact Me
              </button>
            </form>
          </>
        ) : (
          <div className="alert alert-success text-center" role="alert">
            Thank you! Your message has been submitted successfully.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
