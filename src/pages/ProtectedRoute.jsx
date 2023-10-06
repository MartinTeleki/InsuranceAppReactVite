// ProtectedAdminRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ element, isLoggedIn, isAdmin }) => {
  console.log(isAdmin);
  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedAdminRoute;
