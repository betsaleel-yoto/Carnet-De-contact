//Importation des fonctions
import {addContact, displayContacts} from './script.js'
import {verifyNomPrenom} from './validatenom.js';
import {verifyMail} from './validatemail.js';
import {verifyTelephone} from './validatelephone.js';
import { verifyPhoneUnique } from './validatelephone.js';
import { verifyMailUnique } from './validatemail.js';
import { showFile } from './validateImage.js';
import { sizeImage } from './validateImage.js';
import {clearForm} from './script.js'
// import {displayContacts} from './script.js'

//Importation des valeurs
// import { email } from './validatemail.js';
// import {telephone} from './validatelephone.js';
import { PhotoDeProfil } from './validateImage.js';
import { champAffichage } from './validateImage.js';
import { firstName } from './script.js';
import { lastName } from './script.js';
// import { group } from './script.js';
import {email} from './script.js';
// import { bio } from './script.js';
import { phoneNumber } from './script.js';


const reunitialisation = document.querySelector('#form_button_reset')
export let contacts = window.localStorage.getItem("contacts");
if (contacts=== null) {
    contacts=[]
 }else{
    contacts=JSON.parse(contacts)
    console.log(contacts);
    displayContacts()
 }
reunitialisation.addEventListener('click',()=>{
    clearForm();
});


console.log(contacts);
const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
	element.addEventListener('blur', (e)=>{
		if(element.id == 'postname'){
			verifyNomPrenom(e.target);
		}else if(element.id =='name'){
			verifyNomPrenom(e.target);
		}else if(element.id == 'phonenumber'){
			verifyTelephone(e.target);
			verifyPhoneUnique(e.target);
		}else if(element.id == 'mail'){
			verifyMail(e.target);
			verifyMailUnique(e.target);
		}else if(element.id == 'form_input_photo'){
			showFile(e.target);
            sizeImage(e.target);
		}

	});
});

const form = document.querySelector(".form_style");
form.addEventListener('submit', event=>{
    event.preventDefault();
    validateForm();

});

//champ de l'image
champAffichage.addEventListener('click',()=>{
    PhotoDeProfil.click();
})



//Fonction de validation de toutes les fonctions pour permettre l'ajout dans le tableau.
 function validateForm() {
    console.log('mmm', verifyMailUnique(email));
     if(verifyNomPrenom(firstName) && verifyNomPrenom(lastName) && verifyPhoneUnique(phoneNumber) && verifyTelephone(phoneNumber) && verifyMailUnique(email) && verifyMail(email) && showFile(PhotoDeProfil) && sizeImage(PhotoDeProfil)){
		addContact()
     }
     else{
        return false;
     }

 }
 export function setItemcContact(contact){
         window.localStorage.setItem("contacts", JSON.stringify(contact));

     }



    