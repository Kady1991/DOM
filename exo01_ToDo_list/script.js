const listeItem = document.getElementById("listeItem")
const bouton = document.getElementById("ajoutItem")


let index = 1

bouton.addEventListener('click', ajouterItem)

function ajouterItem(){
    const item = document.createElement("li")
    item.innerText = "Item " + index
    index++
    listeItem.insertAdjacentElement("beforeend", item)
}