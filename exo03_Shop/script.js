const boutons = document.querySelectorAll("#catalogue button")
const panier = document.getElementById("panier")
const inputTotal = document.getElementById("total")
let total = 0;
console.log('boutons :>> ', boutons);

boutons.forEach(bouton => bouton.addEventListener('click', ajoutProduit))


function ajoutProduit(event){

    const ligneProduit = event.target.parentNode.parentNode
    console.log('ligneProduit :>> ', ligneProduit);

    const lignePanier = document.createElement('tr')
    const nomPanier = document.createElement('td')
    const prixPanier = document.createElement('td')

    console.log('ligneProduit :>> ', ligneProduit.children[0]);

    nomPanier.innerText = ligneProduit.children[0].innerText
    prixPanier.innerText = ligneProduit.children[1].innerText

    panier.appendChild(lignePanier)
    lignePanier.appendChild(nomPanier)
    lignePanier.appendChild(prixPanier)

    inputTotal.value = +inputTotal.value + +ligneProduit.children[1].innerText



}