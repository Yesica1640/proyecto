// models/userModel.js
const db = require('../../config/dbConfig');

// Ejemplo de consulta
async function getUsers() {
    try {
        
        const [rows] = await db.query('SELECT * FROM users');
    return rows;
} catch (error) {
    
    console.error('Error al consultar usuarios:', error);
    
    throw error;
}
}

module.exports = {
    getUsers
};
getUsers