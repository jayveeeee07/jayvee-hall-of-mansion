// File: backend/app.js 

const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const fileUpload = require('express-fileupload'); require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const messageRoutes = require('./routes/messageRoutes'); 
const roomRoutes = require('./routes/roomRoutes');

const app = express();

// Middleware 

app.use(cors()); 
app.use(express.json()); 
app.use(fileUpload()); 
app.use('/uploads', express.static('uploads'));

// Routes 

app.use('/api/auth', authRoutes); 
app.use('/api/bookings', bookingRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/rooms', roomRoutes);

// MongoDB

connection mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/jayvee-mansion', { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => console.log('MongoDB connected')) .catch(err => console.error('MongoDB connection error:', err));

module.exports = app;

