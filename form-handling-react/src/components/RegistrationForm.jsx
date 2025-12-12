import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!username) formErrors.username = "Username is required";
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    setErrors(formErrors);

    // Stop submit if there are errors
    if (Object.keys(formErrors).length > 0) return;

    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "300px",
      }}
    >
      <h2>Registration Form (useState)</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
