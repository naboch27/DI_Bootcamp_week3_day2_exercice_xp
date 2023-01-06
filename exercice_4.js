/****
 * Exercice 4 : Volume D'une Sphère
 * Des Instructions
 * Écrivez un programme JavaScript pour calculer le volume d'une sphère. 
 * 
 */

let radius = document.getElementById("radius")

let volume = document.getElementById("volume")

let sphereVolume = document.getElementById("submit")

sphereVolume.addEventListener("click", volumeSphereFunct)

function volumeSphereFunct(e) {

    e.preventDefault()

    //console.log(radius.value)
    let volumes = ((4 * 3.14 * radius.value * radius.value) / 3)

    console.log(volumes)

    volume.value = volumes

}


