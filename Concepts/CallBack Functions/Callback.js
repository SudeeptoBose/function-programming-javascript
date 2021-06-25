

const button = document.querySelector('button')

function toggle() {
    button.classList.toggle('difColor')
}

// toggle()

button.addEventListener('click', toggle)

button.addEventListener('click', () => {
    button.classList.toggle('difColor')
})

function toggle2(color) {
    button.classList.toggle('difColor')
}

button.addEventListener('click', toggle2('anotherAltColor'))


function firstAction(callback) {
    console.log('Im first action')
}

function secondAction() {
    console.log('Im second action')
}

setTimeout(firstAction, 5000) // Its a callback

setTimeout(firstAction(secondAction), 5000) // Its not a callback anymore
setTimeout(() => firstAction(secondAction), 5000) // Its a callback again


secondAction()