// File: src/forms/AdminLoginForm.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => { const [username, setUsername] = useState(""); const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleLogin = () => { if (username === "admin") { navigate("/admin-panel"); } else if (username === "staff") { navigate("/staff-panel"); } else { alert("Invalid admin or staff credentials"); } };

return ( <div className="max-w-md mx-auto p-6"> <h2 className="text-xl font-bold mb-4">Admin/Staff Login</h2> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border mb-2" /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border mb-4" />

<button onClick={handleLogin} className="bg-blue-600 text-white py-2 px-4 rounded mr-2">
    LOGIN
  </button>
  <button onClick={() => navigate("/login")} className="bg-gray-400 text-black py-2 px-4 rounded">
    BACK
  </button>
</div>

); };

export default AdminLoginForm;


                                                                                             
