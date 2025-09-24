import React from "react";
import "./login.css";

import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password isn't matching");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unknown error");
      }

      alert(data.message);
    } catch (error) {
      console.error("❌ Error:", error);
      alert(`Failed: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// <div className='Container'>
{
  /* <form action="">
            <label>Username</label>
            <input type="text" placeholder='Enter your Name' required/>
            <br />
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' required/>
            <br />
            <label>Password</label> 
            <input type="password" placeholder='Enter your Password' required/>
        </form> */
}

// <form>
//   <h2>Login</h2>
//     <label>Your Name:</label>
//     <input className="field" placeholder="Enter your name" type="text" value="dsa" name="name">
//       <label>Email:</label>
//       <input type="email" className="field" placeholder="Enter your email" value="" name="email">
//       <label>Message:</label>
//     <textarea name="message" className="field mess" placeholder="Enter your message!"></textarea>

//   <button type="submit" className="contact-button">Send Message</button>
// </form>

{
  /* </div> */
}
