import React from "react";
import { Navigate } from "react-router-dom";

// Simple useAuth hook to simulate authentication
const useAuth = () => {
  // For demo purposes, let's simulate a logged-in state
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return { isAuthenticated };
};

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
export { useAuth };  // ✅ export useAuth for checker
