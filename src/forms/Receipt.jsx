// File: src/forms/Receipt.jsx 

import React from "react"; import { useLocation } from "react-router-dom";

const Receipt = () => { const { state } = useLocation(); const { fullName, persons, dateIn, dateOut, time, room, paymentMethod, refNumber } = state || {};

return ( <div className="max-w-xl mx-auto p-6 border rounded shadow"> <h2 className="text-2xl font-bold mb-4 text-green-600">RESERVATION CONFIRMED</h2>

<div className="mb-4">
    <p><strong>Name:</strong> {fullName}</p>
    <p><strong>Room Number:</strong> {room?.roomNo}</p>
    <p><strong>Number of Persons:</strong> {persons}</p>
    <p><strong>Date In:</strong> {dateIn}</p>
    <p><strong>Date Out:</strong> {dateOut}</p>
    <p><strong>Time:</strong> {time}</p>
    <p><strong>Payment Method:</strong> {paymentMethod}</p>
    <p><strong>Reference Number:</strong> {refNumber}</p>
    <p><strong>Total Amount:</strong> ₱{room?.price}</p>
  </div>

  <p className="italic text-sm text-red-500 mb-6">
    Please bring this receipt to the counter upon arrival.
  </p>

  <button
    onClick={() => window.print()}
    className="bg-blue-600 text-white px-6 py-2 rounded"
  >
    DOWNLOAD (PDF)
  </button>
</div>

); };

export default Receipt;

