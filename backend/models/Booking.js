// File: backend/models/Booking.js 

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({ user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, full_name: { type: String }, number_of_persons: { type: Number }, date_in: { type: Date }, date_out: { type: Date }, time_period: { type: String, enum: ['AM', 'PM'] }, status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' } }, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);


