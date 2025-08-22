// src/components/RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  // Separate states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // Clear error if validation passes
    setError("");

    console.log("Form Submitted:", { username, email, password });
    alert(`Registration Successful!\nWelcome, ${username}`);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Registration Form
      </h2>

      {/* Show error message */}
      {error && (
        <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition shadow"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
