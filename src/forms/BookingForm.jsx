// File: src/forms/BookingForm.jsx 

import React, { useState } from "react"; import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => { const location = useLocation(); const navigate = useNavigate(); const room = location.state;

const [formData, setFormData] = useState({ fullName: "", persons: "", dateIn: "", dateOut: "", time: "" });

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const handleSubmit = () => { const { fullName, persons, dateIn, dateOut, time } = formData; if (!fullName || !persons || !dateIn || !dateOut || !time) { alert("Please fill in all required fields."); return; } navigate("/payment", { state: { ...formData, room } }); };

return ( <div className="max-w-lg mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">Booking Form</h2>

<div className="mb-4 p-4 border rounded">
    <p><strong>Room No:</strong> {room.roomNo}</p>
    <p><strong>Price:</strong> ₱{room.price}</p>
  </div>

  {[
    { name: "fullName", label: "Full Name" },
    { name: "persons", label: "No. of Person" },
    { name: "dateIn", label: "Date In", type: "date" },
    { name: "dateOut", label: "Date Out", type: "date" },
    { name: "time", label: "Time", type: "text", placeholder: "AM/PM" },
  ].map((field) => (
    <div key={field.name} className="mb-3">
      <label>{field.label}</label>
      <input
        type={field.type || "text"}
        name={field.name}
        placeholder={field.placeholder || ""}
        value={formData[field.name]}
        onChange={handleChange}
        className="w-full p-2 border"
      />
    </div>
  ))}

  <div className="flex gap-4 mt-4">
    <button onClick={() => navigate("/dashboard")} className="bg-red-500 text-white px-4 py-2 rounded">
      CANCEL
    </button>
    <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
      SUBMIT
    </button>
  </div>
</div>

); };

export default BookingForm;

  
