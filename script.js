import { contacts } from "./index.js";
import { showFile } from "./validateImage.js";
import { PhotoDeProfil } from "./validateImage.js";
import { imgageUrl } from "./validateImage.js";
import {setItemcContact} from "./index.js"

const submit = document.querySelector("#form_button_submit");

export function getImage() {
  let newImage = new Image(imgageUrl.width, imgageUrl.height);
  newImage.src = imgageUrl;
  const spanImage = document.createElement("span");
  spanImage.classList.add("span_images");
  spanImage.appendChild(newImage);
  const contactList = document.querySelector(".ma_liste");
  const li = document.createElement("li");
  li.appendChild(spanImage);
  contactList.appendChild(li);
}

export const firstName = document.querySelector(".prenom");
console.log('name',firstName);
export const lastName = document.querySelector(".nom");
export const phoneNumber = document.querySelector(".telephone");
export const group = document.querySelector(".groupe");
export const email = document.querySelector(".email");
console.log(email);
export const bio = document.querySelector(".bio");
let conteneurImage = document.querySelector('.form_photo_input_border imgm')

export function addContact() {

  contacts.push({
    firstName:firstName.value.trim(),
    lastName: lastName.value.trim(),
    phoneNumber:phoneNumber.value.trim(),
    group:group.value.trim(),
    email:email.value.trim(),
    bio:bio.value.trim(),
    image: imgageUrl,
  });
  conteneurImage='';
  console.log(contacts);
  displayContacts();
  setItemcContact(contacts)
  console.log(contacts);

}

export function displayContacts() {
  const cont= document.querySelector("#liste_des_contacts")
  const contactList = document.querySelector(".ma_liste");

  contactList.innerHTML = "";
for(let index = 0; index< contacts.length; index++){
  const li = document.createElement("li");
  li.setAttribute('class','liste');
  const spanImage = document.createElement("span");
  spanImage.classList.add("span_images");

  if (contacts[index].image) {
    spanImage.innerHTML = `<img src="${contacts[index].image}" alt="image">`;
  }
  else{
    conteneurImage = '<img src="image/bonhomme1.png" alt="image">';
    spanImage.innerHTML= conteneurImage;
  }
  li.appendChild(spanImage);
  let conteneurInfo = document.createElement('div');
  li.appendChild(conteneurInfo)
  let paragraphe = document.createElement('p');
  paragraphe.innerText=`${contacts[index].firstName} ${contacts[index].lastName} - ${contacts[index].group}`

  // button modifier
  const btnmodify = document.createElement("button");
  btnmodify.setAttribute('class','modify');
  btnmodify.innerHTML= '<i class="fa-thin fa-pen-to-square"></i>';
  paragraphe.appendChild(btnmodify);
  btnmodify.addEventListener('click',() =>{
    editContact(index)

  } )

  //button supprimer
  const btnsupprimer = document.createElement("button");
  btnsupprimer.setAttribute('class','supprimer');
  btnsupprimer.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
  paragraphe.appendChild(btnsupprimer);
  btnsupprimer.addEventListener('click',() =>{
    deleteContact(index)
  })
  conteneurInfo.appendChild(paragraphe);

  let paragraphephone= document.createElement('p');
  paragraphephone.innerText=`${contacts[index].phoneNumber}`
  let paragraphebio = document.createElement('p');
  paragraphebio.innerText= `${contacts[index].bio}`
  conteneurInfo.appendChild(paragraphephone);
  conteneurInfo.appendChild(paragraphebio);

  contactList.appendChild(li);
  // let divcontavtList = document.createElement('div');
  // divcontavtList.setAttribute('class','divcontavtList');
  // divcontavtList.appendChild(contactList)
  // cont.appendChild(divcontavtList)
  // setItemcContact(contacts);

}
}

function editContact(index) {
  const contact = contacts[index];
  firstName.value = contact.firstName;
  lastName.value = contact.lastName;
  phoneNumber.value = contact.phoneNumber;
  group.value = contact.group;
  email.value = contact.email;
  bio.value = contact.bio;
  // imgageUrl = contact.image;

  contacts.splice(index, 1);

  displayContacts();
}

function deleteContact(index) {
  const confirmation = confirm(
    "Êtes-vous sûr de vouloir supprimer ce contact ?"
  );
  if (confirmation) {
    contacts.splice(index, 1);
    displayContacts();
  }
  displayContacts();
  // setItemcContact(contacts);
}

export function clearForm() {
  conteneurImage='';
  document.querySelector(".form_style").reset();
}
