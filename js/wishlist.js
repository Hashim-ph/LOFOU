// ==========================
// LOFOU WISHLIST SYSTEM
// ==========================

// Get Wishlist

function getWishlist(){

    return JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

}

// Save Wishlist

function saveWishlist(wishlist){

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}

// ==========================
// ADD TO WISHLIST
// ==========================

function addToWishlist(productId){

    const product =
        getProductById(productId);

    if(!product){
        return;
    }

    let wishlist =
        getWishlist();

    const exists =
        wishlist.find(
            item => item.id === productId
        );

    if(exists){

        alert("Already in wishlist");
        return;

    }

    wishlist.push(product);

    saveWishlist(wishlist);

    updateWishlistCount();

    alert(product.name + " added to wishlist");

}

// ==========================
// REMOVE FROM WISHLIST
// ==========================

function removeFromWishlist(productId){

    let wishlist =
        getWishlist();

    wishlist =
        wishlist.filter(
            item => item.id !== productId
        );

    saveWishlist(wishlist);

    updateWishlistCount();

    renderWishlist();

}

// ==========================
// WISHLIST COUNT
// ==========================

function updateWishlistCount(){

    const wishlist =
        getWishlist();

    const count =
        wishlist.length;

    const wishlistCounter =
        document.getElementById(
            "wishlistCount"
        );

    if(wishlistCounter){

        wishlistCounter.innerText = count;

    }

}

// ==========================
// RENDER WISHLIST PAGE
// ==========================

function renderWishlist(){

    const wishlistContainer =
        document.getElementById(
            "wishlistItems"
        );

    if(!wishlistContainer){
        return;
    }

    const wishlist =
        getWishlist();

    if(wishlist.length === 0){

        wishlistContainer.innerHTML = `
            <h2>Your Wishlist Is Empty</h2>
        `;

        return;
    }

    wishlistContainer.innerHTML = "";

    wishlist.forEach(item => {

        wishlistContainer.innerHTML += `

        <div class="wishlist-item">

            <img
                src="${item.image}"
                width="120"
            >

            <div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ₹${item.price}
                </p>

                <br>

                <button
                    onclick="addToCart(${item.id})"
                >
                    Add To Cart
                </button>

                <button
                    onclick="removeFromWishlist(${item.id})"
                >
                    Remove
                </button>

            </div>

        </div>

        <hr><br>

        `;

    });

}

// ==========================
// INITIALIZE
// ==========================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateWishlistCount();

        if(
            document.getElementById(
                "wishlistItems"
            )
        ){

            renderWishlist();

        }

    }
);