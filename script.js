const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelecto('.cart-items');
let cart = [];

function addToCart(event){
    const button = event.target;
    const dessertItem = button.closest('.dessert-item');
    const title = dessertItem.querySelecto('h4').innerText;
    const price = dessertItem.querySelecto('.price').innerText;

    const item = {
        title: title,
        price: parseFloat(price.replace('$','')),
        quantity: 1
    };

    const existItem = cart.find(cartItem => cartItem.title === item.title);
    if(existItem){
        item.quantity++;
    }
    else{
        cart.push(item);
    }

    updateCart();
}

function updateCart(){
    cartItemsContainer.innerHTML = '';

    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerHTML = '<li> <b>${item.title}</b><br> <span><b>${item.quantity} </b></span> <span>@${item.price} </span>  $${item.price.toFixed(2)} </li>';
    cartItemsContainer.appendChild(cartRow);

}

