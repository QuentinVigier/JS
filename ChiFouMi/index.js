//Stocker TOUT les bouttons dans la constante buttons
const buttons = document.querySelectorAll("button");

//Ouvrir une boucle avec une condition
for( let i = 0; i < buttons.length; i++){

    //Créer une action au click d'un des boutons qui déclenche la fonction en dessous
    buttons[i].addEventListener('click', function() {

        //Déclaratiuon et innitialisation de nos trois variables
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = ' ';

        //Déclaration du cas d'égalité
        if (joueur===robot) {
            resultat = "Egalité";
        }

        //Déclaration du cas ou le JOUEUR gagne
        else if((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuille") || (joueur === "Feuille" && robot === "Pierre")) {
            resultat = "Gagné";
        }

        //Si le joueur ne gagne pas et qu'il n'y a pas d'égalité alors le joueur à forcément perdu
        else {
            resultat = "Perdu";
        }

        //Une fois qu'on sait qui a gagné ou perdu et qu'on sait ce que le joueur et l'ordinateur ont joué il faut injecter les valeurs dans la div resultat pour l'afficher dans le html
        document.querySelector(".resultat").innerHTML = `
        Joueur : ${joueur}</br>
        Robot : ${robot}</br>
        Résultat : ${resultat}</br>
        ` ;
    });
}