//יצירת אובייקטים
//משתנה המאגד בתוכו כמה מאפיינים
//שתי דרכים ליצירת אובייקטים:
//1. בעזרת יזמים:
let p1={
    code:12,
    name:"computer",
    price:1000
}
let p2={
    code:15,
    name:"laptop",
    price:2000 
}
let p3={
    Code:16,
    NameC:"laptop",
    Price:2000 
}
//גישה למאפיינים
//הדפסת שם המחשב ומחירו:
console.log(p1.name+"   "+p1.price)
//דרך נוספת לגישה למאפיינים
console.log(p2["name"]+"   "+p2["price"])
// שינוי המחיר
p2.price=1500

//מערך המכיל אובייקטים
let allC=[p1,p2,p3]
//הדפסת השם והמחיר
for (let index = 0; index < allC.length; index++) {
    console.log(allC[index]["name"]+"   "+allC[index].price)

}

//אם במערכת יש הרבה משתנים שהמבנה של האוביקט שלהם זהה
//2.  ניתן ליצור באמצעות פונקציית בנאי 
function Comp(code, name, price)
{
    this.codeC=code
    this.nameC=name
    this.price=price
}

//שימוש בפונקציית בנאי
//new יש להקדים 
let p4=new Comp(100,"copmDel",5000)
let p5=new Comp(101,"copmLenovo",5000)
let p6=new Comp(102,"copmLenovo",800)
let p7=new Comp(103,"copmLenovo",3500)
let p8=new Comp(104,"copmLenovo",5000)
let p9=new Comp(105,"copmLenovo",1500)
let computers=[p4,p5,p6,p7,p8,p9]
//יצירת טבלה על המסך עם פרטי כל המחשבים
let t=document.createElement('table')
t.style.border="3px solid pink"
document.body.appendChild(t);
let tr=document.createElement('tr')
// let th1=document.createElement('th')
// th1.innerHTML="codeC"
// let th2=document.createElement('th')
// th2.innerHTML="nameC"
// let th3=document.createElement('th')
// th3.innerHTML="price"

// tr.appendChild(th1)
// tr.appendChild(th2)
// tr.appendChild(th3)
 t.appendChild(tr)

//לולאה שעוברת על מאפייני האובייקט
//נגדיר משתנה בתוך הלולאה
//ובשונה מלולאה רגילה שרצה על אינדקס
//המשתנה שהוגדר יכיל בתוכו את כל המאפיין - שם המאפיין

//הלולאה לא צריכה לקבל תנאי עצירה ולא קידום
//היא עוברת לבד עד שאין לה לאן להתקדם
for(let th in computers[0])
{
    let th1=document.createElement('th')
    th1.innerHTML=th
    th1.style.border="1px solid pink"
    tr.appendChild(th1)
}

//מעבר על כל המחשבים
//והצגתם
for (let index = 0; index < computers.length; index++) {
   tr=document.createElement('tr')
   //כדי ליצור 3 עמודות 
   for(let item in computers[index])
   {
       let td=document.createElement('td')
      td.innerHTML=computers[index][item]
       td.style.border="1px solid pink"
       tr.appendChild(td)
   }
   t.appendChild(tr)
}

//storage - כדי לשמור משתנים ב
//json יש להמיר את המשתנה ל
//JSON.stringify - המרת אובייקט למחרוזת
console.log(p1);
let j=JSON.stringify(p1)
console.log(j);

//המרה הפוכה
//מjson
//לאובייקט
//מתי נשתמש?
//storage כשנשלוף מה 
// JSON.parse - המרה מJSON
let newp=JSON.parse(j)
console.log(newp);

//ניתן להמיר גם מערכים
let arrJ=JSON.stringify(computers)
console.log(arrJ);