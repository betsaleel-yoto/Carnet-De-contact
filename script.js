// script.js

let contacts = [];
const submit = document.querySelector("#form_button_submit");
const PhotoDeProfil = document.querySelector("#form_input_photo");

function getImage() {
  console.log("images", this.files[0]);
  const imageToProcess = this.files[0];
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

function addContact() {
  const firstName = document.querySelector(".prenom").value;
  const lastName = document.querySelector(".nom").value;
  const phoneNumber = document.querySelector(".telephone").value;
  const group = document.querySelector(".groupe").value;
  const email = document.querySelector(".email").value;
  const bio = document.querySelector(".bio").value;

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
  const contactList = document.querySelector(".ma_liste");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="span_images" id="profilePic"></span>
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
      </div>
    `;
    contactList.appendChild(li);
  });
  imageShow();
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
  contacts.splice(index, 1);

  displayContacts();
}

function clearForm() {
  document.querySelector(".form_style").reset();
}

function imageShow() {
  let a = document.querySelector("#profilePic");
  let b = new FileReader();
  b.readAsDataURL(PhotoDeProfil.files[0]);
  b.onload = () => {
    let c = b.result;
    a.innerHTML = `<img src="${c}" alt="image">`;
  };
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  getImage.call(PhotoDeProfil);
  addContact();
});

// Initial display
displayContacts();
