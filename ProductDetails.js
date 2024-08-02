const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");

const productDetailsContainer = document.getElementById("product-details-container");

const productNameElement = document.createElement("h2");
productNameElement.textContent = productName;
productDetailsContainer.appendChild(productNameElement);

const productPriceElement = document.createElement("p");
productPriceElement.textContent = `Price: $${productPrice}`;
productDetailsContainer.appendChild(productPriceElement);

const quantityInput = document.createElement("input");
quantityInput.type = "number";
quantityInput.min = 1;
quantityInput.value = 1;
productDetailsContainer.appendChild(quantityInput);

const addToCartButton = document.createElement("button");
addToCartButton.textContent = "Add to Cart";
addToCartButton.onclick = function () {
  const quantity = parseInt(quantityInput.value);
  addToCart(productName, parseFloat(productPrice), quantity);
  alert(`${quantity} ${productName}(s) added to cart.`);
};
productDetailsContainer.appendChild(addToCartButton);
