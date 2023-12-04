import {tab} from './index.js'
import { SetError } from "./functionUtil.js";
import { SetSucces } from "./functionUtil.js";
export const email=document.querySelector(".email")

 const validateEmail= email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    return re.test(String(email).toLowerCase());
}

export function verifyMail(element){
    const emailValue = element.value.trim();

    if(emailValue === ''){
        let message='le Mail ne peut pas etre vide';
        SetError(email,message);
        console.log('mauvais');
        return false

    }else{
        if (!validateEmail(emailValue)){
            let message='veuillez renseigner une adresse valide';
            SetError(email, message);
            console.log('mauvais');
            return false

        }
         else {
            SetSucces(email);
            return true;

        }
    }
}


export function verifyMailUnique(elem){
const emailValue = elem.value.trim();
    tab.forEach(element => {
        if(element.email === emailValue){
            let message='Cette adresse existe déjà';
            SetError(email, message);
            console.log('Cette adresse existe déjà');
            return false

        }else{
            SetSucces(email);
            return true
        }

    });
}


































