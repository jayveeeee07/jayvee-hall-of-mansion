// File: src/forms/PaymentForm.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const PaymentForm = () => { const [method, setMethod] = useState("Gcash"); const [reference, setReference] = useState(""); const [proof, setProof] = useState(null); const navigate = useNavigate();

const handleSubmit = (e) => { e.preventDefault(); if (!reference || !proof) { alert("Please upload proof and fill in reference number."); return; } alert("Payment Submitted"); navigate("/dashboard"); };

const paymentDetails = { Gcash: "J.C - 09464766208", PayPal: "jayveecaringal07@gmail.com", Seabank: "unavailable link", };

return ( <form
onSubmit={handleSubmit}
className="max-w-lg mx-auto p-6 border rounded shadow-md"
> <h2 className="text-xl font-bold mb-4">💳 Payment Details</h2>

<p className="mb-2">TOTAL AMOUNT: Based on booking</p>

  <label className="block mb-2">Payment Method:</label>
  <select
    value={method}
    onChange={(e) => setMethod(e.target.value)}
    className="w-full border p-2 mb-4"
  >
    <option>Gcash</option>
    <option>PayPal</option>
    <option>Seabank</option>
  </select>

  <p className="mb-4">Send to: <strong>{paymentDetails[method]}</strong></p>

  <input
    type="text"
    placeholder="Reference Number (max 15 digits)"
    maxLength={15}
    value={reference}
    onChange={(e) => setReference(e.target.value)}
    className="w-full border p-2 mb-4"
    required
  />

  <input
    type="file"
    accept="image/*,application/pdf"
    onChange={(e) => setProof(e.target.files[0])}
    className="w-full mb-4"
    required
  />

  <div className="flex space-x-2">
    <button
      type="submit"
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      SUBMIT
    </button>
    <button
      type="button"
      onClick={() => navigate("/dashboard")}
      className="bg-gray-400 text-white px-4 py-2 rounded"
    >
      CANCEL
    </button>
  </div>
</form>

); };

export default PaymentForm;

  
