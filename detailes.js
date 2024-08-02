let header = document.createElement('header');
let header2=document.getElementById('header')
// Add content to the header
header.innerHTML = `
<h1>EternalRings</h1>
<nav>
<ul>
<li><a href="HomePage.html">Home</a></li>
<li><a href="#" id="aboutLink">About</a></li>
<li><a href="MainPage.html">to the store</a></li>
</ul>
</nav>
<button id="go-to-cart" onclick="goToCart()"  >Cart</button>
`
header2.appendChild(header);

let main =document.getElementById('main')
let color=sessionStorage.getItem("backgroundColor")
main.style.backgroundColor=color
main.style.fontFamily=sessionStorage.getItem("lettersfont")
main.style.color=sessionStorage.getItem("lettersColor")



let p1 = JSON.parse(sessionStorage.getItem("product"))


let productdiv = document.getElementById("product-details")
productdiv.style.marginLeft = "600px"
let addButton = document.createElement("div");
addButton.textContent = p1.name;
addButton.style.width = "125px";
addButton.style.justifyContent
productdiv.appendChild(addButton);
let imageElement = document.createElement("img");
imageElement.src = "תמונות/" + p1.image;
imageElement.style.height = "250px";
imageElement.style.width = "250px";
productdiv.appendChild(imageElement);


let productPrice = document.createElement("p");
productdiv.style.marginLeft = "550px"
productdiv.style.marginRight = "500px"
productPrice.textContent = `מחיר: ${p1.price}`;
productPrice.style="text-align: center;"
productdiv.appendChild(productPrice);   


let add = document.createElement("button");
    add.textContent = "הוסף לסל";
    add.style.width = "125px";
    add.onclick = function () {
      if (p1.stock === 0) {
        alert("Product is out of stock");
        add.disabled = true
        return;
      }else{
   p1.stock--;
   addToCart(p1);  
    };
}

productdiv.appendChild(add)
function addToCart(p1) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
  for (let j = 0; j < cart.length; j++) {
    if (cart[j].id == p1.id) {
      alert("You already added this product.");
      return; 
    }
  }
  
  cart.push(p1);
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

let back =document.createElement('button')
back.innerHTML="חזרה למוצרים"
back.style.width='100px'
back.style.height='30px'
back.style.marginLeft='500px'
back.onclick=function(){
  window.location='MainPage.html'
}
header.appendChild(back)


function goToCart(){
  window.location='cart.html'

  
    }
