let tab= getItemContacts()

// récupération des emplacements des éléments se trouvant dans le html
const form = document.querySelector(".form_style");
let prenom= document.querySelector(".prenom")
let nom=document.querySelector(".nom")
let email=document.querySelector(".email")
let telephone=document.querySelector(".telephone")
let bio = document.querySelector(".bio")
let groupe = document.querySelector(".groupe")
let photo = document.getElementById("form_input_photo")
// récupération des valeurs des champs sans espaces.
let errormail= document.getElementById("error-email");
let error= document.getElementById("error-prenom");
let inputs = document.querySelectorAll("input")

const ajouter= document.getElementById("form_button_submit")
form.addEventListener('submit', event=>{
    event.preventDefault();
// vérification du prénom
prenom.onblur= verifierPrenom;

    function verifierPrenom(){
    const prenomValue = prenom.value.trim();
        if(prenomValue === ''){
            error.innerText='Veuillez saisir un username';
            error.style.color='red';
            prenom.classList.add('erreur');
            prenom.classList.remove('succes')
            // event.preventDefault();
            return false

        }else{
            prenom.classList.add('succes');
            prenom.classList.remove('erreur');
            error.innerHTML='';
            console.log('bon')
            return prenomValue;

        }

    }
    verifierPrenom()
    const validateEmail= email =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
        email.onblur=verifierEmail;

        function verifierEmail (){
            const emailValue = email.value.trim();

            // console.log(emailValue);
            if(emailValue === ''){  
            errormail.innerHTML='Veuillez saisir une adresse mail';
            errormail.style.color='red';
            email.classList.add('erreur');
            email.classList.remove('succes');
            return false
            // event.preventDefault();
            
            
        } else if (!validateEmail(emailValue)){
            errormail.innerHTML='veuiller saisir une adresse valide';
            errormail.style.color='red';
            email.classList.add('erreur');
            email.classList.remove('succes');
            return false
        // event.preventDefault();
            

        }else if (tab.includes(emailValue)){
            errormail.innerHTML='cette adresse existe déjà';
            errormail.style.color='red';
            email.classList.add('erreur');
            email.classList.remove('succes');
            return false
        // event.preventDefault();

        }else{
            email.classList.add('succes');
            email.classList.remove('erreur');
            errormail.innerHTML='';
            return emailValue;

        }
        // console.log(emailValue);
    }
    verifierEmail()

    // vérification du mail
    // la foncion de vérification des inputs

    // validateInpts();
    // ajouterContact();
});

// const validateInpts = ()=>{
//     const nomValue = nom.value.trim();
//     const telephoneValue = telephone.value.trim();
//     const bioValue = bio.value.trim();
//     const groupeValue = groupe.value.trim();
//     const photoValue = photo.value.trim();
//    
        
//     
    
    //  }
    //  validateInpts()
//     // pour annuler le comportement par défaut du formulaire

// // critère de validation pour le champ mail avec l'expression régulière

// // fonction d'ajout des contacts dans le tableau
// function ajouterContact() {
//     // let emailvalue=verifierPrenom()
//     // console.log(verifierEmail)
    
//     tab.push({
//         prenom:prenom.value,
//         nom:nom.value,
//         email:email.value,
//         telephone:telephone.value,
//         photo:photo.value,
//         groupe:groupe.value,
//         bio:bio.value,
//     })
//     // nom.value="";
//     // prenom.value="";
//     // email.value="";
//     // telephone.value="";
//     // groupe.value="";
//     // bio.value="";
//     // photo.value="";
//     setItemcContact(tab)

//     // validateInpts();

// // validateEmail()
//     console.log(tab)
// // voirContact()

// }
// // ajouterContact(verifierEmail)



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


    // le principe est celui de faire un e.prevendefault dans le cas où le champ n'est pas valide
    // fiare(onblur) en sorte qu'on dise à l'utilisateur si ça passe ou pas quand il finit de saisir et quitter le champ
    // recuperer les donées de la fonctionvalidate en paramètre du coté ajoutercontact ,donc en paramètre je passe les valeurs au lieu de la variable