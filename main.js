// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart =  document.querySelector(".cart-new");
let closeCart =  document.querySelector("#tutup-x");

//open
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close
closeCart.onclick = () => {
    cart.classList.remove("active");
}


//-----------//

//cart working

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready();
}

//making function

function ready(){
    //remove items cart
    var removeCartButton = document.getElementsByClassName("fa-trash")
    for (var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener("click", removeCartItem)
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // add to cart
    var addCart = document.getElementsByClassName("fa-cart-shopping")
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    //buy button work
    document
    .getElementsByClassName("btn-beli")[0]
    .addEventListener("click", buyButtonClicked);
}
//buy button
function buyButtonClicked(){
    
    var cartContent = document.getElementsByClassName("cart-konten")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}


//remove items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal()
}

//add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("chart-0").innerText;
    var price = shopProducts.getElementsByClassName("chart-1").innerText;
    var productImg = shopProducts.getElementsByClassName("dog1").src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-bok");
    var cartItem = document.getElementsByClassName("cart-konten")[0];
    var cartItemNames = cartItem.getElementsByClassName("cart-product-judul")
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
        alert("Kamu sudah menambahkan produk ini ke keranjang");
        return;
    }
}
var cartBoxContent = `
                <img src="dog.png" alt="" class="dogimej">
                <div class="detail-bok">
                    <div class="cart-product-judul">Cuties Dog</div>
                    <div class="cart-harga">Rp50000</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- remove cart-->
                <i class="fa-solid fa-trash"></i>`
cartShopBox.innerHTML = cartBoxContent
cartItem.append(cartShopBox)
cartShopBox
.getElementsByClassName("fa-trash")[0]
.addEventListener("click", removeCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change", quantityChanged);  
}              


//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-konten")[0]
    var cartBoxes = cartContent.getElementsByClassName("cart-bok")
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName("cart-harga")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("Rp", ""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);
    }
        //if decimal number
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-harga")[0].innerText = "Rp" + total;
    
}


