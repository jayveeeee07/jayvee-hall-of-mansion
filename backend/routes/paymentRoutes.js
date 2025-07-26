

// File: backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, paymentController.submitPayment);
router.get('/', auth, paymentController.getPayments);

module.exports = router;
