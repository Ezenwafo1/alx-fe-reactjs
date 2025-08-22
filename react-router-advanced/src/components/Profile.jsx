import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes inside Profile component */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
