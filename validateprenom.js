// import {tab} from './script.js'
import { SetError } from "./functionUtil.js";
import { SetSucces } from "./functionUtil.js";

export const prenom= document.querySelector('.prenom');

export function verifyPrenom(element){
    const prenomvalue = element.value.trim();
    let letter= prenomvalue.length;
    if(letter < 3 ){
        SetError(prenom,'le Prenom ne peut pas etre inférieur à 3 lettres');
        return false
    }else if(letter > 50 ){
        SetError(prenom,'ce champ doit contenir moin de 50 caractères');
		return false
    }else{
        SetSucces(prenom);
        return true
    }
}




