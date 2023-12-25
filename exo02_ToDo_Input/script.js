const listeItem = document.getElementById("listeItem")
const bouton = document.getElementById("ajoutItem")
const item = document.getElementById("item")

bouton.addEventListener('click', ajouterItem)

function ajouterItem(){
    if(item.value.trim().length != 0){
        const nouvelItem = document.createElement("li")
        nouvelItem.innerText = item.value
        listeItem.appendChild(nouvelItem)
    }
    else{
        alert("Vous devez entrer une lettre au minimum")
    }
    //supprimer la valeur dans l'input après un ajout
    item.value = ""
    //se replacer dans l'input
    item.focus()
}