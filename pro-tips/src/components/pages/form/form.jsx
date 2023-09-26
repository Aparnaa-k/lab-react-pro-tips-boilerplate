import React, { useState } from "react";
import "./form.css"

function form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contacts: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.contacts
    ) {
      alert("Registration successful!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="tel"
              placeholder="Contact Number"
              name="contacts"
              value={formData.contacts}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default form;
