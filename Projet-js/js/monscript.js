const valider=document.querySelector('#submit');
const display1 =document.getElementById('display');
console.log(display1);
console.log(valider);

valider.addEventListener('click',()=>{
        addUser();
        myDisplay();
});
let nom=[]
let prenom=[]
function addUser(e){
// e.preventDefault();
 console.log('test');
  nom = document.getElementById("nom").value;
  prenom = document.getElementById("prenom").value;
console.log(nom);
console.log(prenom);
}
addUser()


const myDisplay=()=>{
        console.log('test');
        display.textContent="Je m'appelle :";
}

myDisplay()
