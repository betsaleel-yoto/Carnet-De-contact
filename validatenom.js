import { setError } from "./functionUtil.js";
import { setSucces } from "./functionUtil.js";

export function verifyNomPrenom(element){
    const uservalue = element.value.trim();
    console.log(uservalue);
    let letter= uservalue.length;

    if(letter < 3 ){
        setError(element,'la valeur de ce champ ne peut pas etre inférieur à 3 lettres');
        return false;

    }else if(letter > 50 ){
        setError(element,'ce champ doit contenir moin de 50 caractères');
        return false;

     }else{
        setSucces(element);
        return true;
    }
}










