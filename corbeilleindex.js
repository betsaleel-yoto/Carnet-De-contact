let tab= getItemContacts()

// récupération des emplacements des éléments se trouvant dans le html
const form = document.querySelector(".form_style");
let prenom= document.querySelector(".prenom")
let email=document.querySelector(".email")
let inputs = document.querySelectorAll("input")
const ajouter= document.getElementById("form_button_submit")

form.addEventListener('submit',( event) =>{
    event.preventDefault();
    const formulaire = new FormData(event.target)
    // console.log(event.target);
    let donneFormulaire = Object.fromEntries(formulaire);
    console.log(donneFormulaire)
    function recuperation(input) {
        for(input in donneFormulaire){
            let recup = donneFormulaire[input]
            console.log(recup);
            //
        }
    }
    recuperation()
verifierPrenom(donneFormulaire.prenom)

    // console.log(donneFormulaire)
    //  validateForm(donne)
// // vérification du prénom


});
console.log(tab)
function setError(input,message) {
    const elementInput = input.parentElement;
    const erreur = elementInput.querySelector('span');
    erreur.innerText=message;
    // console.log(elementInput);

    elementInput.className ='erreur';

}
// function setSucces(input) {
//     const elementInput = input;
//     elementInput.className ='succes';
// }

prenom.onblur= verifierPrenom;

function verifierPrenom(item){
        if(item === ''){
            setError(item,'veuillez saisir un prenom')
            return false;
        }

            setSucces(prenom)
            return true;

    }

//     const validateEmail= item =>{
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(item).toLowerCase());
//     }
//         email.onblur=verifierEmail;

//         function verifierEmail (item){
//             const emailValue = email.value.trim();

//             if(item === ''){  
//             errormail.innerHTML='Veuillez saisir une adresse mail';
//             errormail.style.color='red';
//             email.classList.add('erreur');
//             email.classList.remove('succes');
//             console.log('veuiller saisir une adresse mail')

//             return false
            
//         } else{
//             if (!validateEmail(item)){
//                 errormail.innerHTML='veuiller saisir une adresse valide';
//                 errormail.style.color='red';
//                 email.classList.add('erreur');
//                 email.classList.remove('succes');
//                 console.log('veuiller saisir une adresse valide')
//                 return false
           
//             } else if(!tab.includes(item)){
//                 errormail.innerHTML='cette adresse existe déjà';
//                 errormail.style.color='red';
//                 email.classList.add('erreur');
//                 email.classList.remove('succes');
//                 console.log('déjà existant')
//                 return false
//             }

//         }
//             email.classList.remove('erreur');
//             email.classList.add('succes');
//             errormail.innerHTML='';
         
//             return true;
         
//     }
// function validateForm() {
//     if(!verifierEmail() || !verifierPrenom()){
//         return false
//     }
//     else{
//         ajouterContact()
//     }
    
// }
    
 // fonction d'ajout des contacts dans le tableau
function ajouterContact() {

     tab.push({
        prenom:prenom.value,
        nom:nom.value,
        email:email.value,
        telephone:telephone.value,
        photo:photo.value,
        groupe:groupe.value,
        bio:bio.value,
     })
    nom.value="";
    prenom.value="";
    // prenom.classList.add('annuler')
    email.value="";
    // email.classList.add('annuler')

    telephone.value="";
    groupe.value="";
    bio.value="";
    photo.value="";
    setItemcContact(tab)

    // validateInpts();

// validateEmail()
    console.log(tab)
// voirContact()

}
// ajouterContact(verifierEmail)



// les fonctions de sauvegarde des informations dans le stockage local
function setItemcContact(contact){
    // console.log('save');
        localStorage.setItem("contacts", JSON.stringify(contact));

    }
    function getItemContacts(){
        // localStorage.clear()
        let tableau= localStorage.getItem("contact")
        return tableau ? JSON.parse(tableau):[];
    }

