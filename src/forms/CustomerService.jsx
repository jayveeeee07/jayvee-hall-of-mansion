// File: src/forms/CustomerService.jsx 

import React from "react"; import { useNavigate } from "react-router-dom";

const CustomerService = () => { const navigate = useNavigate();

return ( <div className="max-w-xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">☎️ Customer Service</h2>

<div className="mb-4">
    <p><strong>Phone:</strong> 09464766208</p>
    <p><strong>Email:</strong> jayveecaringal07@gmail.com</p>
    <p><strong>Social Media:</strong> @JaysGumcar</p>
    <p><strong>Address:</strong> Brgy Poblacion, Malungon Sarangani 9503</p>
  </div>

  <button
    onClick={() => navigate("/dashboard")}
    className="bg-gray-600 text-white px-4 py-2 rounded"
  >
    BACK
  </button>
</div>

); };

export default CustomerService;
