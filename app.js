let shopping = document.querySelector('.shopping');
let quantity = document.querySelector('.quantity');
let productItem = document.querySelector('.product_item');
let price = document.querySelector('.price');
let total = document.querySelector('.total');
let totalMoney = document.querySelector('.totalMoney');
// let listCart = document.querySelector('.listCart');
let heart = document.querySelector('.fa-heart');
let cartSection = document.querySelector('.cart_section');
let cartMain = document.querySelector('.cart_main');
let emptyCart = document.querySelector('.empty_cart');
let main = document.querySelector('main');
let logo = document.querySelector('.logo');
let order = document.querySelector('.order');
let jazzBiteSection = document.querySelector('.jazz_bite_section');


shopping.addEventListener('click', function(){
    cartSection.style.display = 'flex';
    main.style.display = 'none';
    jazzBiteSection.style.display = 'none';

})

logo.addEventListener('click', function(){
    cartSection.style.display = 'none';
    main.style.display = 'flex';
    jazzBiteSection.style.display = 'flex';

})



let products = [
    {
        id: 1,
        name: 'Double Beef Burger',
        images: 'food 1.png',
        price: 10500,
        liked: false,
    },
    {
        id: 2,
        name: 'Single Beef Burger',
        images: 'food 2.png',
        price: 8500,
        liked: false,

    },
    {
        id: 3,
        name: 'Double Crunchy Chicken Burger',
        images: 'food 3.png',
        price: 12000,
        liked: false,

    },
    {
        id: 4,
        name: 'Breakfast Burger',
        images: 'food 4.png',
        price: 5000,
        liked: false,

    },
    {
        id: 5,
        name: 'Grilled Chicken Burger',
        images: 'food 5.png',
        price: 9000,
        liked: false,

    },
    {
        id: 6,
        name: 'Double Grilled Chicken Burger',
        images: 'food 6.png',
        price: 11000,
        liked: false,

    },
]

let prices = [];

let FoodApp = () => {

    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('order1');
        newDiv.innerHTML = `
            <div class="food1">
                <div class="image">
                    <img class="food1_image" src="assets/${value.images}" alt="">
                </div>
    
                <div class="food1_text">
                    <i onclick="like(${key})" id="heart-${key}" class="fa-heart ${value.liked ? 'fa-solid' : 'fa-regular'}" ></i>
                </div>
            </div>
    
            <div class="writing">
                <p id="name">${value.name}</p>
                <p id="price">Total price</p>
                <p id="number">${value.price}</p>
    
                <div class="recipe">
                    <img src="assets/image 1.png" alt="">
                    <img src="assets/image 2.png" alt="">
                    <img src="assets/image 3.png" alt="">
                    <img src="assets/image 4.png" alt="">
                    <img src="assets/image 5.png" alt="">
                </div>
    
                <div class="add_to_cart">
                    <span id="plus"><i class="fa-solid fa-plus"></i></span>
                    <p class="tocart" onclick="addToCart(${key})">Add to Cart</p>
                </div>
            </div>
        `
        productItem.appendChild(newDiv);
    
        
    })


    
}

FoodApp();

function like(key) {
    // Toggle the liked state
    products[key].liked = !products[key].liked;

    // Find the heart icon and update its class
    let heartIcon = document.querySelector(`#heart-${key}`);
    if (products[key].liked) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }
}





function addToCart(key){
    if(prices[key] == null){
        prices[key] = products[key];
        prices[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    price.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    prices.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            cartMain.style.display = 'flex';
            emptyCart.style.display = 'none';
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
                <div class="cart-item">
                
                    <div class="amount">
                        <h5>${value.name}</h5>
                        <div class="bin">
                            <p>${value.price}</p>
                            <p class="close-item" onclick="closeChart(${key}, ${value.quantity})">Cancel</p>
                        </div>
                    </div>
                    <div class="add_minus">
                        <div class="minus">

                            <button id="minus" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                            <div id="one">${value.quantity}</div>
                            <button id="minus" onclick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
                        </div>

                    </div>
                </div>
            `
            price.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    totalMoney.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete prices[key];
        cartMain.style.display = 'none';    
        emptyCart.style.display = 'flex';

    }else{
        prices[key].quantity = quantity;
        prices[key].price = products[key].price * quantity;

    }
    reloadCart();
}

function closeChart(key, quantity) {
    if(quantity == 0) {
        delete prices[key];
        cartMain.style.display = 'none';    
        emptyCart.style.display = 'flex';
    } else {
        delete prices[key];
    }
    reloadCart();
}

// order.addEventListener('click', function() {
//     alert('Order Succesful');
//     cartMain.style.display = 'none';
//     emptyCart.style.display = 'flex';
//     quantity.innerText = 0;

    

// })
