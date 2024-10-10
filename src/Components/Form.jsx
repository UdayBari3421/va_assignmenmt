import React, { useState } from "react";
import { toast } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  // function to validate form fields
  const validateForm = (code) => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (code == "name") {
      if (!formData.name || formData.name.length < 3) {
        newErrors.name = "Name is required at least 3 characters";
        isValid = false;
      }
    }
    if (code == "email") {
      if (!formData.email) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        isValid = false;
      }
    }

    if (code == "password") {
      if (!formData.password) {
        newErrors.password = "Password is required";
        isValid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // function to handle form submission
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.name && formData.email && formData.password) {
        toast.success("Form submitted successfully", {
          autoClose: 3000,
        });
        console.log(formData);
        setFormData({ name: "", email: "", password: "" });
      } else {
        toast.error("Please fill all the fields", {
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="form-container">
      <h1>User Form</h1>
      <hr />
      <form onSubmit={onFormSubmit}>
        <span>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              validateForm("name");
            }}
          />
          {errors.name && <p>{errors.name}</p>}
        </span>
        <span>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              validateForm("email");
            }}
          />
          {errors.email && <p>{errors.email}</p>}
        </span>
        <span>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              validateForm("password");
            }}
          />
          {errors.password && <p>{errors.password}</p>}
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
