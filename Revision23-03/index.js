// LES TABLEAUX

 

// >>> Exercice 1
// Créez un tableau contenant les noms de trois de vos amis. 
// Affichez ensuite le premier élément du tableau dans la console.

 

// >>> Exercice 2
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
// Utilisez une boucle pour afficher chaque élément du tableau dans la console

 

// >>> Exercice 3
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
// Utilisez une méthode de tableau pour ajouter le nombre 6 à la fin du tableau.

 

// >>> Exercice 4
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
// une méthode de tableau pour supprimer le dernier élément du tableau.

 

// >>> Exercice 5
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
// une méthode de tableau pour ajouter le nombre 0 au début du tableau.

 

// >>> Exercice 6
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez une méthode de 
// tableau pour supprimer le premier élément du tableau.

// Exo1
let tab = ['Pierre', 'Paul', 'Jacques'];
console.log(tab[1]);

// Exo2
let tab2 = [1,2,3,4,5];
for (var i = 0; i<tab2.length; i++){
    console.log(tab2[i])
}

// Exo3
let tab3 = [1,2,3,4,5];
tab3.push(6);

// Exo4
let tab4 = [1,2,3,4,5];
tab4.slice(pos, 4);

// Exo5
let tab5 = [1,2,3,4,5];
tab5.unshift(0);

// Exo6
let tab6 = [1,2,3,4,5];
tab6.slice(pos, 0);