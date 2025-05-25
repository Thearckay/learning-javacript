//Importanto elementos do HTML
const btCreateElement = document.getElementById('btCreateElement')
const containerElements = document.getElementById('divListElements')

//interatividade
btCreateElement.addEventListener('click', createElement)

//funções
function createElement() {
    let newElement = document.createElement('h5')

    newElement.textContent = 'Elemento Novo'
    newElement.classList.add('list-title')

    containerElements.appendChild(newElement)
}