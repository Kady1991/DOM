// Permet de parcourir les proriété du document

// const obj = document

// for(let propriete in obj){
//     console.log(`${propriete} > ${obj[propriete]}`);
// }


// Permet de recuperer un élément via son ID
const monID = document.getElementById('contenu')
console.log('monID :>> ', monID);

// Permet de recuperer un élément via sa classe
const maClasse = document.getElementsByClassName('titre')
console.log('maClasse :>> ', maClasse);

// Permet de recuperer un élément via son tag (balise)
const maBalise = document.getElementsByTagName('p')
console.log('maBalise :>> ', maBalise);

// Permet de recuperer un élément via un query selector (css)
const autreId = document.querySelector("#contenu")
console.log('autreId :>> ', autreId);

// Permet recuperer des éléments
const autreClasse = document.querySelectorAll(".titre")
console.log('autreClasse :>> ', autreClasse);


// Création d'un élément
const contenu = document.getElementById('contenu') //recuperation div ou l'élement va être ajouté
const monNouvelElement = document.createElement('p') //création d'un élément paragraphe
monNouvelElement.innerText = "Voici mon paragraphe créé via JS"//ajout de texte dans le nouveau paragraphe

document.body.appendChild(monNouvelElement)//ajout du nouvel élément dans ma div #contenu

//ajout élément entre noeud source et un enfant
document.body.insertBefore(monNouvelElement, contenu)

//ajoute avant l'élément
contenu.insertAdjacentElement("beforebegin" , monNouvelElement)
//ajoute apres l'élément
contenu.insertAdjacentElement("afterend" , monNouvelElement)
//ajoute au début de l'élément
contenu.insertAdjacentElement("afterbegin" , monNouvelElement)
//ajoute à la fin de l'élément
contenu.insertAdjacentElement("beforeend" , monNouvelElement)

const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

//replace un noeud enfant
contenu.replaceChild(monNouvelElement, p2)

//supprime un noeud enfant
contenu.removeChild(p3)

//Remplacer le contenu dans l'élément
const innerOuter = document.getElementById('innerOuter')
//innerOuter.innerHTML ="<h1>Hello</h1>"
//innerOuter.innerText ="<h1>Hello</h1>"
//innerOuter.textContent ="<h1>Hello</h1>"

//remplacer le contenu et l'élément
//innerOuter.outerHTML = "<h1>Hello</h1>"
innerOuter.outerText ="<h1>Hello</h1>"



