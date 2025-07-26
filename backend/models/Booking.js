// File: backend/models/User.js 

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ full_name: { type: String, required: true }, birthdate: { type: Date, required: true }, status: { type: String, required: true }, sex: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, address: { type: String, required: true }, contact_number: { type: String, required: true }, email: { type: String, required: true, unique: true }, password: { type: String, required: true }, role: { type: String, enum: ['customer', 'admin', 'staff'], default: 'customer' } }, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

