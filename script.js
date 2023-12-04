let tab= getItemContacts()
const form = document.querySelector(".form_style");
let prenom= document.querySelector(".prenom")
let email=document.querySelector(".email")

let inputs = document.querySelectorAll("input")
const ajouter= document.getElementById("form_button_submit")

form.addEventListener('submit',( event) =>{
    event.preventDefault();
    verifierPrenom();
    verifierEmail();
});
function setError(input,message) {
    const elementInput = input.parentElement;
    const erreur = elementInput.querySelectorAll('span');
    erreur.innerText=message;
    elementInput.className ='erreur';
}
function setSucces(input) {
    const elementInput = input.parentElement;
    elementInput.className ='succes';
}

prenom.onblur= verifierPrenom;

function verifierPrenom(){
    const prenomValue = prenom.value.trim();
        if(prenomValue === ''){
            setError(prenom,'veuillez saisir un prenom')
            return false;
        }
        setSucces(prenom)
        return true;

}
const validateEmail= email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
email.onblur=verifierEmail;

function verifierEmail (){
    const emailValue = email.value.trim();
    if(emailValue === ''){  
        setError(email,'veuillez saisir une adresse mail')
        return false
    
} else{
    if (!validateEmail(emailValue)){
        setError(email,'veuillez saisir une adresse mail valide')
        return false
   
    } else if(!tab.includes(emailValue)){
        setError(email,'veuillez saisir une adresse mail')
        return false
    }
}
    setSucces(email)
    return true;
}

function validateForm() {
if(!verifierEmail() || !verifierPrenom()){
return false
}
else{
ajouterContact()
}

}

function setItemcContact(contact){
        localStorage.setItem("contacts", JSON.stringify(contact));

    }
    function getItemContacts(){
        // localStorage.clear()
        let tableau= localStorage.getItem("contact")
        return tableau ? JSON.parse(tableau):[];
    }