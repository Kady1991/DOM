
// <!-- **Exercice 1 : Accès à un élément par ID**
// Accédez à un élément HTML par son ID et modifiez son contenu texte. -->
const title = document.querySelector('#title');
console.log(title);


// <!-- 
// **Exercice 2 : Accès à un élément par balise**
// Accédez à un élément HTML en utilisant son nom de balise (par exemple, 'div', 'p', 'h1') et modifiez son contenu. -->
const maDiv = document.getElementsByTagName('div')
console.log(maDiv);


// <!-- **Exercice 3 : Modification des attributs**
title.setAttribute('name', 'modif1');
title.setAttribute('disabled', '')
console.log("mon nouveau titre: =>" ,title);


// <!-- **Exercice 4 : Ajout d'un élément**
// Ajoutez un nouvel élément HTML à la page, par exemple, un paragraphe ou une liste -->
const emplacement = document.querySelector('toutLeContenu');
const nvoElement = document.createElement('p')
nvoElement.innerText=('Ceci est un exo perso.');
console.log('mon nouveau element est:', nvoElement);



// <!-- **Exercice 5 : Suppression d'un élément**
// Supprimez un élément HTML de la page. -->
const emplement = document.querySelector('h1');
emplement.remove();
console.log(emplement);




// <!-- **Exercice 6 : Gestion des classes**
// Ajoutez ou supprimez des classes CSS d'un élément HTML. -->
const ADD = document.querySelector('.container');
ADD.classList.add('.mesclasse4');
console.log(ADD);

// supprimer
const sup = document.querySelector('.container')
sup.classList.remove('.mesclasse4');
console.log(sup);



// <!-- **Exercice 7 : Gestion des événements**
// Attachez un gestionnaire d'événements à un bouton pour qu'il affiche une alerte lorsque le bouton est cliqué. -->

const reponse = "";
const bouton = document.getElementById('BTN');
bouton.addEventListener('click', function() {
    prompt('Bonjour Kady');
    // a revoir
    console.log(reponse);
});

// <!-- **Exercice 8 : Modification du style CSS**

// Modifiez le style CSS d'un élément HTML, par exemple, la couleur du texte ou la taille de la police. -->

// ******** A revoir
const button = document.getElementById('BTN')
button.addEventListener('click', function () {
    button.style.color ='green';
    button.style.fontSize='5rem';
    button.style.borderBlockColor='green';
    bouton.style.borderRadius ='1rem';
    
})

// <!-- 
// **Exercice 9 : Parcours des éléments**
// Utilisez une boucle pour parcourir tous les éléments d'une liste non ordonnée (ul) et affichez-les dans la console. -->

const mesLI = document.getElementById('ul');
const elementLI = ul.getElementsByTagName('li');

for(let i = 0; i >= elementLI.length; i++);

const element = elementLI[i].textContent;
console.log(element);



// <!-- 
// **Exercice 10 : Création d'éléments dynamiquement**
// Créez un formulaire HTML dynamiquement en utilisant JavaScript. 
// Ajoutez des champs de texte, des boutons et des éléments de formulaire à la page. -->
