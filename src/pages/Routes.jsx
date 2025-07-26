// File: src/pages/Routes.jsx 

import React from "react"; 
import { Routes, Route } from "react-router-dom"; import WelcomeForm from "../forms/WelcomeForm"; import LoginForm from "../forms/LoginForm"; import SignupForm from "../forms/SignupForm"; import Dashboard from "../forms/Dashboard"; import BookingForm from "../forms/BookingForm"; import PaymentForm from "../forms/PaymentForm"; import InboxForm from "../forms/InboxForm"; import SettingsForm from "../forms/SettingsForm"; import CustomerServiceForm from "../forms/CustomerServiceForm"; import AdminLoginForm from "../forms/AdminLoginForm"; import AdminPanel from "../forms/AdminPanel"; import StaffPanel from "../forms/StaffPanel"; import ProtectedRoutes from "../components/ProtectedRoutes";

const MainRoutes = () => { return ( <Routes> <Route path="/" element={<WelcomeForm />} /> <Route path="/login" element={<LoginForm />} /> <Route path="/signup" element={<SignupForm />} /> <Route path="/admin-login" element={<AdminLoginForm />} />

{/* Protected Routes for authenticated users */}
  <Route element={<ProtectedRoutes />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/book" element={<BookingForm />} />
    <Route path="/payment" element={<PaymentForm />} />
    <Route path="/inbox" element={<InboxForm />} />
    <Route path="/settings" element={<SettingsForm />} />
    <Route path="/customer-service" element={<CustomerServiceForm />} />
  </Route>

  {/* Admin and Staff Panels */}
  <Route path="/admin-panel" element={<AdminPanel />} />
  <Route path="/staff-panel" element={<StaffPanel />} />
</Routes>

); };

export default MainRoutes;

  
