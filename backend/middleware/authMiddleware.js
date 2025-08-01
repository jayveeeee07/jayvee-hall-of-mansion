// File: backend/middleware/authMiddleware.js 

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) { const token = req.header('Authorization'); if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

try { const decoded = jwt.verify(token.replace('Bearer ', ''), 'secret'); req.user = decoded; next(); } catch (err) { res.status(400).json({ message: 'Invalid Token' }); } };

