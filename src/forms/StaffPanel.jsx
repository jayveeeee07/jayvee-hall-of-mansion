// File: src/forms/StaffPanel.jsx 

import React, { useState } from "react";

const StaffPanel = () => { const [bookings, setBookings] = useState([ { id: 1, name: "Juan Dela Cruz", room: "001", total: 2500, status: "pending" }, { id: 2, name: "Maria Clara", room: "002", total: 3000, status: "pending" }, ]);

const [payments] = useState([ { id: 1, name: "Juan Dela Cruz", method: "Gcash", reference: "123456789012345", proof: "proof1.jpg" }, { id: 2, name: "Maria Clara", method: "PayPal", reference: "987654321098765", proof: "proof2.jpg" }, ]);

const [message, setMessage] = useState("");

const handleBookingAction = (id, status) => { setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)) ); };

const handleSendMessage = () => { alert("Message sent to customer!"); setMessage(""); };

return ( <div className="max-w-4xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">👷 Staff Panel</h2>

<section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">1. Manage Bookings</h3>
    {bookings.map((b) => (
      <div key={b.id} className="border p-3 mb-2 flex justify-between items-center">
        <span>{b.name} – Room {b.room} – ₱{b.total} – Status: {b.status}</span>
        <div className="space-x-2">
          <button
            onClick={() => handleBookingAction(b.id, "approved")}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            APPROVE
          </button>
          <button
            onClick={() => handleBookingAction(b.id, "denied")}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            DENY
          </button>
        </div>
      </div>
    ))}
  </section>

  <section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">2. Payment Records</h3>
    {payments.map((p) => (
      <div key={p.id} className="border p-3 mb-2">
        <p><strong>{p.name}</strong> – {p.method}</p>
        <p>Reference #: {p.reference}</p>
        <p>Proof: {p.proof}</p>
      </div>
    ))}
  </section>

  <section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">3. Send Message to Customer</h3>
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full border p-2 mb-2"
      placeholder="Write your message here..."
    />
    <button
      onClick={handleSendMessage}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      SEND
    </button>
  </section>

  <section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">4. Customer Information</h3>
    {/* Replace this with dynamic user data */}
    <div className="border p-3 mb-2">
      <p><strong>Full Name:</strong> Juan Dela Cruz</p>
      <p><strong>Email:</strong> juan@example.com</p>
      <p><strong>Contact:</strong> 09123456789</p>
      <p><strong>Address:</strong> Sample Address</p>
    </div>
  </section>
</div>

); };

export default StaffPanel;

  
