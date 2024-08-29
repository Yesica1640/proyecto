const express = require('express');

con
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const db = require('./config/dbConfig'); // Asegúrate de que la ruta sea correcta
const app = express();


const port = 3000;

// Configurar el middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar al pool y verificar la conexión
db.getConnection((err) => {
    if (err) {
        
        cons
console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Ruta de registro
app.post('/register', async (req, res) => {
    const { name, email, phone, password, 'confirm-password': confirmPassword } = req.body;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden.');
    }

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertar el nuevo usuario en la base de datos
        
        cons
const sql = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(sql, [name, email, phone, hashedPassword]);
        res.send('Registro exitoso.');
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).send('Error en el registro.');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});