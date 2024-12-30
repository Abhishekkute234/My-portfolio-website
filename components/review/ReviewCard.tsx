// components/FeedbackForm.js
"use client";
import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can handle the form submission here (e.g., send it to an API).
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-black p-4 py-5 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      {" "}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                minHeight: "100px",
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
