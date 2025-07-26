// File: src/forms/Settings.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const Settings = () => { const navigate = useNavigate();

const [formData, setFormData] = useState({ fullName: "", birthdate: "", status: "", sex: "", address: "", contact: "", email: "", });

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const handleSave = () => { alert("Changes saved successfully."); // Optionally: update in backend };

return ( <div className="max-w-xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-6">⚙️ Personal Settings</h2>

{Object.entries(formData).map(([key, val]) => (
    <div key={key} className="mb-4">
      <label className="capitalize block mb-1">{key.replace(/([A-Z])/g, " $1")}:</label>
      <input
        type={key === "birthdate" ? "date" : "text"}
        name={key}
        className="w-full border p-2"
        value={val}
        onChange={handleChange}
      />
    </div>
  ))}

  <div className="flex gap-4">
    <button
      onClick={handleSave}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      SAVE CHANGES
    </button>
    <button
      onClick={() => navigate("/dashboard")}
      className="bg-gray-500 text-white px-4 py-2 rounded"
    >
      BACK
    </button>
  </div>
</div>

); };

export default Settings;

      
