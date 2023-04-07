//Création du script qui se déclenche uniquement lorsque l'on appuie sur le submit du formulaire
document.querySelector('#form').onsubmit = () =>{
    const base = document.querySelector('#local_currency').value;

    //Utilisation d'une api qui tient à jour les taux de change
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
        .then((response) => response.json())
        .then((data) => {
    //Déclaration de const et utilisation du dom pour récupérer les valeurs depuis le HTML
            const amount = document.querySelector("#amount").value;
            const currencyTo = document.querySelector("#foreign_currency").value;
            const rate = data.rates[currencyTo];
            function convert(){
                return amount * rate;
            }
        //Injection de HTML dans la div results pour afficher le résultat
            document.querySelector("#results").innerHTML = `${amount} ${base.toUpperCase()} est égale à ${currencyTo} ${convert().toFixed(2)}`;
        })
        //Déclaration en cas d'erreur lors de la convertion (quel qu'elle soit)
        .catch((error) => {
            console.log("Error: ", error);
        });
        return false;
}