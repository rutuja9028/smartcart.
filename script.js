let cart = 0;
let wishlist = 0;

// LOGIN
function login(){
    let u = document.getElementById("username").value.trim();
    let p = document.getElementById("password").value.trim();

    if(u === "admin" && p === "1234"){
        document.getElementById("login-box").style.display = "none";
        document.getElementById("main").style.display = "block";

        document.getElementById("welcome").innerText = "Welcome to SmartCart 👋";
        loadProducts();
    } else {
        document.getElementById("error").innerText = "Invalid username or password!";
    }
}

// PRODUCTS (ALL WORKING IMAGES)
let products = [

{name:"Sony Headphones", price:80, img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80"},

{name:"HP Laptop", price:900, img:"https://5.imimg.com/data5/ST/TY/JD/SELLER-55320671/hp-pavilion-15-laptop-500x500.jpg"},

{name:"iPhone Smartphone", price:700, img:"https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__en-in_1.jpg"},

{name:"Apple Smart Watch", price:120, img:"https://shoppingvelleys.com/wp-content/uploads/2023/05/WhatsApp-Image-2024-11-17-at-13.15.33.jpeg"},

{name:"Logitech Gaming Mouse", price:40, img:"https://www.power-x.in/cdn/shop/files/Front.jpg?v=1737709078&width=3000"},

{name:"Mechanical Keyboard", price:50, img:"https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg"},

{name:"Bluetooth Speaker", price:70, img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"},

{name:"Gaming Headset", price:90, img:"https://compumise.in/wp-content/uploads/2023/03/pro-headset-gallery-1-2.webp"},

{name:"Tablet", price:400, img:"https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/global/products/tablets/tcl-nxtpaper-14/id/1.png?t=1721272443153&w=800&webp=undefined&dpr=2.625&rendition=1068"},

{name:"DSLR Camera", price:1000, img:"https://x.imastudent.com/content/0003893_canon-eos-77d-dslr-camera-with-18-135mm-usm-lens-kit_500.jpeg"},

{name:"Power Bank", price:30, img:"https://t4.ftcdn.net/jpg/02/63/65/65/360_F_263656507_44N8Ake55HabfblNMW1f6JqdEbsQrX9l.jpg"},

{name:"VR Headset", price:300, img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&q=80"}

];

// LOAD PRODUCTS
function loadProducts(){
    let container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <div class="actions">
                <button onclick="addCart()">Add to Cart</button>
                <button onclick="addWish()">❤️</button>
            </div>
        </div>
        `;
    });
}

// CART
function addCart(){
    cart++;
    document.getElementById("cart-count").innerText = cart;
}

// WISHLIST
function addWish(){
    wishlist++;
    document.getElementById("wish-count").innerText = wishlist;
}

// SEARCH
function searchProduct(){
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });  
}   
