const imgs = document.querySelectorAll("section");

for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener('click', function () {

        const joueur = imgs[i].innerHTML;
        const robot = imgs[Math.floor(Math.random() * imgs.length)].innerHTML;
        let resultat = "";

        if (joueur === robot) {
            resultat = "Egalité";
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuille") || (joueur === "Feuille" && robot === "Pierre")) {
            resultat = "Gagné, petit coup de chance quand même.";
        }

        else {
            resultat = "Perdu, comme prévu.";
        }

        document.querySelector(".resultat").innerHTML = `
         Joueur : ${joueur} </br>
         Robot : ${robot} </br>
         Résultat : ${resultat} </br>
         `;

    })
}