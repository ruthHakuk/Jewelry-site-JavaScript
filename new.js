let cartItems = [];
  
function addToCart(index) {
  let product = products[index];

  if (product.stock === 0) {
    console.log("Product is out of stock.");
    return;
  }

  let cartItem = {
    name: product.name,
    price: product.price,
    quantity: 1,
  };

  cartItems.push(cartItem);
  updateCart();
}

function updateCart() {
  let cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item) => {
    let cartItemDiv = document.createElement("div");
    cartItemDiv.innerHTML = `
      <p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price}</p>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;

    cartContainer.appendChild(cartItemDiv);

    totalPrice += item.price * item.quantity;
  });

  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(itemName) {
  cartItems = cartItems.filter((item) => item.name !== itemName);
  updateCart();
}

function showDetails(name, price) {
  const queryString = `name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  const productDetailsURL = `product-details.html?${queryString}`;
//  window.location.href = productDetailsURL;
window.location.href = "productDetails.html";

}

function goToCart() {
  window.location.href = "cart.html";
}
