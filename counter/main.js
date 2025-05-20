//Importando Elementos
    const numberElement = document.getElementById('number')
    const addButton = document.getElementById('addButton')
    const resetButton = document.getElementById('resetButton')
    const removeButton = document.getElementById('removeButton')
    const lightDarkButton = document.getElementById('day-night-button')
    const documentElement = document.documentElement
//

//Variáveis Globais
    let contador = 0
    let lightIsOn = true
//


//Add interações 
    addButton.addEventListener('click', addNumber)
    resetButton.addEventListener('click', resetCounter)
    removeButton.addEventListener('click', removeNumber)
    lightDarkButton.addEventListener('click', changeLightMode)
//


//Funçoes 

    function addNumber() {
        contador++
        numberElement.textContent = contador
        changeFontColor()
    }
    function resetCounter() {
        contador = 0
        numberElement.textContent = contador
    }
    function removeNumber() {
        contador--
        numberElement.textContent = contador
        changeFontColor()
    }

    function changeLightMode() {
        //Dark mode
        if (lightIsOn === true) {
            documentElement.style.setProperty('--black-shadow-inset', 'inset 0px 0px 10px 1px rgba(255, 255, 255, 0.36)')
            documentElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(255, 255, 255, 0.4)')
            documentElement.style.setProperty('--color', 'white')
            documentElement.style.setProperty('--background-color', 'black')
            // documentElement.style.setProperty('--main-counter-color', 'white')

            lightDarkButton.textContent = 'Dark'


            lightIsOn = false
        } else if (lightIsOn === false) { //Light mode
            documentElement.style.setProperty('--black-shadow-inset', 'inset 0px 0px 10px 1px rgba(0, 0, 0, 0.115)')
            documentElement.style.setProperty('--shadow-black-out', '1px 1px 10px rgba(0, 0, 0, 0.103)')
            documentElement.style.setProperty('--color', 'black')
            documentElement.style.setProperty('--background-color', 'white')
            // documentElement.style.setProperty('--main-counter-color', 'black')

            lightDarkButton.textContent = 'Light'

            lightIsOn = true
        }
    }

    setInterval(changeFontColor, 10)

    function changeFontColor() {
        
        if (lightIsOn === false) { //Dark mode
            if (contador < 0) {
                documentElement.style.setProperty('--main-counter-color', 'red')

            } else if (contador >= 0) {
                documentElement.style.setProperty('--main-counter-color', 'white')

            }
        } else if (lightIsOn === true) { //Light Mode
            if (contador < 0) {
                documentElement.style.setProperty('--main-counter-color', 'red')

            } else if (contador >= 0) {
                documentElement.style.setProperty('--main-counter-color', 'black')

            }
        }
    }

//