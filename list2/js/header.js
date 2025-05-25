//Close header
const btCloseHeader = document.getElementById('btCloseHeader')
btCloseHeader.addEventListener('click', closeHeader)

let headerIsOpen = true

function closeHeader() {
    const header = document.getElementById('header')
    header.style.display = 'none'
    headerIsOpen = false

    btOpenHeader.style.display = 'flex'

    const sectionMain = document.getElementById('main')
    sectionMain.style.paddingLeft = '0%'

    if (window.innerWidth < 700) {
        listElements.style.paddingLeft = '1em'
    } else {
        listElements.style.paddingLeft = '1em'
    }
}


