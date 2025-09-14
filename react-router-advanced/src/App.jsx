import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Profile from "./pages/Profile.jsx";
import ProfileDetails from "./pages/ProfileDetails.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";

import BlogPost from "./pages/BlogPost.jsx";        // ✅ correct import
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
import BlogPost from "./pages/BlogPost.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        {/* Navigation links */}
        <Link to="/profile" style={{ marginRight: "1rem" }}>Profile</Link>
        <Link to="/blog/1" style={{ marginRight: "1rem" }}>Blog 1</Link>
        <Link to="/blog/2" style={{ marginRight: "1rem" }}>Blog 2</Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>



        {/* Toggle authentication */}
        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          style={{ marginLeft: "1rem" }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Profile route with nested routes */}
        <Route 
          path="/profile" 
          element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>


        {/* Dynamic blog route */}
        <Route path="/blog/:id" element={<BlogPost />} />   {/* ✅ added explicitly */}

        {/* Dynamic blog routes */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
