class animal {
    constructor(type, nom, sexe, rdv){
        this.type = type;
        this.nom = nom;
        this.sexe = sexe;
        this.rdv = rdv;
    }
}

let ratatouillette = new animal("Rat", "Ratatouillette", "Femelle", "Oui");
let samba = new animal("Chat", "Samba", "Femelle", "Non");
let gribouille = new animal("Chat", "Gribouille", "Male", "Oui");
let linux = new animal("Chien", "Linux", "Male", "Non");
let hathena = new animal("Chien", "Hathena", "Femelle", "Oui");
let holiwood = new animal("Chien", "Holiwood", "Male", "Oui");

let clients = [ratatouillette, samba, gribouille, linux, hathena, holiwood];

console.log(clients);

console.log(clients[5]);

let popped = clients.pop();

let hamtaro = new animal("Rat", "Hamtaro", "Male", "Oui");
clients.push(hamtaro);

clients.forEach(function(){
    if( clients.rdv === "Oui"){
        console.log(animal.nom);
    }
});

clients.forEach(function(){
    if(clients.sexe === "Male" || clients.type === "Chien" ){
        return (clients.nom);
    }
})








