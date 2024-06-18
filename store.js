document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const name = e.target.dataset.name;
            const price = e.target.dataset.price;

            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push({ id, name, price });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Товар добавлен в корзину');
        });
    });
});
