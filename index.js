//Importation des fonctions
import {addContact} from './script.js'
import {verifyNomPrenom} from './validatenom.js';
import {verifyMail} from './validatemail.js';
import {verifyTelephone} from './validatelephone.js';
import { verifyPhoneUnique } from './validatelephone.js';
import { verifyMailUnique } from './validatemail.js';
import { showFile } from './validateImage.js';
import { sizeImage } from './validateImage.js';
import {getImage} from './script.js'

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



export let contacts = getItemContacts();
// export const groupe = document.querySelector('.groupe');
// console.log(groupe);
// export const bio = document.querySelector('.bio');
// export const nom = document.querySelector('.nom');
// export const prenom= document.querySelector('.prenom');
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
    // imageShow();
    getImage.call(PhotoDeProfil); // Déplacez getImage.call(PhotoDeProfil) avant addContact()
    console.log('formbtn', getImage.call(PhotoDeProfil));
    // displayContacts();


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
// // fonction d'ajout des contacts dans le tableau
//  function ajouterContact() {

//       tab.push({
//         prenom:prenom.value.trim(),
//         nom:nom.value.trim(),
//         email:email.value.trim(),
//         telephone:telephone.value.trim(),
//         image:image.value.trim(),
//         groupe:groupe.value.trim(),
//         bio:bio.value.trim(),
//       }

//       )
//     nom.value="";
//     prenom.value="";
//     email.value="";
//     telephone.value="";
//     groupe.value="";
//     bio.value="";
//     document.querySelector('.form_photo_input_border img').remove();
//     setItemcContact(tab)
//     console.log(tab)

//  }

 // les fonctions de sauvegarde des informations dans le stockage local
 function setItemcContact(contact){
     // console.log('save');
         localStorage.setItem("contacts", JSON.stringify(contact));

     }
     function getItemContacts(){
        //  localStorage.clear()
         let tableau= localStorage.getItem("contact")
         return tableau ? JSON.parse(tableau):[];
     }

    