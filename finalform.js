document.body.style.backgroundImage = 'url("./Wedding Photography Contests - Spring 2016 Results.jpeg")';
document.body.style.backgroundSize = '100%';
//אותיות
function chekName(){
    let name=event.keyCode
    if(name>=97&&name<=122)
        console.log("good")
    else 
       {event.preventDefault()
        alert("שם לא תקין- הכנס רק אותיות")}
 }
 //ספרות
 function chekPhone(){
     let phone=event.keyCode
     if(phone>=48&&phone<=57)
        console.log("תקין")
     else
       {event.preventDefault()
         alert("הכנס רק מספרים")}
 }
 ///שמירה
 let Email=document.getElementById('email')  
 Email.value=sessionStorage.getItem("email") 
 let password=document.getElementById('password')  
 password.value=sessionStorage.getItem(Email.value);
 
 function chekAll(){
   /// בדיקה שכל הטופס מלא
     let fullName=document.getElementById('name').value
     if(fullName==""){
        event.preventDefault()
        alert('הכנס שם')
        fullName.focus()}
   let fullEmail=Email.value
     if(fullEmail==""){
           event.preventDefault()
           alert('הכנס אימייל')}

     let fullPhone=document.getElementById('phone').value
     if(fullPhone.length!=10){
         event.preventDefault()
         alert('מספר לא תקין')}

         let fullTz=document.getElementById('tz').value
         if(fullTz.length!=9){
         alert('תעודת הזהות אינה תקינה')
             event.preventDefault()}

     let fullPass=document.getElementById('password').value
     if(fullPass.length<3&&fullPass.length>10)
         event.preventDefault()
         else 
         {
           let letter=0,num=0
           for (let index = 0; index < fullPass.length; index++) {
   
            if(fullPass.charCodeAt(index)>=97 && fullPass.charCodeAt(index)<=122)
            letter=1

            if(fullPass.charCodeAt(index)>=48&&fullPass.charCodeAt(index)<=57)
            num=1
             } 
            if(letter==0){
              event.preventDefault()  
              alert('לסיסמה הכנס אות באנגלית')}
              if(num==0){
                 event.preventDefault()  
                 alert('הכנס לפחות ספרה אחת')}
        
         }
   sessionStorage.setItem('name',fullName)
   localStorage.setItem(fullEmail,fullPass)   
 }