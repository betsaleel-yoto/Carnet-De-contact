import {contacts} from './index.js'
import { setError } from "./functionUtil.js";
import { setSucces } from "./functionUtil.js";
export const email=document.querySelector(".email")

 const validateEmail= email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    return re.test(String(email).toLowerCase());
}

export function verifyMail(element){
    const emailValue = element.value.trim();

    if(emailValue === ''){
        setError(email,'le Mail ne peut pas etre vide');
        return false
    }else{
        if (!validateEmail(emailValue)){
            setError(email, 'veuillez renseigner une adresse valide');
            return false
        }
         else {
            setSucces(email);
            return true;
        }
    }
}

export function verifyMailUnique(elem){
const emailValue = elem.value.trim();
console.log(emailValue);
    for (let index = 0; index < contacts.length; index++) {
        let element= contacts[index];
        if(element.email === emailValue){
            setError(email, 'Cette adresse existe déjà');
            return false;
        }

    }
    return true
}


































