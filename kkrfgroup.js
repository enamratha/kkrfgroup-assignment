const workElement = document.getElementById("work-tab")
workElement.onmouseenter = function() {
    workElement.textContent = "Hard"
}
workElement.onmouseout = function() {
    workElement.textContent = "Work"
}

const studiosElement = document.getElementById("studios-tab")
studiosElement.onmouseenter = function() {
    studiosElement.textContent = "Play Harder"
}
studiosElement.onmouseout = function() {
    studiosElement.textContent = "Studios"
}

const recogElement = document.getElementById("recogition-tab")
console.log(recogElement)
recogElement.onmouseenter = function() {
    recogElement.textContent = "Yeah!"
}
recogElement.onmouseout = function() {
    recogElement.textContent = "Recognition"
}