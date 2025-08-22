import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    let formErrors = {};

    if (!username) {
      formErrors.username = "Username is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    // If no errors, proceed
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      alert("Registration successful ✅");

      // Reset fields
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      {/* Username */}
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={username}   // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}   // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}   // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded shadow"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
