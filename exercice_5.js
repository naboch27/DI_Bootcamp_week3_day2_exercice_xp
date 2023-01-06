/***
 * Exercice 5 : Auditeurs D'événements
 * Des Instructions
 * 
 */

let btn_1 = document.getElementById("btn_1")


btn_1.addEventListener("click", btnFonct_1);

btn_1.addEventListener("mouseover", btnFonct_2);

btn_1.addEventListener("mouseout", btnFonct_3);

btn_1.addEventListener("dblclick", btnFonct_4);


function btnFonct_1() {

    let bgPage = document.querySelector("div")

    bgPage.style.backgroundColor = "red"
}

function btnFonct_2() {

    let bgPage = document.querySelector("div")

    bgPage.style.backgroundColor = "yellow"
}
function btnFonct_3() {

    let bgPage = document.querySelector("div")

    bgPage.style.backgroundColor = "green"
}


function btnFonct_4() {

    let bgPage = document.querySelector("div")

    bgPage.style.backgroundColor = "silver"
}



