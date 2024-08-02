
function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showImage(currentIndex);
});

showImage(currentIndex);
const cart = [];

function addToCart(product) {
  cart.push(product);
}

function removeFromCart(product) {
  const index = cart.indexOf(product);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function calculateTotal() {
  let total = 0;
  cart.forEach(product => total += product.price);
  return total;
}

function checkout() {
  const total = calculateTotal();
  // Call payment API with total amount
}

addToCart({ name: 'Product 1', price: 10 });
addToCart({ name: 'Product 2', price: 20 });

console.log(cart);
console.log(calculateTotal());
checkout();

