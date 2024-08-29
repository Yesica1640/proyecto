// authMiddleware.js
const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret'; // Deberías mover esto a un archivo de variables de entorno

// Middleware de autenticación
exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    
    if (!token) return res.status(403).send('No token provided.');

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token.');
        
        req.userId = decoded.id;
        next();
    });
};