
let body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url("./Wedding Ring Photography Tips and Inspiration For You To Try.png")';
body.style.backgroundSize = '100%';

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

function chekExsist(){
    let email=document.getElementsByTagName('input')[0].value
    let passpord=document.getElementsByTagName('input')[1].value
    
///sessionStorage שמירה  ב
    sessionStorage.setItem("email",email)
    sessionStorage.setItem(email,passpord)
 
   ///בדיקה האם המייל כבר קיים
   
   if (localStorage.getItem(email)==null){
   event.preventDefault()
   window.location='./finalform.html'}
    ///בדיקה אם הסיסמא שגויה
    else 
    if(sessionStorage.getItem(email)!=localStorage.getItem(email)){
    event.preventDefault()
    alert("הסיסמא שגויה")}
    
     
    
    else {
    event.preventDefault()
    alert("יש לך כבר חשבון")
        let showstyling = document.getElementById('styling');
        showstyling.removeAttribute('hidden');
        showstyling.style.width = '400px';
        showstyling.style.height = '400px';
        showstyling.style.marginLeft = '400px';
        showstyling.style.position = 'relative';
        showstyling.style.backgroundImage = 'url("./ללא שם.png")';
        showstyling.style.backgroundSize = 'cover';
        showstyling.style.backdropFilter = 'blur(31px)';
        showstyling.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        

let formdiv =document.getElementsByTagName('section')[0]
formdiv.style.display = "none";
let newname = document.createElement('p');
newname.innerHTML = email + " שלום ל";
newname.style.position = "absolute";
newname.style.marginRight = "30px";
newname.style.right = "0";
header.appendChild(newname);

}}


///עיצוב אישי ושמירה
let lettersfont = document.getElementById("font-select");
lettersfont.addEventListener("change", function(event) {
  let selectedValue = event.target.value;
  sessionStorage.setItem("lettersfont", selectedValue);
})

let backgroundColorElement = document.getElementById("background-color");
backgroundColorElement.addEventListener("input", function(event) {
  let backgroundColor = event.target.value;
  sessionStorage.setItem("backgroundColor", backgroundColor);
  console.log(sessionStorage.getItem("backgroundColor"))
})

let lettersColorElement = document.getElementById("letters-color");
lettersColorElement.addEventListener("input", function(event) {
  let lettersColor = event.target.value;
  sessionStorage.setItem("lettersColor", lettersColor);
})
//אודות- דיב צף
document.getElementById('aboutLink').addEventListener('click', function(event) {
  event.preventDefault(); 


  var overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';


  var content = document.createElement('div');
  content.style.backgroundColor = '#fff';
  content.style.padding = '20px';
  content.style.borderRadius = '5px';
  content.style.maxWidth = '600px';


  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.padding = '5px 10px';
  closeButton.style.borderRadius = '5px';
  closeButton.style.backgroundColor = '#ccc';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';


  var text = document.createTextNode("Welcome to EternalRings, where exquisite beauty meets timeless elegance. We pride ourselves on offering a unique and special service that celebrates the artistry and craftsmanship of fine jewelry. Whether you're searching for the perfect engagement ring, a symbol of your enduring love, or a stunning piece to mark a cherished milestone, we are here to make your dreams come true.What sets us apart is our unwavering commitment to creating breathtaking rings that capture the essence of individuality. Our collection boasts an exquisite array of designs meticulously crafted by skilled artisans. Each ring tells a story, intricately woven with passion, precision, and attention to detail.At EternalRings, we understand that a ring holds immense significance. It represents a promise, a connection, and a profound expression of love. That's why we go above and beyond to ensure that our rings are not only visually captivating but also crafted to stand the test of time. We source the finest materials, including ethically-sourced diamonds, gemstones, and precious metals, ensuring both beauty and responsibility. From vintage-inspired classics to modern and innovative designs, our range caters to diverse tastes and preferences. We believe that every person deserves a ring that reflects their unique style and personality, and we take great pleasure in helping you find that perfect match. Our team of knowledgeable experts is here to guide you through the selection process, offering personalized assistance to ensure your journey to finding the ideal ring is both enjoyable and seamless.Thank you for considering [Your Website Name] for your jewelry needs. We are honored to be part of your special moments and look forward to creating a lasting treasure that will be cherished for generations to come.");

  content.appendChild(text);
  content.appendChild(closeButton);
  overlay.appendChild(content);

  document.body.appendChild(overlay);

  closeButton.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
});






