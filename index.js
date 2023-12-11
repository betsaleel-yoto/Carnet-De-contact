//Importation des fonctions
import {displayContacts} from './affichage.js'
import {verifyNomPrenom} from './validatenom.js';
import {verifyMail, verifyMailUnique} from './validatemail.js';
import {verifyTelephone, verifyPhoneUnique} from './validatelephone.js';
import { showFile, sizeImage ,imgageUrl } from './validateImage.js';
import {clearForm} from './edition.js'
import { PhotoDeProfil, champAffichage } from './validateImage.js';

export const firstName = document.querySelector(".prenom");
export const lastName = document.querySelector(".nom");
export const phoneNumber = document.querySelector(".telephone");
export const group = document.querySelector(".groupe");
export const email = document.querySelector(".email");
export const bio = document.querySelector(".bio");
export let conteneurImage = document.querySelector('.form_photo_input_border img')

const reunitialisation = document.querySelector('#form_button_reset')
const submit = document.querySelector('#form_button_submit')

export let contacts = window.localStorage.getItem("contacts");

if (contacts=== null) {
    contacts=[]
 }else{
    contacts=JSON.parse(contacts)
    displayContacts()
 }
reunitialisation.addEventListener('click',(event)=>{
    event.preventDefault();
    clearForm();
});

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

submit.addEventListener('click', event=>{
    event.preventDefault();
    validateForm();

});

//champ de l'image
champAffichage.addEventListener('click',()=>{
    PhotoDeProfil.click();
})

//Fonction de validation de toutes les fonctions pour permettre l'ajout dans le tableau.
 function validateForm() {
     if(verifyNomPrenom(firstName) && verifyNomPrenom(lastName) && verifyPhoneUnique(phoneNumber) && verifyTelephone(phoneNumber) && verifyMailUnique(email) && verifyMail(email) && showFile(PhotoDeProfil) && sizeImage(PhotoDeProfil)){
		addContact()
     }
     else{
        return false;
     }

 }
function addContact() {

    contacts.push({
      firstName:firstName.value.trim(),
      lastName: lastName.value.trim(),
      phoneNumber:phoneNumber.value.trim(),
      group:group.value.trim(),
      email:email.value.trim(),
      bio:bio.value.trim(),
      image: imgageUrl,
    });
    firstName.value='';
    lastName.value='';
    phoneNumber.value='';
    group.value='';
    email.value='';
    bio.value='';
    conteneurImage= '';

    displayContacts();
    setItemcContact(contacts)

  }

  function setItemcContact(contact){
         localStorage.setItem("contacts", JSON.stringify(contact));

     }



    