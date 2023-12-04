import {tab} from './index.js'

import { SetError } from "./functionUtil.js";
import { SetSucces } from "./functionUtil.js";

export const telephone = document.querySelector('.telephone');

export const validatel= telephone =>{
        const re = /^084|085|080|089|081|082|099|097|090/;
        return re.test(telephone);
    }
export function verifyTelephone(element){
const telephonevalue = element.value.trim();
let letter= telephonevalue.length;

    if(telephonevalue === ''){
        SetError(telephone,'le champ téléphone ne peut pas etre vide');
        return false
    }else{
        if(isNaN(telephonevalue)){
            let message='veuillez renseigner un numéro de téléphone valide';
            SetError(telephone,message);
            return false

        }else if(letter != 10 ){
            let message='Veuillez renseigner un numéro avec 10 chiffres';
            SetError(telephone,message);
            return false

        }else if(!validatel(telephonevalue)){
            let message='Veuillez renseigner un numéro au format valide';
            SetError(telephone,message);
            return false
        }
        else{
            SetSucces(telephone);
            return true
        }
    }
}

export function verifyPhoneUnique(elem){
const telephonevalue = elem.value.trim();
    tab.forEach(element => {
        if(element.telephone === telephonevalue){
            SetError(telephone, 'Ce numéro existe déjà');
            console.log('Ce numéro existe déjà');
            return false

        }else{
            SetSucces(telephone);
            return true

        }

    });
}












































