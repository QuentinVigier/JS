//Déclaration des constantes en récupérant les élements du header
const balanceEl = document.querySelector(".balance .value");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeTotalEl = document.querySelector(".income-total");
const chartEL = document.querySelector(".chart");

//Déclaration des cnstantes en récupérant les éléments du récap
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//Déclaration des constantes en récupérant les entrées dans le dashboard
const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");

//On va mettre en surbrillance le boutton et afficher la liste correspondante au bouton sélectionné
function active(element){
    element.classlist .add("active");
}
function show(element){
    element.classlist .remove("hide");
}
function hide(elementsArray){
    elementsArray.array.forEach(element => {
        element.classlist .add("hide");
    });
}
function inactive(elementsArray){
    elementsArray.array.forEach(element => {
        element.classlist.remove("active");
    });
}

//On montre la bonne liste qui correspond au bouton et on cache les dexu autres et on mets en surbrillance le button séléctionné
expenseBtn.addEventListener('click', function(){
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseEl);
    hide([incomeEl, allEl]);
});
incomeBtn.addEventListener('click', function(){
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeEl);
    hide([expenseEl, allEl]);
});
allBtn.addEventListener('click', function(){
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
    show(incomeEl);
    hide([incomeEl,expenseEl]);
});