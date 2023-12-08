// script.js
import { contacts } from "./index.js";
// import { image } from "./validateImage.js";
import { showFile } from "./validateImage.js";
import { PhotoDeProfil } from "./validateImage.js";

// export let contacts = [];
const submit = document.querySelector("#form_button_submit");
// export const PhotoDeProfil = document.querySelector("#form_input_photo");

export function getImage() {
  const imageToProcess = this.files[0];
  console.log("images", imageToProcess);

  let newImage = new Image(imageToProcess.width, imageToProcess.height);
  newImage.src = URL.createObjectURL(imageToProcess);

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
export function addContact() {

  contacts.push({
    firstName:firstName.value.trim(),
    lastName: lastName.value.trim(),
    phoneNumber:phoneNumber.value.trim(),
    group:group.value.trim(),
    email:email.value.trim(),
    bio:bio.value.trim(),
    image: PhotoDeProfil.value.trim(),
  });

  // contacts.push(contact);
  console.log(contacts);
  displayContacts();
  getImage(contacts.image)
  document.querySelector('.form_photo_input_border img').remove();
  clearForm();
}

function displayContacts() {
  const contactList = document.querySelector(".ma_liste");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    const spanImage = document.createElement("span");
    spanImage.classList.add("span_images");

    if (contact.image) {
      spanImage.innerHTML = `<img src="${contact.image}" alt="image">`;
    }

    li.appendChild(spanImage);

    li.innerHTML += `
      <div class="contacts_details_nom_tel_groupe_paragraphe">
        <div class="nom_et_groupe_tel">
          <span class="prenom_nom_groupe">
            <p>${contact.firstName} ${contact.lastName} - ${contact.group}
              <button onclick="editContact(${index})">modifier</button>
              <button onclick="deleteContact(${index})">supprimer</button>
            </p>
          </span><br>
          <span class="telephone">
            <p>${contact.phoneNumber}</p>
          </span><br>
        </div>
        <div class="paragraphe_bio">
          <span class="paragraphe_propre">
            <p>${contact.bio}</p>
          </span>
        </div>
      </div>`;

    contactList.appendChild(li);
  });
  showFile(PhotoDeProfil);
}

function editContact(index) {
  const contact = contacts[index];
  document.querySelector(".prenom").value = contact.firstName;
  document.querySelector(".nom").value = contact.lastName;
  document.querySelector(".telephone").value = contact.phoneNumber;
  document.querySelector(".groupe").value = contact.group;
  document.querySelector(".email").value = contact.email;
  document.querySelector(".bio").value = contact.bio;

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
}

function clearForm() {
  document.querySelector(".form_style").reset();
}

// ... (votre code existant)

// function imageShow() {
//   let a = document.querySelectorAll(".span_images");
//   let photoInputs = document.querySelectorAll("#form_input_photo");

//   a.forEach((span, index) => {
//     const b = new FileReader();

//     // Ajoutez une vérification pour vous assurer que le fichier existe avant de le traiter
//     if (photoInputs[index] && photoInputs[index].files.length > 0) {
//       b.readAsDataURL(photoInputs[index].files[0]);

//       b.onload = (e) => {
//         let c = b.result;
//         span.innerHTML = `<img src="${c}" alt="image">`;
//         contacts[index].image = c;
//       };
//     }
//   });
// }

// submit.addEventListener("click", function (event) {
//   event.preventDefault();
//   imageShow();
//   getImage.call(PhotoDeProfil); // Déplacez getImage.call(PhotoDeProfil) avant addContact()
//   addContact();
// });

// ... (votre code existant)

// Initial display
// displayContacts();
