// File: backend/controllers/paymentController.js 

const Payment = require('../models/Payment');

exports.submitPayment = async (req, res) => { try { const payment = new Payment(req.body); await payment.save(); res.status(201).json({ message: 'Payment recorded' }); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.getPayments = async (req, res) => { try { const payments = await Payment.find().populate('booking_id'); res.json(payments); } catch (err) { res.status(500).json({ error: err.message }); } };


