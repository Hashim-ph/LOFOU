// ==========================
// LOFOU PRODUCTS DATABASE
// ==========================

const products = [

{
    id:1,
    name:"LOFOU Essential Tee",
    price:999,
    image:"images/shirt.jpg",
    category:"T-Shirt",

    description:
    "Premium cotton essential tee designed for everyday comfort and style."
},

{
    id:2,
    name:"LOFOU Oversized Tee",
    price:1199,
    image:"images/oversized.jpg",
    category:"Oversized",

    description:
    "Relaxed oversized fit crafted with heavyweight cotton."
},

{
    id:3,
    name:"LOFOU Premium Basic Tee",
    price:1499,
    image:"images/basics.jpg",
    category:"Basics",

    description:
    "Minimal premium tee made from high-quality fabric."
},

{
    id:4,
    name:"LOFOU Urban Fit Tee",
    price:1099,
    image:"images/arrival.jpg",
    category:"Urban",

    description:
    "Modern urban silhouette with exceptional comfort."
},

{
    id:5,
    name:"LOFOU Black Tee",
    price:1299,
    image:"images/shirt.jpg",
    category:"T-Shirt",

    description:
    "Classic black tee built for versatile styling."
},

{
    id:6,
    name:"LOFOU Signature Tee",
    price:1599,
    image:"images/banner.jpg",
    category:"Signature",

    description:
    "Luxury signature collection piece with premium finishing."
}

];

// ==========================
// GET PRODUCT BY ID
// ==========================

function getProductById(id){

    return products.find(
        product => product.id === Number(id)
    );

}