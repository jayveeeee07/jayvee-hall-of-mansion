// File: src/components/RoomCard.jsx 

import React from "react";

const RoomCard = ({ roomNo, price, imageUrl, onBook }) => { return ( <div className="border rounded shadow p-4 w-full max-w-sm bg-white"> <img src={imageUrl} alt={Room ${roomNo}} className="w-full h-40 object-cover rounded mb-2" /> <p><strong>ROOM NO:</strong> {roomNo}</p> <p><strong>PRICE:</strong> ₱{price}</p> <button
onClick={onBook}
className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
> BOOK </button> </div> ); };

export default RoomCard;
