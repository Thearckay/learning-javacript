//Importando Elementos
const numberElement = document.getElementById('number')
const addButton = document.getElementById('addButton')
const resetButton = document.getElementById('resetButton')
const removeButton = document.getElementById('removeButton')
const lightDarkButton = document.getElementById('day-night-button')
const documentElement = document.documentElement

//Variáveis Globais
let contador = 0
let lightIsOn = true

//Add interações 
addButton.addEventListener('click', addNumber)
resetButton.addEventListener('click', resetCounter)
removeButton.addEventListener('click', removeNumber)
lightDarkButton.addEventListener('click', changeLightMode)



//Funçoes 

function addNumber() {
    contador++
    numberElement.textContent = contador
}
function resetCounter() {
    contador = 0
    numberElement.textContent = contador
}
function removeNumber() {
    contador--
    numberElement.textContent = contador
}


function changeLightMode() {
    //Dark mode
    if(lightIsOn === true) {
        documentElement.style.setProperty('--black-shadow-inset', 'inset 0px 0px 10px 1px rgba(255, 255, 255, 0.36)')
        documentElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(255, 255, 255, 0.4)')
        documentElement.style.setProperty('--color', 'white')
        documentElement.style.setProperty('--background-color', 'black')

        lightDarkButton.textContent = 'Dark'

        lightIsOn = false
    } else if (lightIsOn === false) { //Light mode
        documentElement.style.setProperty('--black-shadow-inset', 'inset 0px 0px 10px 1px rgba(0, 0, 0, 0.115)')
        documentElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(0, 0, 0, 0.103)')
        documentElement.style.setProperty('--color', 'black')
        documentElement.style.setProperty('--background-color', 'white')

        lightDarkButton.textContent = 'Light'


        lightIsOn = true
    }
}
