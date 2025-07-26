// File: backend/controllers/bookingController.js 

const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => { try { const booking = new Booking(req.body); await booking.save(); res.status(201).json({ message: 'Booking created', booking }); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.getBookings = async (req, res) => { try { const bookings = await Booking.find().populate('user_id').populate('room_id'); res.json(bookings); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.updateBookingStatus = async (req, res) => { try { const { id } = req.params; const { status } = req.body; await Booking.findByIdAndUpdate(id, { status }); res.json({ message: 'Status updated' }); } catch (err) { res.status(500).json({ error: err.message }); } };

