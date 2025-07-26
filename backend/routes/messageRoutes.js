// File: backend/routes/messageRoutes.js 

const express = require('express'); 
const router = express.Router(); const Message = require('../models/Message'); 
const auth = require('../middleware/authMiddleware');

// Send a message 

router.post('/', auth, async (req, res) => { try { const message = new Message(req.body); await message.save(); res.status(201).json({ message: 'Message sent', message }); } catch (err) { res.status(500).json({ error: err.message }); } });

// Get messages for user

router.get('/:userId', auth, async (req, res) => { try { const messages = await Message.find({ receiver_id: req.params.userId }); res.json(messages); } catch (err) { res.status(500).json({ error: err.message }); } });

module.exports = router;

