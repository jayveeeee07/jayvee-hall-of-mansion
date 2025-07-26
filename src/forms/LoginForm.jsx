
// File: src/forms/LoginForm.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const LoginForm = () => { const [username, setUsername] = useState(""); const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleLogin = () => { if (!username || !password) { alert("All fields are required."); return; }

// Simulated login flow
if (username === "admin") {
  navigate("/admin-login");
} else {
  navigate("/dashboard");
}

};

return ( <div className="max-w-md mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">🔐 Login</h2>

<input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full border p-2 mb-4"
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border p-2 mb-4"
  />

  <button
    onClick={handleLogin}
    className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-2"
  >
    LOGIN
  </button>

  <button
    onClick={() => navigate("/signup")}
    className="text-sm text-blue-500 underline mb-2 w-full"
  >
    REGISTER
  </button>

  <button
    onClick={() => navigate("/admin-login")}
    className="text-sm text-gray-600 underline w-full"
  >
    ADMINISTRATOR PANEL
  </button>

  <p className="text-sm text-red-500 mt-2">⚠️ Must create an account before login.</p>
</div>

); };

export default LoginForm;

