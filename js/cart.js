// ==========================
// LOFOU CART SYSTEM
// ==========================

// Get Cart

function getCart(){

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}

// Save Cart

function saveCart(cart){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

// ==========================
// ADD TO CART
// ==========================

function addToCart(productId){

    const product = getProductById(productId);

    if(!product){
        return;
    }

    let cart = getCart();

    const existingProduct =
        cart.find(item => item.id === productId);

    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cart.push({
            ...product,
            quantity:1
        });

    }

    saveCart(cart);

    updateCartCount();

    alert(product.name + " added to cart");

}

// ==========================
// REMOVE FROM CART
// ==========================

function removeFromCart(productId){

    let cart = getCart();

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart(cart);

    updateCartCount();

    renderCart();

}

// ==========================
// UPDATE QUANTITY
// ==========================

function increaseQty(productId){

    let cart = getCart();

    const product =
        cart.find(item => item.id === productId);

    if(product){

        product.quantity++;

    }

    saveCart(cart);

    renderCart();

    updateCartCount();

}

function decreaseQty(productId){

    let cart = getCart();

    const product =
        cart.find(item => item.id === productId);

    if(product){

        if(product.quantity > 1){

            product.quantity--;

        }

    }

    saveCart(cart);

    renderCart();

    updateCartCount();

}

// ==========================
// CART COUNT
// ==========================

function updateCartCount(){

    const cart = getCart();

    const totalItems =
        cart.reduce(
            (sum,item) => sum + item.quantity,
            0
        );

    const cartCount =
        document.getElementById("cartCount");

    if(cartCount){

        cartCount.innerText = totalItems;

    }

}

// ==========================
// CART TOTAL
// ==========================

function calculateCartTotal(){

    const cart = getCart();

    return cart.reduce(
        (total,item)=>
        total + (item.price * item.quantity),
        0
    );

}

// ==========================
// RENDER CART PAGE
// ==========================

function renderCart(){

    const cartContainer =
        document.getElementById("cartItems");

    const totalContainer =
        document.getElementById("cartTotal");

    if(!cartContainer){
        return;
    }

    const cart = getCart();

    if(cart.length === 0){

        cartContainer.innerHTML = `
            <h2>Your Cart Is Empty</h2>
        `;

        if(totalContainer){

            totalContainer.innerHTML = "₹0";

        }

        return;
    }

    cartContainer.innerHTML = "";

    cart.forEach(item => {

        cartContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}"
                 width="120">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <div>

                    <button onclick="decreaseQty(${item.id})">
                    -
                    </button>

                    <span>
                    ${item.quantity}
                    </span>

                    <button onclick="increaseQty(${item.id})">
                    +
                    </button>

                </div>

                <br>

                <button onclick="removeFromCart(${item.id})">
                    Remove
                </button>

            </div>

        </div>

        <hr><br>

        `;

    });

    if(totalContainer){

        totalContainer.innerHTML =
        "₹" + calculateCartTotal();

    }

}

// ==========================
// INITIALIZE
// ==========================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateCartCount();

        if(
            document.getElementById("cartItems")
        ){

            renderCart();

        }

    }
);