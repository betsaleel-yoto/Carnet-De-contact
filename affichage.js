import { contacts } from "./index.js";
import { imgageUrl } from "./validateImage.js";
import { editContact } from "./edition.js";
import { deleteContact } from "./edition.js";
import { conteneurImage } from "./index.js";
//fonction getimage
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
// fontction affichage
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
    conteneurInfo.setAttribute('class','conteneurInfo');
    li.appendChild(conteneurInfo)

    let paragraphe = document.createElement('p');
    paragraphe.setAttribute('class','paragraphe');

    let spaniconmodify= document.createElement('span');
    spaniconmodify.setAttribute('class','spaniconmodify');

    let spanicondelete= document.createElement('span')
    spanicondelete.setAttribute('class','spanicondelete');

    paragraphe.innerText=`${contacts[index].firstName} ${contacts[index].lastName} - ${contacts[index].group}`
    // button modifier
    const btnmodify = document.createElement("button");
    btnmodify.setAttribute('class','modify');
    btnmodify.innerHTML= '<i class="fa fa-user-pen"></i>';
    btnmodify.addEventListener('click',() =>{
      editContact(index)
    } )
    spaniconmodify.appendChild(btnmodify)
    //button supprimer
    const btnsupprimer = document.createElement("button");
    btnsupprimer.setAttribute('class','supprimer');
    btnsupprimer.innerHTML= `<i class="fa-solid fa-trash" ></i>`;
    btnsupprimer.classList.add('btndelete')
    btnsupprimer.addEventListener('click',() =>{
      deleteContact(index)
    })
    spanicondelete.appendChild(btnsupprimer)
    paragraphe.appendChild(spaniconmodify);
    paragraphe.appendChild(spanicondelete);
    conteneurInfo.appendChild(paragraphe);

    let paragraphephone= document.createElement('p');
    paragraphephone.innerText=`${contacts[index].phoneNumber}`

    let paragraphebio = document.createElement('p');
    paragraphebio.innerText= `${contacts[index].bio}`

    conteneurInfo.appendChild(paragraphephone);
    conteneurInfo.appendChild(paragraphebio);
    contactList.appendChild(li);
  }
  }
  