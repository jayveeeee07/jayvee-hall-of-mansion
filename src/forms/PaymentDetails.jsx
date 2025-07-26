// File: src/forms/PaymentDetails.jsx 

import React, { useState } from "react"; import { useLocation, useNavigate } from "react-router-dom";

const PaymentDetails = () => { const { state } = useLocation(); const navigate = useNavigate(); const { room, fullName, persons, dateIn, dateOut, time } = state || {};

const [paymentMethod, setPaymentMethod] = useState(""); const [proof, setProof] = useState(null); const [refNumber, setRefNumber] = useState("");

const handleSubmit = () => { if (!paymentMethod || !proof || !refNumber) { alert("All payment fields are required."); return; }

const receiptData = {
  fullName,
  persons,
  dateIn,
  dateOut,
  time,
  room,
  paymentMethod,
  refNumber
};

navigate("/receipt", { state: receiptData });

};

const renderPaymentInfo = () => { switch (paymentMethod) { case "Gcash": return <p className="text-blue-600">Gcash: J.C - 09464766208</p>; case "PayPal": return <p className="text-blue-600">PayPal: jayveecaringal07@gmail.com</p>; case "Seabank": return <p className="text-red-600">Seabank: Unavailable</p>; default: return null; } };

return ( <div className="max-w-xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">Payment Details</h2> <p className="mb-2"><strong>Total Amount:</strong> ₱{room?.price}</p>

<label className="block mb-2">Select Payment Method:</label>
  <select
    className="w-full border p-2 mb-4"
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
  >
    <option value="">-- Choose Method --</option>
    <option value="Gcash">Gcash</option>
    <option value="PayPal">PayPal</option>
    <option value="Seabank">Seabank</option>
  </select>

  {renderPaymentInfo()}

  <div className="my-4">
    <label>Upload Proof of Payment:</label>
    <input
      type="file"
      accept="image/*,application/pdf"
      className="w-full border p-2"
      onChange={(e) => setProof(e.target.files[0])}
    />
  </div>

  <div className="mb-4">
    <label>Reference Number (max 15 digits):</label>
    <input
      type="text"
      maxLength={15}
      className="w-full border p-2"
      value={refNumber}
      onChange={(e) => setRefNumber(e.target.value)}
    />
  </div>

  <div className="flex gap-4">
    <button onClick={() => navigate("/dashboard")} className="bg-gray-500 text-white px-4 py-2 rounded">
      BACK
    </button>
    <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
      SUBMIT
    </button>
  </div>
</div>

); };

export default PaymentDetails;

  
