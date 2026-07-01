// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentDate = new Date();
let selectedDate = null;

// Product data
const products = {
    1: { id: 1, name: 'Adaptación Polea Recta SportFitness 071126', price: 119900, image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400' },
    2: { id: 2, name: 'Balaca Everlast', price: 15000, image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400' },
    3: { id: 3, name: 'Balón Baloncesto Golty Super Team N7', price: 71900, image: 'https://images.pexels.com/photos/1544775/pexels-photo-1544775.jpeg?auto=compress&cs=tinysrgb&w=400' },
    4: { id: 4, name: 'Adaptación Lazo Triceps Tipo SportFitness 071631', price: 22800, image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400' },
    5: { id: 5, name: 'Guantes Deportivos GripFit', price: 83000, image: 'https://images.pexels.com/photos/4162552/pexels-photo-4162552.jpeg?auto=compress&cs=tinysrgb&w=400' },
    6: { id: 6, name: 'Top Deportivo Essential Black', price: 119900, image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400' },
    7: { id: 7, name: 'Bolso de Gimnasio UrbanStyle', price: 150900, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400' },
    8: { id: 8, name: 'Falda Deportiva Tennis Chic', price: 89900, image: 'https://images.pexels.com/photos/6740747/pexels-photo-6740747.jpeg?auto=compress&cs=tinysrgb&w=400' },
    9: { id: 9, name: 'Medias de Yoga BareFlex', price: 85990, image: 'https://images.pexels.com/photos/6740726/pexels-photo-6740726.jpeg?auto=compress&cs=tinysrgb&w=400' },
    10: { id: 10, name: 'Conjunto Deportivo WhiteMotion', price: 145900, image: 'https://images.pexels.com/photos/6740812/pexels-photo-6740812.jpeg?auto=compress&cs=tinysrgb&w=400' },
    11: { id: 11, name: 'Camiseta Sin Mangas Performance White', price: 129900, image: 'https://images.pexels.com/photos/6740758/pexels-photo-6740758.jpeg?auto=compress&cs=tinysrgb&w=400' },
    12: { id: 12, name: 'Banda Elástica de Resistencia ProBand', price: 83000, image: 'https://images.pexels.com/photos/4162552/pexels-photo-4162552.jpeg?auto=compress&cs=tinysrgb&w=400' },
    13: { id: 13, name: 'Leggings Compresivos PowerFit Gris', price: 79900, image: 'https://images.pexels.com/photos/6740774/pexels-photo-6740774.jpeg?auto=compress&cs=tinysrgb&w=400' },
    14: { id: 14, name: 'Camiseta Sin Mangas Urban Hoodie', price: 119900, image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400' },
    15: { id: 15, name: 'Bolso Deportivo CoreGear Gris/Amarillo', price: 190900, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400' }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initializeEventListeners();
    
    // Initialize page-specific functionality
    if (document.querySelector('.checkout-page')) {
        initializeCheckout();
    }
    
    if (document.querySelector('.calendar-container')) {
        initializeCalendar();
    }
});

// Event listeners
function initializeEventListeners() {
    // Cart icon click
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

    // Favorite buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-btn')) {
            toggleFavorite(e.target);
        }
    });

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productCard = e.target.closest('[data-id]');
            if (productCard) {
                const productId = parseInt(productCard.dataset.id);
                addToCart(productId);
            }
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Basic search functionality - can be expanded
            console.log('Searching for:', this.value);
        });
    }
}

// Cart functionality
function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    showNotification('Producto agregado al carrito');
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Favorites functionality
function toggleFavorite(button) {
    const productCard = button.closest('[data-id]');
    if (!productCard) return;
    
    const productId = parseInt(productCard.dataset.id);
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        button.classList.remove('active');
        button.textContent = '♡';
    } else {
        favorites.push(productId);
        button.classList.add('active');
        button.textContent = '♥';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Checkout functionality
function initializeCheckout() {
    displayCartItems();
    
    const buyNowBtn = document.getElementById('buyNowBtn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', processPurchase);
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito</p>';
        return;
    }

    let total = 0;
    let itemsHTML = '';

    cart.forEach(item => {
        total += item.price * item.quantity;
        itemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">Cantidad: ${item.quantity}</div>
                </div>
            </div>
        `;
    });

    itemsHTML += `
        <div class="cart-total">
            <h3>Total: $${total.toLocaleString()}</h3>
        </div>
    `;

    cartItemsContainer.innerHTML = itemsHTML;
}

function processPurchase() {
    // Validate form
    const requiredFields = ['nombre', 'telefono', 'email', 'ciudad', 'departamento', 'direccion'];
    let isValid = true;

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#dc3545';
        } else if (field) {
            field.style.borderColor = '';
        }
    });

    if (!isValid) {
        showNotification('Por favor complete todos los campos requeridos', 'error');
        return;
    }

    if (!selectedDate) {
        showNotification('Por favor seleccione una fecha de entrega', 'error');
        return;
    }

    // Process purchase
    showNotification('¡Compra realizada con éxito! Gracias por tu compra.');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to home page after a delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Calendar functionality
function initializeCalendar() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    
    if (prevBtn) prevBtn.addEventListener('click', () => changeMonth(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeMonth(1));
    
    renderCalendar();
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

function renderCalendar() {
    const calendarTitle = document.getElementById('calendarTitle');
    const calendarGrid = document.querySelector('.calendar-grid');
    
    if (!calendarTitle || !calendarGrid) return;

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    calendarTitle.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Clear existing days (keep headers)
    const existingDays = calendarGrid.querySelectorAll('.calendar-day');
    existingDays.forEach(day => day.remove());

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startingDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day disabled';
        calendarGrid.appendChild(emptyDay);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        dayElement.addEventListener('click', () => selectDate(day));
        
        // Check if this day is selected
        if (selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()) {
            dayElement.classList.add('selected');
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function selectDate(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    // Update the date input
    const fechaInput = document.getElementById('fechaSeleccionada');
    if (fechaInput) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        fechaInput.value = selectedDate.toLocaleDateString('es-ES', options);
    }
    
    // Re-render calendar to show selection
    renderCalendar();
}

// Utility functions
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        backgroundColor: type === 'error' ? '#dc3545' : '#28a745',
        color: 'white',
        borderRadius: '5px',
        zIndex: '1000',
        fontSize: '14px',
        fontWeight: 'bold'
    });
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Format price function
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}