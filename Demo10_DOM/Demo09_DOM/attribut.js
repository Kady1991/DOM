
const input = document.getElementById('inputAttribut')
const p2 = document.getElementById("p2")

//récupération des attributs
console.log(input.getAttribute('minlength'))
console.log(input.getAttribute('id'))

//Ajout d'un attribut /!\ s'il existe déjà, il sera écrasé
input.setAttribute('name', 'nameTest')
input.setAttribute('name', 'nameDeux')

//permet de lister les classes sur un élément
console.log('p2.classList :>> ', p2.classList);

//ajout d'une classe
p2.classList.add('gras')
p2.classList.add('red')

//suppréssion d'une classe
p2.classList.remove('red')

//permet de vérifier si un attribut est appliqué à l'élément
console.log('input.hasAttribute :>> ', input.hasAttribute('style'));

//permet d'activer/désactiver un attribut
input.toggleAttribute('disabled', true)
//input.toggleAttribute('name', false)

const bouton = document.getElementById('btnTest')
console.log('bouton :>> ', bouton);

function mettreEnRouge(){
    p2.classList.add('red')
}
bouton.addEventListener('click', mettreEnRouge)



