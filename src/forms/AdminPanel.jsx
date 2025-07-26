// File: src/forms/AdminPanel.jsx 

import React, { useState } from "react";

const AdminPanel = () => { const [rooms, setRooms] = useState([ { id: 1, roomNo: "001", price: 2500 }, { id: 2, roomNo: "002", price: 3000 }, ]); const [newRoom, setNewRoom] = useState({ roomNo: "", price: "" });

const handleChange = (e) => { setNewRoom({ ...newRoom, [e.target.name]: e.target.value }); };

const addRoom = () => { if (newRoom.roomNo && newRoom.price) { setRooms([...rooms, { id: Date.now(), ...newRoom }]); setNewRoom({ roomNo: "", price: "" }); } };

const deleteRoom = (id) => { setRooms(rooms.filter((room) => room.id !== id)); };

return ( <div className="max-w-2xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-4">🛠 Administrator Panel</h2>

<div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">Add New Room</h3>
    <input
      type="text"
      name="roomNo"
      placeholder="Room No"
      value={newRoom.roomNo}
      onChange={handleChange}
      className="border p-2 mr-2"
    />
    <input
      type="number"
      name="price"
      placeholder="Price"
      value={newRoom.price}
      onChange={handleChange}
      className="border p-2 mr-2"
    />
    <button onClick={addRoom} className="bg-green-500 text-white px-4 py-2 rounded">
      ADD
    </button>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-2">Room List</h3>
    {rooms.map((room) => (
      <div
        key={room.id}
        className="border p-3 mb-2 flex justify-between items-center"
      >
        <span>
          Room {room.roomNo} – ₱{room.price}
        </span>
        <button
          onClick={() => deleteRoom(room.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          DELETE
        </button>
      </div>
    ))}
  </div>
</div>

); };

export default AdminPanel;

    
