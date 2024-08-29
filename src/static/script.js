// Variables de elementos
const modal = document.getElementById('product-modal');
const modalContent = document.querySelector('.modal-images');
const modalTitle = document.getElementById('modal-product-title');
const closeModal = document.querySelector('.close');
const viewButtons = document.querySelectorAll('.btn__product');
const addToCartModalButton = document.querySelector('.btn__add-to-cart-modal');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let currentProduct;

// Información de productos
const productData = {
    product1: {

        name: '',
        
        description: '',
        images: [
            { src: '../../src/static/images/diademas/fiesta sirena con lentejuelas 1.jpeg', title: 'Diadema sirena con lentejuelas color palo rosa', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/diademas/fiesta sirena con lentejuelas 2.jpeg', title: 'Diadema sirena con lentejuelas color purpura', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/diademas/coloridas con flores y corazones .jpeg', title: 'Diadema de flores y corazones Setx 3', price: 25.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Diadema De Cinta De Terciopelo1.jpeg', title: 'Cintillo  de terciopelo SetX4', price: 32.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Diademas De Cinta Lisa2.jpeg', title: 'Diademas de cinta lisa SetX4', price: 12.00, quantity: 5 },
            { src: '../../src/static/images/diademas/Diademas De Cinta Lisa1.jpeg', title: 'Diademas de cinta lisa SetX4', price: 12.00, quantity: 5 },
            { src: '../../src/static/images/diademas/Diademas De Cinta Lisa3.jpeg', title: 'Diademas de cinta lisa SetX4', price: 12.00, quantity: 5 },
            { src: '../../src/static/images/diademas/Diademas De Cinta Lisa4.jpeg', title: 'Diademas de cinta lisa SetX4', price: 12.00, quantity: 5 },
            { src: '../../src/static/images/diademas/diademas de tela de flores con nudos.jpeg', title: 'Balacas de tela de flores con nudos SetX3', price: 35.000, quantity: 5 },
            { src: '../../src/static/images/diademas/diademas de tela de flores con nudos2.jpeg', title: 'Balacas  de tela de flores con nudos SetX3', price: 35.000, quantity: 5 },
            { src: '../../src/static/images/diademas/diademas de tela de flores con nudos3.jpeg', title: 'Balacas  de tela de flores con nudos SetX3', price: 35.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Diademas Elásticas Suaves1.jpeg', title: 'Cintillo elásticas suave SetX3', price: 39.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Diseño De Lazo Impreso.jpeg', title: 'Cintillo De Lazo Impreso SetX5', price: 29.000, quantity: 5 },
            { src: '../../src/static/images/diademas/flor púrpura.jpeg', title: 'Diadema flor púrpura', price: 15.000, quantity: 5 },
            { src: '../../src/static/images/diademas/forma de orejas de gato lindas1.jpeg', title: 'Diademas de forma de orejas de gato lindas SetX5', price: 35.000, quantity: 5 },
            { src: '../../src/static/images/diademas/lazo adorno dulce.jpeg', title: 'Cintillo elastico de lazo adorno dulce SetX7', price: 49.000, quantity: 5 },
            { src: '../../src/static/images/diademas/pelo elásticas de color liso con lazo.jpeg', title: 'Turbanes elásticas de color liso con lazo SetX5', price: 45.000, quantity: 5 },
            { src: '../../src/static/images/diademas/pelo elásticas de color liso con lazo2.jpeg', title: 'Turbanes elásticas de color liso con lazo SetX5', price: 45.000, quantity: 5 },
            { src: '../../src/static/images/diademas/piezas Banda de pelo con diseño de lazo.jpeg', title: 'Cintillo de pelo con diseño de lazo SetX5', price: 39.000, quantity: 5 },
            { src: '../../src/static/images/diademas/piezas Banda de pelo con diseño de lazo2.jpeg', title: 'Cintillo de pelo con diseño de lazo SetX5', price: 39.000, quantity: 5 },
            { src: '../../src/static/images/diademas/piezas Banda de pelo con diseño de lazo3.jpeg', title: 'Cintillo de pelo con diseño de lazo SetX5', price: 39.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Piezas Bonitas Bandas De Pelo1.jpeg', title: 'Balacas bonitas De Pelo SetX5', price: 35.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Princesa, Super Hada,blanca.jpeg', title: 'Diademas de princesa  hada color blanca', price: 23.000, quantity: 5 },
            { src: '../../src/static/images/diademas/Princesa, Super Hada,roja.jpeg', title: 'Diademas de princesa hada color roja', price: 23.000, quantity: 5 },
            
            // Añadir más imágenes según sea necesario
        ]
    },

    product2: {
        name: 'Accesorios',
        description: 'Descripción detallada del producto 1.',
        images: [
            { src: '../../src/static/images/monos/Cuentas Y Bolas Brillantes3.jpeg', title: 'Cuentas  brillantes', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/monos/Cuentas Y Bolas Brillantes1.jpeg', title: 'Cuentas  brillantes', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/monos/Cuentas Y Bolas Brillantes2.jpeg', title: 'Cuentas  brillantes', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/monos/Cuentas Y Bolas Brillantes4.jpeg', title: 'Cuentas  brillantes', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/monos/Accesorios Para El Cabello Floral .jpeg', title: 'Accesorios para el cabello floral', price: 9.500, quantity: 5 },
            { src: '../../src/static/images/monos/dibujos animados lindo1.jpeg', title: 'Tiernos gatitos SetX4', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/monos/dibujos animados lindo2.jpeg', title: 'Tiernos gatitos SetX4', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/monos/Elástica Y Duradera Con Diseño.jpeg', title: 'Lindos animalitos SetX5', price: 11.000, quantity: 5 },
            { src: '../../src/static/images/monos/Goma para pelo .jpeg', title: 'flores SetX5', price: 11.000, quantity: 5 },
            { src: '../../src/static/images/monos/Lazos Para El Cabello, Bandas.jpeg', title: 'Banditas para el cabello SetX6', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/monos/Pompones Lindos Y Coloridos .jpeg', title: 'Pompones lindos y Coloridos SurtidosX30', price: 9.000, quantity: 5 },
            // Añadir más imágenes según sea necesario
        ]
    },

    product3: {
        name: '',
        description: 'Descripción detallada del producto 1.',
        images: [
            { src: '../../src/static/images/pinzas/flor Accesorios.jpeg', title: 'Pinza flor', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/cabello infantil Horquilla.jpeg', title: 'Horquilla sirena', price: 9.500, quantity: 5 },
            { src: '../../src/static/images/pinzas/clips de cabello de lazo de cinta1.jpeg', title: 'Clips lazo de cinta SetX5', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/clips de cabello de lazo de cinta2.jpeg', title: 'Clips lazo de cinta SetX5', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/clips de cabello de lazo de cinta3.jpeg', title: 'Clips lazo de cinta SetX5', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/colores arena movediza1.jpeg', title: 'Clips sirena rosa', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/colores arena movediza2.jpeg', title: 'Clips sirena rosa', price: 9.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/colores arena movediza3.jpeg', title: 'Clips dulces SetX4.', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Decorados Con Moño1.jpeg', title: 'Pinza con lazo verde', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Decorados Con Moño2.jpeg', title: 'Pinza con lazo purpura', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Decorados Con Moño3.jpeg', title: 'Pinza con lazo blanco', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Diseño De Lazo Rosa En Polvo.jpeg', title: 'Pinza negro Lazo Rosa En Polvo', price: 11.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Flor De Pompón1.jpeg', title: 'Clips pompom arcoiris', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Flor De Pompón2.jpeg', title: 'Clips pompom arcoiris rojo', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/flores bordadas.jpeg', title: 'Pinza flores bordadas SetX3', price: 12.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Lazo Con Estampado1.jpeg', title: ' pinza lazo con estampado purpura', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Lazo Con Estampado2.jpeg', title: 'pinza lazo con estampado rojo', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Lazo Con Estampado3.jpeg', title: 'pinza lazo con estampado azul', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Lazo Con Estampado4.jpeg', title: 'pinza lazo con estampado palo rosa', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/Lazo De Tela Floral.jpeg', title: ' pinza lazo tela floral', price: 8.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/unicolor para niñas con clips1.jpeg', title: 'Clips color pasteles SetX7', price: 15.000, quantity: 5 },
            { src: '../../src/static/images/pinzas/unicolor para niñas con clips2.jpeg', title: 'Clips color surtidos  SetX7', price: 15.000, quantity: 5 },
            
            // Añadir más imágenes según sea necesario
        ]
    },
    // Otros productos
};

// Función para abrir el modal
function openModal(product) {
    currentProduct = product; // Guardar el producto actual
    const data = productData[product];

    // Limpiar contenido anterior
    modalContent.innerHTML = '';
    modalTitle.textContent = data.name;

    // Añadir imágenes y detalles al modal
    data.images.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product-container');
        
        const img = document.createElement('img');
        img.src = item.src;
        img.classList.add('product-image');
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const price = document.createElement('p');
        price.textContent = `Precio: $${item.price.toFixed(2)}`;
        
        const qtyAvailable = document.createElement('p');
        qtyAvailable.textContent = `Cantidad disponible: ${item.quantity}`;
        
        const qtyLabel = document.createElement('label');
        qtyLabel.textContent = 'Cantidad deseada:';
        
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.classList.add('quantity-input');
        qtyInput.min = 1;
        qtyInput.max = item.quantity;
        qtyInput.value = 1;
        
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.classList.add('btn__add-to-cart');
        addToCartButton.addEventListener('click', () => addToCart(item, qtyInput.value));
        
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(qtyAvailable);
        div.appendChild(qtyLabel);
        div.appendChild(qtyInput);
        div.appendChild(addToCartButton);
        
        modalContent.appendChild(div);
    });

    modal.style.display = 'block';
}

