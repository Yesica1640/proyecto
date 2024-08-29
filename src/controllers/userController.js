// userController.js
const db = require('../../src/models/userModel');

// Registro de usuario
exports.registerUser = (req, res) => {
    const { name, email, phone, password, 'confirm-password': confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden.');
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).send('Error en el registro.');

        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) return res.status(500).send('Error en el registro.');
            res.send('Registro exitoso.');
        });
    });
};