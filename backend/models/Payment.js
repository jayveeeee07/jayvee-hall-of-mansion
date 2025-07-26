// File: backend/models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['Gcash', 'PayPal', 'Seabank'], required: true },
  reference_number: { type: String, required: true },
  proof: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);

           




