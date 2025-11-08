
const sendBtn = document.getElementById("sendBtn")
const erreur = document.getElementById("erreur")
const myForm = document.getElementById("myForm");
const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const msgName = document.getElementById("msgName");
const msgEmail = document.getElementById("msgEmail");
const msgText = document.getElementById("msgText");


sendBtn.addEventListener("click", function validationForm() {

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const msgInput = document.getElementById("msgInput");
    let isValide=true;

    if(nameInput.value==""){
        msgName.innerHTML="You have to enter your name"
        msgName.style.color="red"
        isValide=false;
    }else{
        msgName.innerHTML=""
    }    
    

    if (emailInput.value==""){
       msgEmail.textContent="you have to enter your emali adress"
       msgEmail.style.color="red"
       isValide=false;

    }else if (emailRegex.test(emailInput.value)==true){
        msgEmail.textContent=""

    }else if (emailRegex.test(emailInput.value)==false){
        msgEmail.textContent="Email invalid"
        msgEmail.style.color="red"
        isValide=false;
    }


    if(msgInput.value==""){
        msgText.innerHTML="you have to enter your message"
        msgText.style.color="red"
        isValide=false;
    }else{
        msgText.innerHTML=""
    }
    

    if(isValide){
        // erreur.innerHTML = "Your form submission was successful!";
        erreur.style.color = "green";
        nameInput.value=""
        emailInput.value=""
        msgInput.value=""
        alert("Your form submission was successful!");
    }else{
       erreur.innerHTML="" 
    }



});

