import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('token'); // or use your auth state
  return isAuth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

// This code defines a ProtectedRoute component that checks if a user is authenticated.
// If the user is authenticated (i.e., a token exists in local storage), it renders the children components.