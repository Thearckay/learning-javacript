//Opening Header
const btOpenHeader = document.getElementById('btOpenHeader')
btOpenHeader.addEventListener('click', openHeader)

function openHeader(){
    btOpenHeader.style.display = 'none'

    const header = document.getElementById('header')
    header.style.display = 'flex'

    const sectionMain = document.getElementById('main')
    sectionMain.style.paddingLeft = '32%'

}

//Adding New Elements

const txtInput = document.getElementById('txtInput')
const btAddInput = document.getElementById('btAddInput')
const listElements = document.getElementById('listElements')

btAddInput.addEventListener('click', creatElement)

function creatElement() {

    if (txtInput.value === ''){
        alert('Preencha o campo antes de adicionar o item')
    } else {
        const txtElement = txtInput.value

        const divEl = document.createElement('div')
        divEl.classList.add('element')

        const tittleEl = document.createElement('h4')
        tittleEl.textContent = `${txtElement}`

        divEl.appendChild(tittleEl)
        listElements.appendChild(divEl)
        
        txtInput.value = ''
    }
    
}

