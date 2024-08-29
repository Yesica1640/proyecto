// models/productModel.js

con
const db = require('../../config/dbConfig');

// Obtener todos los productos
async function getAllProducts() {
    try {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;} catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
}
}

// Obtener un producto por ID
async function getProductById(id) {
try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    
    retur
return rows[0];
} catch (error) {
    
    c
console.error('Error al obtener producto:', error);
    
    t
throw error;
}
}

// Insertar un nuevo producto
async function addProduct(name, quantity, price) {
try {
    const [result] = await db.query('INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price]);
    
    
return result.insertId;
} catch (error) {
    console.error('Error al agregar producto:', error);
    throw error;
}
}

// Actualizar un producto
async function updateProduct(id, name, quantity, price) {
try {
    await db.query('UPDATE products SET name = ?, quantity = ?, price = ? WHERE id = ?', [name, quantity, price, id]);
} catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
}
}

// Eliminar un producto
async function deleteProduct(id) {
    try {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
} 
catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
}
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};

    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    getAllProducts,
    getProductById