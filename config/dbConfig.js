const pool = mysqconst mysql = require('mysql2');

conl.createPool({
  host: 'localhost',
  user: 'root',  // Reemplaza con tu nombre de usuario
  password: '',  // Reemplaza con tu contraseña
  database: 'user_registration_db'  // Nombre de tu base de datos
});

module.exports = pool.promise();  // Exporta la promesa del pool de conexiones