import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-blue-500 animate-pulse">
          <span className="loading loading-ring loading-xl"></span>
        </p>
      </div>
    );
  }

 
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