// Función para agregar al carrito
function addToCart(item, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(cartItem => cartItem.src === item.src);

    if (existingProduct) {
        existingProduct.quantity += parseInt(quantity); // Incrementar cantidad si el producto ya está en el carrito
    } else {
        cart.push({
            src: item.src,
            title: item.title,
            price: item.price,
            quantity: parseInt(quantity)
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
    alert('Producto agregado al carrito');
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// Función para actualizar el contenido del modal del carrito
function updateCartModal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = ''; // Limpiar el contenido del carrito
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');

        const title = document.createElement('p');
        title.textContent = `${item.title} (${item.quantity} x $${item.price.toFixed(2)})`;

        const price = document.createElement('p');
        price.textContent = `$${(item.quantity * item.price).toFixed(2)}`;

        div.appendChild(title);
        div.appendChild(price);
        cartItems.appendChild(div);

        total += item.quantity * item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para mostrar el modal del carrito
function showCart() {
    cartModal.style.display = 'block';
}

// Cerrar el carrito
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Inicializar el contador del carrito en la carga de la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateCartModal();
});

// Añadir event listeners a los botones de "Ver más"
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        openModal(product);
    });
});

// Cerrar el modal del producto
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal del carrito
closeCart.addEventListener('click', () => {
    closeCartModal();
});

// Mostrar el carrito cuando se haga clic en el ícono del carrito
cartIcon.addEventListener('click', () => {
    showCart();
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    } else if (event.target === cartModal) {
        closeCartModal();
    }
});