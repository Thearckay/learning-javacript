//Importando

    const button = document.getElementById('button')

//

//Adicionando interatividade

    button.addEventListener('click', changeBackground)

//

//Funções

    function changeBackground() {
        const background = document.getElementById('main-color')
        const colorInformation = document.getElementById('color-information')

        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

        button.style.backgroundColor = `rgb(${r -20}, ${g -20}, ${b -20})`

        colorInformation.textContent = `rgb(${r}, ${g}, ${b})`
    }

//