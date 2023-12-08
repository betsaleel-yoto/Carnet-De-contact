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
    image: "",
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

function imageShow() {
  let a = document.querySelectorAll(".span_images");
  let photoInputs = document.querySelectorAll("#form_input_photo");

  a.forEach((span, index) => {
    const b = new FileReader();

    // Ajoutez une vérification pour vous assurer que le fichier existe avant de le traiter
    if (photoInputs[index] && photoInputs[index].files.length > 0) {
      b.readAsDataURL(photoInputs[index].files[0]);

      b.onload = (e) => {
        let c = b.result;
        span.innerHTML = `<img src="${c}" alt="image">`;
        contacts[index].image = c;
      };
    }
  });
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  imageShow();
  getImage.call(PhotoDeProfil); // Déplacez getImage.call(PhotoDeProfil) avant addContact()
  addContact();
});

// ... (votre code existant)

// Initial display
displayContacts();
