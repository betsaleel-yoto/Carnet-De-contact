import {tab} from './index.js';
import { setError } from "./functionUtil.js";
import { setSucces } from "./functionUtil.js";

export const telephone = document.querySelector('.telephone');

export const validatel= telephone =>{
        const re = /^084|085|080|089|081|082|099|097|090/;
        return re.test(telephone);
    }
/**
* cette fonction verifie si le champ telephone n'est pas vide,si la valeur du champ respecte le format valide
* si la taille de la valeur du champ est = 10 et si la valuer est un entier
* @param {HTMLInputElement} element: le champ telephone
* @returns boolean
*/
export function verifyTelephone(element){
const telephonevalue = element.value.trim();
let letter= telephonevalue.length;

    if(telephonevalue === ''){
        setError(telephone,'le champ téléphone ne peut pas etre vide');
        return false;
    }else{
        if(isNaN(telephonevalue)){
            setError(telephone,'veuillez renseigner un numéro de téléphone valide');
            return false;

        }else if(letter != 10 ){
            setError(telephone,'Veuillez renseigner un numéro avec 10 chiffres');
            return false;

        }else if(!validatel(telephonevalue)){
            setError(telephone,'Veuillez renseigner un numéro au format valide');
            return false;
        }
        else{
            setSucces(telephone);
            return true;
        }
    }
}

/**
 * cette fonction vérifie si un numéro de téléphone existe déjà dans le tableau
 * @param {HTMLInputElement} elem : le champ telephone
 */
export function verifyPhoneUnique(elem){
    const telephonevalue = elem.value.trim();
            for (let index = 0; index < tab.length; index++) {
                let element= tab[index];
                if(element.telephone === telephonevalue){
                    setError(telephone, 'Ce numéro existe déjà');
                    return false;
                }

            }
            return true
    }












































