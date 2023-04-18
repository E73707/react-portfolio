import React, { useState } from "react";
import "../../styles/contact.css";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Send data to server or handle it accordingly
  };

  const validateField = (field, value) => {
    let errorMessage = "";
    switch (field) {
      case "name":
        errorMessage = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        errorMessage =
          value.trim() === ""
            ? "Email is required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? "Invalid email address"
            : "";
        break;
      case "message":
        errorMessage = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
  };

  return (
    <div className="body">
      <h1>Contact Me</h1>
      <p>This is a contact me Paragraph</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onMouseOut={() => validateField("name", name)}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onMouseOut={() => validateField("email", email)}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onMouseOut={() => validateField("message", message)}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
