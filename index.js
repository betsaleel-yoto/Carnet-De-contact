//Importation des fonctions
import {verifyNomPrenom} from './validatenom.js';
import {verifyMail} from './validatemail.js';
import {verifyTelephone} from './validatelephone.js';
import { verifyPhoneUnique } from './validatelephone.js';
import { verifyMailUnique } from './validatemail.js';
import { showFile } from './validateImage.js';
import { sizeImage } from './validateImage.js';

//Importation des valeurs
import { email } from './validatemail.js';
import {telephone} from './validatelephone.js';
import { image } from './validateImage.js';
import { champAffichage } from './validateImage.js';


export let tab = getItemContacts();
export const groupe = document.querySelector('.groupe');
export const bio = document.querySelector('.bio');
export const nom = document.querySelector('.nom');
export const prenom= document.querySelector('.prenom');
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
    image.click();
})

//Fonction de validation de toutes les fonctions pour permettre l'ajout dans le tableau.
 function validateForm() {
     if(verifyNomPrenom(prenom) && verifyNomPrenom(nom) && verifyPhoneUnique(telephone) && verifyTelephone(telephone) && verifyMailUnique(email) && verifyMail(email) && showFile(image) && sizeImage(image)){
		ajouterContact()
     }
     else{
        return false;
     }

 }
// fonction d'ajout des contacts dans le tableau
 function ajouterContact() {

      tab.push({
        prenom:prenom.value.trim(),
        nom:nom.value.trim(),
        email:email.value.trim(),
        telephone:telephone.value.trim(),
        image:image.value.trim(),
        groupe:groupe.value.trim(),
        bio:bio.value.trim(),
      }

      )
    nom.value="";
    prenom.value="";
    email.value="";
    telephone.value="";
    groupe.value="";
    bio.value="";
    document.querySelector('.form_photo_input_border img').remove();
    setItemcContact(tab)
    console.log(tab)

 }

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

    