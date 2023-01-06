/******
 * 
 * Exercise 1 : Change The Article
 */

//let recup_h1 = document.querySelector("h1").innerHTML

//console.log(recup_h1)

let supLastElement = document.querySelector("article p:last-child").remove()

console.log(supLastElement)


let EventDelete = document.querySelector("h2")

EventDelete.addEventListener("click", deleteTag);

function deleteTag() {
    
    EventDelete.style.backgroundColor = "red"
}

let EventCacher = document.querySelector("h3")

EventCacher.addEventListener("click", deleteCacher);

function deleteCacher() {

    EventDelete.style.display = "none"
}


// crée un nouvel élément div
let newButton = document.createElement("button");
// et lui donne un peu de contenu
let newContent = document.createTextNode('Text Bold');
// ajoute le nœud texte au nouveau div créé
newButton.appendChild(newContent);

// ajoute le nouvel élément créé et son contenu dans le DOM
//var currentDiv = document.getElementById('div1');
//document.body.insertBefore(newDiv, currentDiv);

document.body.appendChild(newButton)

let boldText = document.querySelector("button")

boldText.addEventListener("click", textBold);

function textBold() {
    let articleBold = document.querySelector("article")

    articleBold.style.fontWeight = "bold"

    //console.log(articleBold)
    //boldText.style.fontWeight="bold"  
}

/****
 * BONUS : Lorsque vous survolez le h1, définissez la taille de la police 
 * sur une taille de pixel aléatoire comprise entre 0 et 100. (Consultez cette documentation )
 */

let textPixel = document.querySelector("h1")

textPixel.addEventListener("mouseover", textPixelFuction);

function textPixelFuction() {
    let aleatoireValue= Math.floor(Math.random()*100)
    textPixel.style.fontSize = `${aleatoireValue}px`
    //console.log(textPixel)
    //boldText.style.fontWeight="bold"  
}

/*****
 * BONUS : lorsque vous survolez le 2e paragraphe,
 *  il devrait s'estomper (consultez "fade css animation" sur Google)
 */

