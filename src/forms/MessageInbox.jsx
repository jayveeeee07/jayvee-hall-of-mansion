// File: src/forms/Inbox.jsx 

import React, { useState } from "react"; import { useNavigate } from "react-router-dom";

const Inbox = () => { const navigate = useNavigate();

const [messages, setMessages] = useState([ { id: 1, type: "Ticket", content: "Your booking for Room 001 is confirmed.", read: false }, { id: 2, type: "Message", content: "Please show your ID at the counter.", read: false }, { id: 3, type: "Notification", content: "Check-in starts at 1PM.", read: false }, ]);

const markAsRead = (id) => { setMessages((prev) => prev.map((msg) => msg.id === id ? { ...msg, read: true } : msg ) ); };

return ( <div className="max-w-2xl mx-auto p-6"> <h2 className="text-2xl font-bold mb-6">📬 Inbox</h2>

{messages.map((msg) => (
    <div
      key={msg.id}
      className={`mb-4 border rounded p-4 ${msg.read ? "bg-gray-100" : "bg-white"}`}
    >
      <p><strong>{msg.type}:</strong> {msg.content}</p>
      {!msg.read && (
        <button
          onClick={() => markAsRead(msg.id)}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          READ
        </button>
      )}
    </div>
  ))}

  <button
    onClick={() => navigate("/dashboard")}
    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
  >
    BACK
  </button>
</div>

); };

export default Inbox;

  
