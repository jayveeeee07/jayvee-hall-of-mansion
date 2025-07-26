// File: backend/routes/roomRoutes.js 

const express = require('express'); 
const router = express.Router(); 
const roomController = require('../controllers/roomController');
const auth = require('../middleware/authMiddleware');

router.get('/', roomController.getAllRooms); router.post('/', auth, roomController.createRoom); router.delete('/:id', auth, roomController.deleteRoom);

module.exports = router;




