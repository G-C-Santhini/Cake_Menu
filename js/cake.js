

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach((entry, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${entry.item} - $${entry.price}`;  // ✅ Use backticks (` `` `)
        cartList.appendChild(listItem);
    });

    totalPrice.textContent = `Total: $${total}`;  // ✅ Use backticks (` `` `)
}
