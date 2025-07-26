// File: src/forms/SignUpForm.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const SignUpForm = () => { const navigate = useNavigate(); const [formData, setFormData] = useState({ fullName: "", birthdate: "", status: "", sex: "", address: "", contact: "", email: "", otp: "" });

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const handleCreateAccount = () => { const allFilled = Object.values(formData).every((val) => val.trim() !== ""); if (!allFilled) { alert("Please fill all required fields."); return; } // TODO: send data to backend alert("Account created successfully!"); navigate("/login"); };

return ( <div className="max-w-lg mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">Create Account</h2> {[ { name: "fullName", label: "Full Name" }, { name: "birthdate", label: "Birthdate", type: "date" }, { name: "status", label: "Status" }, { name: "sex", label: "Sex" }, { name: "address", label: "Address" }, { name: "contact", label: "Contact Number" }, { name: "email", label: "Email Address", type: "email" }, { name: "otp", label: "OTP Code" }, ].map((field) => ( <div key={field.name} className="mb-3"> <label>{field.label}</label> <input type={field.type || "text"} name={field.name} value={formData[field.name]} onChange={handleChange} className="w-full border p-2" /> </div> ))}

<button className="bg-purple-600 text-white px-4 py-2 rounded mr-3" onClick={() => navigate("/login")}>
    BACK
  </button>
  <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleCreateAccount}>
    CREATE ACCOUNT
  </button>
</div>

); };

export default SignUpForm;

