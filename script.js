// script.js
let contacts = [];
const submit = document.querySelector("#form_button_submit");
function addContact() {
  const firstName = document.querySelector(".prenom").value;
  const lastName = document.querySelector(".nom").value;
  const phoneNumber = document.querySelector(".telephone").value;
  const group = document.querySelector(".groupe").value;
  const email = document.querySelector(".email").value;
  const bio = document.querySelector(".bio").value;

  // Validation logic can be added here

  const contact = {
    firstName,
    lastName,
    phoneNumber,
    group,
    email,
    bio,
  };

  contacts.push(contact);
  displayContacts();
  clearForm();
}

function displayContacts() {
  // const profilePic = document.querySelector("#profilePic");
  // const inputFile = document.querySelector("#form_input_photo");

  // let file = input.files[0];

  // if (file) {
  //   var reader = new FileReader();

  //   reader.onload = function (e) {
  //     photoProfil.src = e.target.result;
  //   };

  //   reader.readAsDataURL(file);
  // }

  const contactList = document.querySelector(".ma_liste");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="span_images"> 
    <img src="#" alt="photo de profil" id= "profilePic">
</span>
<div class="contacts_details_nom_tel_groupe_paragraphe">
    <div class="nom_et_groupe_tel">
        <span class="prenom_nom_groupe">
            <p>${contact.firstName} ${contact.lastName} - ${contact.group}   <button onclick="editContact(${index})">modifier</button>  <button onclick="deleteContact(${index})">supprimer</button></p>
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


</div>
         `;
    contactList.appendChild(li);
  });
}

function editContact(index) {
  const contact = contacts[index];
  document.querySelector(".prenom").value = contact.firstName;
  document.querySelector(".nom").value = contact.lastName;
  document.querySelector(".telephone").value = contact.phoneNumber;
  document.querySelector(".groupe").value = contact.group;
  document.querySelector(".email").value = contact.email;
  document.querySelector(".bio").value = contact.bio;
  // document.getElementById("profilePic").value = contact.profilePic;

  // Remove the edited contact from the array
  contacts.splice(index, 1);

  displayContacts();
}

function deleteContact(index) {
  // Remove the contact from the array
  contacts.splice(index, 1);

  displayContacts();
}

function clearForm() {
  // Clear form fields
  document.querySelector(".form_style").reset();
}

// Initial display
displayContacts();
submit.addEventListener("click", addContact);
