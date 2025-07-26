// File: backend/controllers/authController.js 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const User = require('../models/User');

exports.register = async (req, res) => { try { const { email, password, ...rest } = req.body; const existing = await User.findOne({ email }); if (existing) return res.status(400).json({ message: 'Email already exists' });

const hashed = await bcrypt.hash(password, 10);
const newUser = new User({ ...rest, email, password: hashed });
await newUser.save();
res.status(201).json({ message: 'User registered' });

} catch (err) { res.status(500).json({ error: err.message }); } };

exports.login = async (req, res) => { try { const { email, password } = req.body; const user = await User.findOne({ email }); if (!user || !(await bcrypt.compare(password, user.password))) { return res.status(401).json({ message: 'Invalid credentials' }); } const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1d' }); res.json({ token, user }); } catch (err) { res.status(500).json({ error: err.message }); } };


