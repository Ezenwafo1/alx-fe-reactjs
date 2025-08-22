import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ default import

// Simulated authentication status
const isAuthenticated = false; // Change to true to "login"

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/profile" style={{ marginRight: "1rem" }}>Profile</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Profile route */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />
          }
        >
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
