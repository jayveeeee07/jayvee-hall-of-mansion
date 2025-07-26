// File: src/components/NavBar.jsx 

import React from "react"; 
import { useNavigate } from "react-router-dom";

const NavBar = () => { const navigate = useNavigate();

return ( <nav className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-md"> <div className="text-lg font-bold cursor-pointer" onClick={() => navigate("/")}> 🌴 JAYVEE HALL OF MANSION </div> <div className="space-x-4"> <button onClick={() => navigate("/dashboard")} className="hover:underline">Dashboard</button> <button onClick={() => navigate("/inbox")} className="hover:underline">Inbox</button> <button onClick={() => navigate("/settings")} className="hover:underline">Settings</button> <button onClick={() => navigate("/customer-service")} className="hover:underline">Customer Service</button> <button onClick={() => navigate("/")} className="hover:text-red-400">Logout</button> </div> </nav> ); };

export default NavBar;

