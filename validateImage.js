// import {tab} from './script.js';
import { SetError } from "./functionUtil.js";

export const image = document.getElementById('form_input_photo');
const button = document.querySelector(".emplacement")
export let champAffichage = document.querySelector(".form_photo_input_border")
// on simule un click sur le champ input file
button.onclick= ()=>{
    image.click();
    console.log("j'ai cliqué");
}

image.addEventListener('change', function(){
    // on recupère le fichier selectionné du champ
    let fichier=this.files[0];

    // traitement et affichage du fichier
    showFile(fichier)
})

// phase de drag and drop
champAffichage.addEventListener('dragover', (event)=>{
    event.preventDefault()
    champAffichage.classList.add('active');
    button.textContent = "Glisser & Déposer pour uploader l'image";
})
champAffichage.addEventListener('dragleave',event=>{
    champAffichage.classList.remove('active');
    button.textContent = "Déposez la photo";

})

// gestion de l'acte de drag & drop
champAffichage.addEventListener('drop', event=>{
    event.preventDefault();
    let fichierDrop = event.dataTransfer.files[0];

    showFile(fichierDrop);
})

export function showFile(file) {
    //recupération du type du fichier
    let typeFichier = file.type;
    let extensionFile= ['image/jpg','image/png']

    //vérification de l'extension du fichier
    if(extensionFile.includes(typeFichier)){
        let fileReader= new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = ()=>{
            //permet de passer le fichier source de l'image dans le variable cheminUrl
            let cheminUrl= fileReader.result;

            let photo = `<img src="${cheminUrl} " alt="image">`;
            champAffichage.innerHTML= photo;
            return true;
        }

    }
    //j'exprime le poids en o car c'est la convention en js,
    // donc je transcrit les 5Mo en octets; 1 MégaOctet (Mo) = 1 000 000 octets
    else if(image.files[0].size/1024*1024 > 5000000 ){
        SetError(image,'La taille doit etre inférieur à 5Mo');
        console.log('mauvais 1');
        return false
    }else{
        SetError(image,'Veuillez uploader un bon format');
        return false;
    }
}
