function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("form");

const firstName  = document.getElementById ('first');
const lastName  = document.getElementById ('last');
const eMail  = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const tournoi = document.getElementById ('quantity');
const checkbox1 = document.getElementById ('checkbox1');
const location1 = document.getElementsByName("location");
const numbers = /^[0-9]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function Close() {
  modalbg.style.display='none';
}

//DOM Elements message vérifiation
const veriffirst  = document.getElementById ('veriffirst');
const veriflast  = document.getElementById ('veriflast');
const verifemail  = document.getElementById ('verifemail');
const verifbirthdate  = document.getElementById ('verifbirthdate');
const verifquantity  = document.getElementById ('verifquantity');
const veriflocation  = document.getElementById ('veriflocation');
const verifcheckbox1  = document.getElementById ('verifcheckbox1');

const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");
const submitBtn = document.querySelector(".btn-submit");

closeBtnRed.style.display = "none";
confirmationMsg.style.display = "none";
form.addEventListener("submit", msgvalidate);

var verifiation = false;
// fonction de la validation des champs du formulaire
function validate () {

  if (firstName.value !== null && firstName.value.length < 2) {
    veriffirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    firstName.style.borderColor = "red";
    firstName.style.borderWidth = "2px";
    return verifiation = false;
  } 
  else{
    firstName.style.border= "none";
    veriffirst.style.display = "none";
  };


  if (lastName.value !== null && lastName.value.length < 2) { 
    veriflast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    lastName.style.borderColor = "red";
    lastName.style.borderWidth = "2px";
    return verifiation = false;
  }
  else
  {
    lastName.style.border= "none";
    veriflast.style.display = "none";
  };


  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    verifemail.innerHTML = "Veuillez remplir le champ email";
    eMail.style.borderColor = "red";
    eMail.style.borderWidth = "2px";
    return verifiation = false;
  }
  else
  {
    eMail.style.border= "none";
    verifemail.style.display = "none"; 
  };


  if(!birthdate.value) {
    verifbirthdate.innerHTML = "Veuillez entrer votre date de naissance";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return verifiation = false;
  } 
  else
  {
    birthdate.style.border= "none";
    verifbirthdate.style.display = "none"; 
  };


  if (!tournoi.value.match(numbers)) {
    verifquantity.innerHTML = "Veuillez indiquer le nombre de tournois";
    tournoi.style.borderColor = "red";
    tournoi.style.borderWidth = "2px"; 
    return verifiation = false;
  }
  else
  {
    tournoi.style.border= "none";
    verifquantity.style.display = "none"; 
  };


  if (!location1[0].checked && !location1[1].checked && !location1[2].checked && !location1[3].checked && !location1[4].checked && !location1[5].checked) { 
    veriflocation.innerHTML = "Veuillez choisir une ville";
    return verifiation = false;
  }
  else
  {
    veriflocation.style.display = "none"; 
  };


  if (!checkbox1.checked) { 
    verifcheckbox1.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return verifiation = false;
  }
  else
  {
    verifcheckbox1.style.display = "none"; 
  }
  
  return verifiation = true;
} 

// fonction qui permet l'affichage de la confirmation 
function msgvalidate(submit){

  // évite le comportement par défaut du bouton submit
  submit.preventDefault();
  // run la fonction validate 
  validate();
    // si la condition est vraie alors elle affiche le message
    if(verifiation === true) {
      form.style.display = "none"; 
      confirmationMsg.style.fontSize = "36px";
      confirmationMsg.style.textAlign = "center";
      confirmationMsg.style.marginTop = "50%";
      confirmationMsg.style.display = "block";
      
      submitBtn.style.display = "none";
      closeBtnRed.style.display = "block";
      closeBtnRed.style.marginTop = "80%";
      closeBtnRed.addEventListener("click", Close);
      return true;
    }
  };

//focus
firstName.onblur = messagefirstName;
function messagefirstName() {
  if (firstName.value !== null && firstName.value.length < 2) {
    veriffirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    firstName.style.borderColor = "red";
    firstName.style.borderWidth = "2px";
    return false;
  } else{
    firstName.style.border= "none";
    veriffirst.style.display = "none";
  };
}

lastName.onblur = messagelastName;
function messagelastName() {
  if (lastName.value !== null && lastName.value.length < 2) {
    veriflast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    lastName.style.borderColor = "red";
    lastName.style.borderWidth = "2px";
    return false;
  } else
  {
    lastName.style.border= "none";
    veriflast.style.display = "none";
  };
}

eMail.onblur = messageeMail;
function messageeMail() {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    verifemail.innerHTML = "Veuillez remplir le champ email";
    eMail.style.borderColor = "red";
    eMail.style.borderWidth = "2px";
    return false;
  }else
  {
    eMail.style.border= "none";
    verifemail.style.display = "none"; 
  };
}

tournoi.onblur = messagetournoi;
function messagetournoi() {
  if (!tournoi.value.match(numbers)) { 
    verifquantity.innerHTML = "Veuillez indiquer le nombre de tournois";
    tournoi.style.borderColor = "red";
    tournoi.style.borderWidth = "2px"; 
    return false;
  }else
  {
    tournoi.style.border= "none";
    verifquantity.style.display = "none"; 
  };
}






