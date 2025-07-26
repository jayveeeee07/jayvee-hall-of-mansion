// File: backend/controllers/roomController.js 

const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => { try { const rooms = await Room.find(); res.json(rooms); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.createRoom = async (req, res) => { try { const room = new Room(req.body); await room.save(); res.status(201).json({ message: 'Room added', room }); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.deleteRoom = async (req, res) => { try { const { id } = req.params; await Room.findByIdAndDelete(id); res.json({ message: 'Room deleted' }); } catch (err) { res.status(500).json({ error: err.message }); } };


                                                                                                                                                                                           
