// File: backend/models/Room.js 

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({ room_number: { type: String, required: true }, price: { type: Number, required: true }, image_url: { type: String }, description: { type: String } }, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);





