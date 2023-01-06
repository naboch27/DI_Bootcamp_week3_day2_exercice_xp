/*****
 * Exercise 3 : Transform The Sentence
        Instructions
 */

/****
 * Declare a global variable named allBoldItems.
*Create a function called getBold_items() that takes no parameter. This function should collect 
all the bold items inside the paragraph and assign them to the allBoldItems variable.
*Create a function called highlight() that changes the color of all the bold text to blue.
*Create a function called return_normal() that changes the color of all the bold text back to black.
*Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
 and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
  Look at this example
 */

var allBoldItems

document.body.onload = getBold_items

function getBold_items() {

    allBoldItems = document.querySelectorAll("strong")

    for (let itemBold of allBoldItems) {

        console.log(itemBold.textContent)

    }
    highlight()
}

function highlight() {

    for (let allBoldItem of allBoldItems) {

        allBoldItem.style.color = "blue"

    }

    return_normal()

}

function return_normal() {

    for (let allBoldItem of allBoldItems) {

        allBoldItem.style.color = "black"
        
    }

}


/***
 * 
 * Appelez la fonction highlight()sur mouseover (c'est-à-dire lorsque le pointeur de la souris est
 *  déplacé sur le paragraphe) et la fonction return_normal()sur mouseout (c'est-à-dire lorsque le 
 * pointeur de la souris est déplacé hors du paragraphe). Regardez cet exemple
 */





