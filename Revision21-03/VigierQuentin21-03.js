// Déclarez une variable "age" avec une valeur de 25.
// Déclarez une variable "nom" avec une valeur de "Jean".
// Créez une variable "somme" et assignez-lui la somme de deux nombres de votre choix.
// Créez une variable "chaine" qui contient une chaîne de caractères et utilisez la méthode "toUpperCase()" pour la mettre en majuscules.
// Créez une variable "tableau" qui contient un tableau de nombres et utilisez la méthode "length" pour en trouver la longueur.
// Créez une variable "objet" qui contient un objet avec deux propriétés : "nom" et "age". 
// Utilisez la notation pointée pour accéder à la propriété "nom".
// Créez une variable "nombre" qui contient un nombre à virgule flottante et utilisez la méthode "toFixed()" pour arrondir le nombre à deux décimales.
// Créez une variable "date" qui contient la date actuelle et utilisez la méthode "getMonth()" pour trouver le mois actuel.
// Créez une variable "tableau2" qui contient un tableau de chaînes de caractères et utilisez la méthode "join()" pour les fusionner en une seule chaîne de caractères séparée par des virgules.

// Exo 1
let age = 25;

// Exo 2
let nom = "Jean";

// Exo 3
let somme = (12 + 15);

// Exo 4
let chaine = "bonjour je suis une chaine de caractères";
let maj = chaine.toUpperCase;

// Exo 5
let tableau = [2, 4, 6, 7, 8];
let longueur = tableau.length;

// Exo 6
let objet = {
    nom: 'Quentin',
    age: 26,
};
return objet['nom'];

// Exo 7
let nombre = 28.695307297889173;
return nombre.toFixed(2);

// Exo 8
let date = new Date('March 21, 23 16:27:35');
return date.getMonth();

// Exo 9
let tableau2 = ["lorem", "ipsum", "et", "des", "trucs"];
return tableau2.join();
