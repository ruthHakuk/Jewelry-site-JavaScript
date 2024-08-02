let header = document.createElement('header');
let header2=document.getElementById('header')

header.innerHTML = `
<h1>EternalRings</h1>
<nav>
<ul>
<li><a href="HomePage.html">Home</a></li>
<li><a href="#" id="aboutLink">About</a></li>
<li><a href="MainPage.html">to the store</a></li>
</ul>
</nav>
`
header2.appendChild(header);

let main = document.getElementById('main');
let color = sessionStorage.getItem('backgroundColor');
main.style.backgroundColor = color;
main.style.fontFamily = sessionStorage.getItem('lettersfont');
main.style.color = sessionStorage.getItem('lettersColor');

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
let total = 0;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;
}
let totalprice = document.createElement('h1');
sessionStorage.setItem('finalprice',total)
totalprice.innerHTML='סכום סופי :'+sessionStorage.getItem('finalprice')
main.appendChild(totalprice);


let table = document.createElement('table');
table.style.border = '3px solid pink';
table.style.borderCollapse = 'collapse';
table.style.width = '65%';
table.style.marginLeft = '200px';
table.style.backgroundColor="white"
let thead = document.createElement('thead');
let tr = document.createElement('tr');

let thName = document.createElement('th');
thName.innerHTML = 'Name';
thName.style.border = '1px solid pink';
thName.style.padding = '8px';
tr.appendChild(thName);

let thPrice = document.createElement('th');
thPrice.innerHTML = 'Price';
thPrice.style.border = '1px solid pink';
thPrice.style.padding = '8px';
tr.appendChild(thPrice);

let thImage = document.createElement('th');
thImage.innerHTML = 'Picture';
thImage.style.border = '1px solid pink';
thImage.style.padding = '8px';
thImage.style.width = '70px';
tr.appendChild(thImage);

let thQuantity = document.createElement('th');
thQuantity.innerHTML = 'Quantity';
thQuantity.style.border = '1px solid pink';
thQuantity.style.padding = '8px';
thQuantity.style.width = '100px';
tr.appendChild(thQuantity);

let thAction = document.createElement('th');
thAction.innerHTML = 'Action';
thAction.style.border = '1px solid pink';
thAction.style.width = '100px';
thAction.style.padding = '8px';
tr.appendChild(thAction);

thead.appendChild(tr);
table.appendChild(thead);

let tbody = document.createElement('tbody');

for (let index = 0; index < cart.length; index++) {
  tr = document.createElement('tr');

  let tdName = document.createElement('td');
  tdName.innerHTML = cart[index].name;
  tdName.style.border = '1px solid pink';
  tdName.style.textAlign='center';
  tdName.style.padding = '8px';
  tr.appendChild(tdName);

  let tdPrice = document.createElement('td');
  tdPrice.innerHTML = cart[index].price+"$";
  tdPrice.style.border = '1px solid pink';
  tdPrice.style.textAlign='center';
  tdPrice.style.padding = '8px';
  tr.appendChild(tdPrice);

  let tdImage = document.createElement('td');
  let imageElement = document.createElement('img');
  imageElement.src = 'תמונות/' + cart[index].image;
  imageElement.style.height = '200px';
  imageElement.style.width = '200px';

  tdImage.appendChild(imageElement);
  tdImage.style.border = '1px solid pink';
  tdImage.style.padding = '8px';
  tr.appendChild(tdImage);

  let tdQuantity = document.createElement('td');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 1;
  quantityInput.min = 1;
  quantityInput.max = cart[index].stock;
  quantityInput.style.width = '35px';
  tdQuantity.appendChild(quantityInput);
  quantityInput.oninput = function () {
    updateFinalPrice(this.value, cart[index].price, index);
  };
  


  tdQuantity.style.border = '1px solid pink';
  tdQuantity.style.padding = '8px';
  tr.appendChild(tdQuantity);

  let tdAction = document.createElement('td');
  let removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', function () {
    removeProduct(index);
  });
  tdAction.appendChild(removeButton);
  tdAction.style.border = '1px solid pink';
  tdAction.style.padding = '8px';
  tr.appendChild(tdAction);

  tbody.appendChild(tr);
}

table.appendChild(tbody);
main.appendChild(table);

function removeProduct(index) {
  cart.splice(index, 1);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
 let p= sessionStorage.getItem("toti")
 p--
 sessionStorage.setItem("toti",p)

}

function updateFinalPrice(quantity, price, index) {
  let prevQuantity = cart[index].quantity;
  let totalPrice = quantity * price;
  total -= cart[index].price * prevQuantity;
  total += totalPrice;
  cart[index].quantity = quantity;
  cart[index].stock -= quantity - prevQuantity;

  sessionStorage.setItem('totalprice', total);

  let tdPrice = document.createElement('td');
  tdPrice.innerHTML = totalPrice;
  tdPrice.style.border = '1px solid pink';
  tdPrice.style.padding = '8px';
  tdPrice.style.textAlign='center'
  tdPrice.id = 'tdPrice' + index;

  let tr = table.getElementsByTagName('tr')[index + 1];
  tr.replaceChild(tdPrice, tr.childNodes[1]);

  if (cart[index].stock < 0) {
    alert('Product is out of stock!');
  }

  let totalPriceFromCells = 0;
  let tdPriceElements = document.querySelectorAll('td:nth-child(2)'); // Select all <td> elements in the 2nd column
  tdPriceElements.forEach(function (tdPriceElement) {
    totalPriceFromCells += parseInt(tdPriceElement.innerHTML); // Sum up the prices from all cells
  });

  totalprice.innerHTML = 'סכום סופי: ' + totalPriceFromCells;
  sessionStorage.setItem('finalprice', totalPriceFromCells);
}

let finish=document.createElement ('button')
finish.style.height="30px"
finish.style.width="100px"
finish.innerHTML="לתשלום"
finish.style.marginBottom="20px"
finish.style.marginTop="20px"
finish.style.marginLeft="550px"
main.appendChild(finish)
finish.onclick=function(){
  window.location="pay.html"
}