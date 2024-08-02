let header2=document.getElementById('header')

   let header = document.createElement('header');

   header.innerHTML = `
   <h1>EternalRings</h1>
   <nav>
   <ul>
   <li><a href="HomePage.html">Home</a></li>
   <li><a href="HomePage.html">About</a></li>
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
  let carttotal=document.getElementById("go-to-cart");
  carttotal.innerHTML="cart"+" "+sessionStorage.getItem("toti")
  carttotal.style.height="30px"
  carttotal.style.width="100px"

  //  let totalP=document.getElementById("total-price")
let total=1;
let toti=0;
let totalprice=0;
///מערך  אובייקטים של המוצרים
let products = [
    { id:1,name: "silver ring", price: 1000, stock: 3, image: "טבעת 2.jpg" },
    {id:2, name: "green ring", price: 1050, stock: 1, image: "טבעת 3.jpg" },
    { id:3,name: "gold line", price: 850, stock: 26, image: "טבעת 4.jpg" },
    { id:4,name: "gold & green", price: 1100, stock: 26, image: "טבעת 5.jpg" },
    { id:5,name: "diamond ring", price: 740, stock: 9, image: "טבעת 6.jpg" },
    { id:6,name: "silver plaiting", price: 1500, stock: 26, image: "טבעת 7.jpg" },
    { id:7,name: "huge gold", price: 1600, stock: 26, image: "טבעת 8.jpg" },
    { id:8,name: "a silver drop", price: 1050, stock: 26, image: "טבעת 9.jpg" },
    { id:9,name: "blue combinaition", price: 900, stock: 26, image: "טבעת 10.jpg" },
    { id:10,name: "interlaced gold", price: 780, stock: 26, image: "טבעת 11.jpg" },
    { id:11,name: "minute silver ring", price: 1300, stock: 26, image: "טבעת 12.jpg" },
    { id:12,name: "turquoise diamond", price: 1150, stock: 26, image: "טבעת 13.jpg" },
    { id:13,name: "golden dots", price: 670, stock: 26, image: "טבעת 14.jpg" },
    {id:14, name: "gold spiral", price: 999, stock: 26, image: "טבעת 15.jpg" },
    { id:15,name: "golden rectangle", price: 1200, stock: 26, image: "טבעת.jpg" },
  ];
  
//תפיסת משתנים שנשתמש בהם במשך
  let productList = document.getElementById("productList");
  let productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  
  let numProducts = products.length;
  ///יצירת של תמונת המוצר עם שתי כפתורים בשזמן ריצה
  for (let i = 0; i < numProducts; i++) {
    let product = products[i];
    if (i % 3 === 0) {
      let row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
     // row.style.marginBottom = "30px";
      row.style.marginRight= "80px";
      row.style.marginLeft= "80px";
      productsContainer.appendChild(row);
    }
    let productDiv = document.createElement("div");
    let imageElement = document.createElement("img");
    imageElement.src = "תמונות/" +product.image;
    imageElement.style.height = "250px";
    imageElement.style.width = "250px";
    imageElement.setAttribute('id', 'img' + i);


    productDiv.appendChild(imageElement);

    let productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.style="text-align: center;"
    productDiv.appendChild(productName);
  
    let productPrice = document.createElement("p");
   productPrice.textContent = "מחיר:"+product.price
    productPrice.style="text-align: center;"
    productDiv.appendChild(productPrice);        
  
    let addButton = document.createElement("button");
    addButton.textContent = "הוסף לסל";
    addButton.style.width = "125px";
    addButton.style.marginBottom="62px"
    addButton.onclick = function () {
      if (product.stock === 0) {
        alert("Product is out of stock");
        addButton.disabled = true
        return;
      }else{
        
      
      addToCart(i);
    
    }
    };
 
    productDiv.appendChild(addButton);
  
    let detailsButton = document.createElement("button");
    detailsButton.textContent = "לפרטים";
    detailsButton.style.width = "125px";
    detailsButton.onclick = function () {
      let p=JSON.stringify(products[i])   
      sessionStorage.setItem("product",p)
      window.location='detailes.html'
    };
    productDiv.appendChild(detailsButton);
  
    let rowContainers = productsContainer.children;
    let lastRowContainer = rowContainers[rowContainers.length - 1];
    lastRowContainer.appendChild(productDiv);
    
  }
  
  productList.appendChild(productsContainer);

  
  function addToCart(i) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    
    for (let j = 0; j < cart.length; j++) {
      if (cart[j].id == products[i].id) {
        alert("You already added this product.");
        return; 
      }
    }

    toti++
sessionStorage.setItem("toti",toti)
carttotal.innerHTML="cart"+" "+toti
products[i].stock--;
    alert("מוצר נוסף בהצלחה")
    cart.push(products[i]);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  

  function goToCart(){
window.location='cart.html'
  }

 

