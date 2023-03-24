// Exo1
let personne = {
    nom: "Jackson",
    age: 26,
    ville: "Cergy"
};
console.log(personne);

// Exo2
let voiture = {
    marque: "Audi",
    modèle: "Kango",
    annee: 1986,
    afficherDetails: function () {
        console.log(Object.values(voiture));
    }
};

// Exo3
let etudiant = {
    nom: "Jackson",
    age: 26,
    notes: [12, 15, 8, 17, 20, 4, 6],
    calculerMoyenne: function () {
        let somme = 0;
        for (let i = 0; i < etudiant.length; i++) {
            somme += etudiant[i];
        }
        console.log(somme / etudiant.length);
    }

};

// Exo4
let animal = {
    espece: "Ours",
    poids: "305 kg",
    cri: "Aucune idée",
    crier: function() {
        console.log(this.cri)
    }
};

// Exo5
let rectangle1 = {
    longueur: 10,
    largeur: 5,
    calculerPerimetre: function(){
    console.log = (this.longueur*2) + (this.largeur*2);
}
};
let rectangle2 = {
    longueur: 15,
    largeur: 10,
    calculerPerimetre: function(){
        console.log = (this.longueur*2) + (this.largeur*2);
    }
};

let personne2 = {
    nom: "Jackson",
    prenom: "Five's",
    age: 23,
    pays: "USA",
    presentation: function(){
        return this.nom + " " + this.prenom + " " + this.age;
    }
};


let calculatrice = {
    valeur1: 6,
    valeur2: 10,
    addition: function(){
        return this.valeur1 + this.valeur2;
    },
    soustraction: function(){
        return this.valeur1 - this.valeur2;
    },
    multiplication: function(){
        return this.valeur1 * this.valeur2;
    },
    division: function(){
        return this.valeur1 / this.valeur2;
    },
};