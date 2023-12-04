// import {tab} from './script.js';
import { SetError } from "./functionUtil.js";
import { SetSucces } from "./functionUtil.js";

export const nom = document.querySelector('.nom');

export function verifyNom(element){
    const uservalue = element.value.trim();
    let letter= uservalue.length;

    if(letter < 3 ){
            SetError(nom,'le nom ne peut pas etre inférieur à 3 lettres');
        return false

    }else if(letter > 50 ){
            SetError(nom,'ce champ doit contenir moin de 50 caractères');
        return false

     }else{
            SetSucces(nom);
        return true
    }
    }




