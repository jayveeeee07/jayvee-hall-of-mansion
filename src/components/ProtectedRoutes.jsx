// File: src/components/ProtectedRoutes.jsx 

import React from "react"; 
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => { const isAuthenticated = !!localStorage.getItem("user");

return isAuthenticated ? <Outlet /> : <Navigate to="/login" />; };

export default ProtectedRoutes;





