/****
 * Récupérez le formulaire et consolez-le.

Récupérez les entrées par leur identifiant et console.log les.

Récupérez les entrées par leur nameattribut et console.log les.

Lorsque l'utilisateur soumet le formulaire (c'est-à-dire submitécouteur d'événement)
utiliser event.preventDefault(), pourquoi ?
obtenir les valeurs des balises d'entrée,
assurez-vous qu'ils ne sont pas vides,
créer une livaleur par entrée,
puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form.
 */

let form = document.forms[0]; // the first form on the page

console.log(form)

let newInput = document.getElementById('fname')
let newInput1 = document.getElementById('lname')

console.log(newInput)
console.log(newInput1)

let elem1 = form.elements.fname;
let elem2 = form.elements.lname;


console.log(elem1)
console.log(elem2)

/*****
 * Lorsque l'utilisateur soumet le formulaire (c'est-à-dire submitécouteur d'événement)
utiliser event.preventDefault(), pourquoi ?
obtenir les valeurs des balises d'entrée,
assurez-vous qu'ils ne sont pas vides,
créer une livaleur par entrée,
puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form.
 */

let submitForm = document.querySelector("#submit")

submitForm.addEventListener("click", submitFormFunction);

function submitFormFunction(event) {

    event.preventDefault()

    let inputs = form.querySelectorAll('input[type=text]');

    for (let input of inputs) {

        if (input != "") {

            console.log(input.value);

        } else {

            console.log("good bye");

        }


    }
}




