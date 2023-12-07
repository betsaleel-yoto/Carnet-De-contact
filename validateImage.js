import { setError } from "./functionUtil.js";

export const image = document.getElementById('form_input_photo');
const button = document.querySelector(".emplacement")
export let champAffichage = document.querySelector(".form_photo_input_border")

image.addEventListener('change', function(e){
    // on recupère le fichier selectionné du champ
    let fichier= e.target.files[0];

    // traitement et affichage du fichier
    showFile(fichier);
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

/**
 * @param {file} file: le fichier selectionné à cette fonction
 * @returns
 */
export function showFile(file) {
    let typeFichier = file.type;
    let extensionFile = ['image/jpg','image/png', 'image/jpeg']
    if(extensionFile.includes(typeFichier)){
        //j'extencie l'objet FileReader

        let fileReader= new FileReader();
        // je prend le fichier(file) et je le lis comme un URL
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{

            // récupération du chemin url du fichier
            let cheminUrl= fileReader.result;

            //création de la balise imge qui va contenir l'image
            let photo = `<img src="${cheminUrl} " alt="image">`;
            champAffichage.innerHTML= photo;

            return true;
        }
    }
return true;

}
export function sizeImage(elem) {
    let sizeFile= elem.size;
    if(sizeFile > 5000000 ){
        setError(image,' La taille doit etre inférieur à 5Mo');
        return false;
    }else{
        return true;
    }
}


