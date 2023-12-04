//Importation des fonctions
import {verifyNom} from './validatenom.js'
import {verifyPrenom} from './validateprenom.js'
import {verifyMail} from './validatemail.js'
import {verifyTelephone} from './validatelephone.js'
import { verifyPhoneUnique } from './validatelephone.js'
import { verifyMailUnique } from './validatemail.js'
import { showFile } from './validateImage.js'

//Importation des valeurs
import { prenom } from './validateprenom.js';
import { nom } from './validatenom.js';
import { email } from './validatemail.js';
import {telephone} from './validatelephone.js'
import { image } from './validateImage.js'


export let tab = getItemContacts();
const inputs = document.querySelectorAll('input');



inputs.forEach(element => {
	element.addEventListener('blur', (e)=>{
		if(element.id == 'name'){
			verifyNom(e.target);
		}else if(element.id =='postname'){
			verifyPrenom(e.target);
		}else if(element.id == 'phonenumber'){
			verifyTelephone(e.target);
			verifyPhoneUnique(e.target);
		}else if(element.id == 'mail'){
			verifyMail(e.target);
			verifyMailUnique(e.target);
		}else if(element.id == 'form_input_photo'){
			showFile(e.target);
		}

	});
});

const form = document.querySelector(".form_style");
form.addEventListener('submit', event=>{
    event.preventDefault();
    validateForm();
});

//Fonction de validation de toutes les fonctions pour permettre l'ajout dans le tableau.
 function validateForm() {
     if(!verifyNom(nom) || !verifyPrenom(prenom) || !verifyMail(email) || !verifyTelephone(telephone) || verifyMailUnique(email) || verifyPhoneUnique(telephone) || showFile(image)){
		 console.log('les champs false');
     }
     else{
		ajouterContact()

		console.log('les champs true');
         return true;
     }

 }

// fonction d'ajout des contacts dans le tableau
 function ajouterContact() {
    const groupe = document.querySelector('.groupe');
    const bio = document.querySelector('.bio');
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
    image.value="";
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

     //OU c'est l'addition
     //ET c'est la mutiplicaion