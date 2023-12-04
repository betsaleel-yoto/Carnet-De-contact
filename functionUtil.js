
export function SetError(input, message) {
    let spanError = document.createElement('span');
// on vérifie si l'élément erreur existe déjà , si oui on le supprime puis on le récrée, sinon on le crée dans le else
    if(document.querySelector('input + span')){
        document.querySelector('input + span').remove()
        console.log(document.querySelector('input + span'));
        spanError = document.createElement('span');
        console.log(spanError);
        // ajout de l'erreur
        spanError.innerText = message;
        spanError.style.color='red'
        input.insertAdjacentElement('afterend',spanError)
        // ajout de la classe d'erreur sur l'élément
        input.className = 'error'
    }else{
        spanError = document.createElement('span');
        console.log(spanError);
        spanError.innerText = message;
        spanError.style.color='red'
        input.insertAdjacentElement('afterend',spanError)
        input.className = 'error'
    }

}

export function SetSucces(input) {
    //on supprime la classe erreur pour ajouter la classe success en cas de réussite dans le cas où le span erreur était là
    //sinon on donne à l'input la classe success.
    if(document.querySelector('input + span')){
        document.querySelector('input + span').remove();
        // const formControl= input;
        input.className = 'succes'
        input.classList.remove('error');
    }else{
        // const formControl= input;
        input.className = 'succes'
    }

}
