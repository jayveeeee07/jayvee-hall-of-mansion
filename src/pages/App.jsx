// This is the entry point for your React app (App.jsx)

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeForm from "./forms/WelcomeForm";
import LoginForm from "./forms/LoginForm";
import AdminLoginForm from "./forms/AdminLoginForm";
import SignUpForm from "./forms/SignUpForm";
import Dashboard from "./forms/Dashboard";
import BookingForm from "./forms/BookingForm";
import PaymentForm from "./forms/PaymentForm";
import MessageInbox from "./forms/MessageInbox";
import SettingsPage from "./forms/SettingsPage";
import CustomerService from "./forms/CustomerService";
import AdminPanel from "./forms/AdminPanel";
import StaffPanel from "./forms/StaffPanel";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-login" element={<AdminLoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/inbox" element={<MessageInbox />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/staff-panel" element={<StaffPanel />} />
      </Routes>
    </Router>
  );
          }

