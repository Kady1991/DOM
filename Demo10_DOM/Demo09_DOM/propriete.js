//récupération d'attribut d'un élément
const input = document.getElementById('inputAttribut')
console.log('input :>> ', input.attributes);

//récupération des enfants de ma div contenu
const listeEnfant = document.getElementById('contenu')

//récupère la liste des enfants selon un élément source /!\ text dans le html
console.log('listeEnfant :>> ', listeEnfant.childNodes);
//récupère le premier enfant selon un élément source /!\ text dans le html
console.log('listeEnfant :>> ', listeEnfant.firstChild);
//récupère le dernier enfant selon un élément source /!\ text dans le html
console.log('listeEnfant :>> ', listeEnfant.lastChild);

//recupere la liste des enfants "réel" selon une source
console.log('listeEnfant :>> ', listeEnfant.children);
//récupère le premier enfant "réel" selon une source
console.log('listeEnfant :>> ', listeEnfant.firstElementChild);
//récupère le dernier enfant "réel" selon une source
console.log('listeEnfant :>> ', listeEnfant.lastElementChild);

const p2 = document.getElementById('p2')

//récupération de l'élément parent depuis une source
console.log(p2.parentNode) 

//récupération du nom de la source (ex : P pour un paragraphe)
console.log('p2.nodeName :>> ', p2.nodeName);

//récupération du précédent élément (dans le même élément parent) /!\ text dans le html
console.log('p2.previousSibling :>> ', p2.previousSibling);
//récupération du prochain élément (dans le même élément parent) /!\ text dans le html
console.log('p2.previousSibling :>> ', p2.nextSibling);

//récupération du précédent élément (dans le même élément parent) 
console.log('p2.previousSibling :>> ', p2.previousElementSibling);
//récupération du prochain élément (dans le même élément parent) 
console.log('p2.previousSibling :>> ', p2.nextElementSibling);

//récupère la valeur texte de l'élément source
console.log('p2.textContent :>> ', p2.textContent);

//récupère le type de node de l'élément source
console.log('p2.nodeType :>> ', p2.nodeType);

//récupère la valeur de la node de l'élément source
console.log('p2.nodeType :>> ', p2.nodeValue);


