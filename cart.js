document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    const finalPriceElement = document.querySelector('.final-price');
    const deliveryPrice = 500; // Примерная стоимость доставки

    function updateCartTotal() {
        let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        totalPriceElement.textContent = `${totalPrice} ₸`;
        finalPriceElement.textContent = `${totalPrice + deliveryPrice} ₸`;
    }

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="product-info">
                    <h2>${item.name}</h2>
                    <p class="price">${item.price} ₸</p>
                </div>
                <div class="product-quantity">
                    <label for="quantity-${item.id}">Количество:</label>
                    <input type="number" id="quantity-${item.id}" min="1" value="${item.quantity}">
                </div>
            `;
            cartContainer.appendChild(productDiv);

            const quantityInput = productDiv.querySelector(`#quantity-${item.id}`);
            quantityInput.addEventListener('change', (event) => {
                const newQuantity = parseInt(event.target.value);
                item.quantity = newQuantity;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartTotal();
            });
        });
    } else {
        const emptyMessage = document.querySelector('.bnb');
        emptyMessage.style.display = 'block';
    }

    updateCartTotal();
});
