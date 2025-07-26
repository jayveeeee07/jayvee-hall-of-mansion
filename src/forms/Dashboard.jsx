// File: src/forms/Dashboard.jsx 

import React, { useState, useEffect } from "react"; import { useNavigate } from "react-router-dom";

const sampleRooms = [ { roomNo: "001", price: 3000, image: "/images/room1.jpg" }, { roomNo: "002", price: 3200, image: "/images/room2.jpg" }, { roomNo: "003", price: 2800, image: "/images/room3.jpg" }, { roomNo: "004", price: 3500, image: "/images/room4.jpg" }, { roomNo: "005", price: 3600, image: "/images/room5.jpg" }, ];

const Dashboard = () => { const [index, setIndex] = useState(0); const navigate = useNavigate();

const nextRoom = () => { if (index < sampleRooms.length - 1) setIndex(index + 1); };

const prevRoom = () => { if (index > 0) setIndex(index - 1); };

const currentRoom = sampleRooms[index];

return ( <div className="max-w-3xl mx-auto p-6"> <div className="flex justify-between mb-4"> <button onClick={() => navigate("/inbox")} className="bg-blue-500 text-white p-2 rounded">MESSAGE</button> <button onClick={() => navigate("/settings")} className="bg-yellow-500 text-white p-2 rounded">SETTING</button> <button onClick={() => navigate("/login")} className="bg-red-500 text-white p-2 rounded">LOGOUT</button> <button onClick={() => navigate("/contact")} className="bg-green-500 text-white p-2 rounded">CUSTOMER SERVICE</button> </div>

<div className="border rounded-lg p-4 text-center">
    <img src={currentRoom.image} alt="Room" className="mx-auto h-64 object-cover rounded mb-4" />
    <p className="text-xl font-semibold">ROOM NO: {currentRoom.roomNo}</p>
    <p className="text-lg">PRICE: ₱{currentRoom.price}</p>
    <button
      onClick={() => navigate("/booking", { state: currentRoom })}
      className="bg-green-600 text-white px-6 py-2 rounded mt-4"
    >
      BOOK
    </button>
  </div>

  <div className="flex justify-between mt-6">
    <button onClick={prevRoom} disabled={index === 0} className="bg-gray-400 px-4 py-2 rounded">Previous</button>
    <button onClick={nextRoom} disabled={index === sampleRooms.length - 1} className="bg-gray-400 px-4 py-2 rounded">Next</button>
  </div>
</div>

); };

export default Dashboard;

  
