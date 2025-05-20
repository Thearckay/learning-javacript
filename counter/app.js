//Importando elementos do HTML
const numberElement = document.getElementById('number')

const addButton = document.getElementById('addButton')
const resetButton = document.getElementById('resetButton')
const removeButton = document.getElementById('removeButton')

const dayNightButton = document.getElementById('day-night-button')
//

// Adicionando interatividade

addButton.addEventListener('click', addNumber)
resetButton.addEventListener('click', reset)
removeButton.addEventListener('click', removeNumber)

dayNightButton.addEventListener('click', lightDarkMode)

//

let contador = 0

//funções
function addNumber() {
    //contador++
    contador = contador + 1
    numberElement.textContent = contador
}

function reset() {
    contador = 0
    numberElement.textContent = contador

}

function removeNumber() {
    --contador
    numberElement.textContent = contador
}

function changeColor() {
   
}

setInterval(1000, functionIsOn)

let isOn = true // True = light | false = dark
function functionIsOn() {
    if (contador < 0) {
        numberElement.style.color = 'red'
        lightDarkMode()
    } else if (contador > 0) {
        numberElement.style.color = 'black'
    }
}

function lightDarkMode() {
    

    if(isOn === true) {
        const rootElement = document.documentElement
        rootElement.style.setProperty('--background-color', 'black')
        rootElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(255, 255, 255, 0.33)')
        rootElement.style.setProperty('--black-shadow-inset', 'inset 1px 1px 10px 1px rgba(255, 255, 255, 0.33)')
        rootElement.style.setProperty('--color', 'white')

        const dayNightButton = document.getElementById('day-night-button')
        dayNightButton.textContent = 'Dark'

        isOn = false
    } else {
        const rootElement = document.documentElement

        rootElement.style.setProperty('--background-color', 'white')
        rootElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(0, 0, 0, 0.33)')
        rootElement.style.setProperty('--black-shadow-inset', 'inset 1px 1px 10px 1px rgba(0, 0, 0, 0.33)')
        rootElement.style.setProperty('--color', 'black')

        const dayNightButton = document.getElementById('day-night-button')
        dayNightButton.textContent = 'Light'

        isOn = true
    }
    
}
//