import { contacts } from "./index.js";
import { displayContacts } from "./affichage.js";
import { firstName, lastName, phoneNumber, group, email, bio } from "./index.js";
export function editContact(index) {
    const contact = contacts[index];
    firstName.value = contact.firstName;
    lastName.value = contact.lastName;
    phoneNumber.value = contact.phoneNumber;
    group.value = contact.group;
    email.value = contact.email;
    bio.value = contact.bio;
    contacts.splice(index, 1);
    displayContacts();
  }

export  function deleteContact(index) {
    const confirmation = confirm(
      "Êtes-vous sûr de vouloir supprimer ce contact ?"
    );
    if (confirmation) {
      contacts.splice(index, 1);
      displayContacts();
    }
    displayContacts();
  }

export function clearForm() {
    document.querySelector(".form_style").reset();
  }
  