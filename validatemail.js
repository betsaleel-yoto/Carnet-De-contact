import {tab} from './index.js'
import { SetError } from "./functionUtil.js";
import { SetSucces } from "./functionUtil.js";
export const email=document.querySelector(".email")

 const validateEmail= email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    return re.test(String(email).toLowerCase());
}

// export const focus= email.onblur= verifyMail;
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


































// export let email=document.querySelector(".email")
// // export let errormail= document.getElementById("error-email");
// export const emailValue = email.value.trim();


// export const validateEmail= email =>{
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
//     return re.test(String(email).toLowerCase());
// }
// email.onblur=validateChampVideMail;

// export function validateChampVideMail (){
//     if(emailValue === ''){  
//         errormail.innerText='Veuillez saisir une adresse mail';
//         errormail.style.color='red';
//         email.classList.add('erreur');
//         email.classList.remove('succes');
//         console.log('veuiller saisir une adresse mail')

//         return false
       
//     }else{
//         if (!validateEmail(emailValue)){
//             errormail.innerText='veuiller saisir une adresse valide';
//             errormail.style.color='red';
//             email.classList.add('erreur');
//             email.classList.remove('succes');
//             console.log('veuiller saisir une adresse valide')
//             return false
    
//         }else if(tab.forEach(element => {
//             if(element.email === emailValue){
//                 errormail.innerText='Cette adresse existe déjà';
//                 errormail.style.color='red';
//                 email.classList.add('erreur');
//                 email.classList.remove('succes');
//                 console.log('Cette adresse existe déjà')
//                 return false
//             }
            
//         }));
//     }       
//     email.classList.remove('erreur');
//     email.classList.add('succes');
//     errormail.innerText='';
//     console.log('nouvelle adresse');

//     return true;
// }
// // email.onblur=validateFormat;

// // export function validateFormat (){
    
// //         email.classList.remove('erreur');
// //         email.classList.add('succes');
// //         errormail.innerText='';
// //         console.log('bon mail');
    
// //         return true;
// // }

// // email.onblur=validateUniqueValue;

// // export function validateUniqueValue (){
// //     tab.forEach(element => {
// //         ifelse{
            
// //         }e
// //     });
// // }

// // function verifierEmail (){
// //     const emailValue = email.value.trim();
// //     if(emailValue === ''){  
// //         setError(email,'veuillez saisir une adresse mail')
// //         return false
    
// // } else{
// //     if (!validateEmail(emailValue)){
// //         setError(email,'veuillez saisir une adresse mail valide')
// //         return false
   
// //     } else if(!tab.includes(emailValue)){
// //         setError(email,'veuillez saisir une adresse mail')
// //         return false
// //     }
// // }
// //     setSucces(email)
// //     return true;
// // }