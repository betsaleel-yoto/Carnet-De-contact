/**
 * Cette fonction permet d'ajouter une classe erreur et un message d'erreur à un champ qui ne repecte pas la validation
 * @param {HTMLInputElement} input
 * @param {String} message d'erreur
 * on vérifie si l'élément erreur(espace) existe déjà , si oui on le supprime puis on le récrée, sinon on le crée dans le else
 */

export function setError(input, message) {
let spanError = document.createElement('span');
    if(document.querySelector('input + span')){
        document.querySelector('input + span').remove();
    }
        spanError.innerText = message;
        spanError.style.color='red';
        input.insertAdjacentElement('afterend',spanError);
        input.className = 'error';
}

/**
 * on supprime la classe erreur pour ajouter la classe success en cas de réussite dans le cas où le span erreur était là
 * sinon on donne à l'input la classe success.
 * @param {HTMLInputElement} input
 */
export function setSucces(input) {
    if(document.querySelector('input + span')){
        document.querySelector('input + span').remove();

    }
        input.className = 'succes';
        input.classList.remove('error');

}


