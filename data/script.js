const menuIconDespegable = document.getElementById('menu_despegable_icon')
const menuDespegable = document.getElementById('menu_despegable')
const menuIconDespegableClose = document.getElementById('menu_despegable_icon-close')

menuIconDespegable.addEventListener('click', function () {
    if (menuDespegable.style.transform === 'translate(-100em)') {
        menuDespegable.style.transform = 'translate(0%)'
    } else {
        menuDespegable.style.transform = 'translate(-100em)'
    }
})

menuIconDespegableClose.addEventListener('click', function () {
    if (menuDespegable.style.transform === 'translate(0em)') {
        menuDespegable.style.transform = 'translate(-100%)'
    } else {
        menuDespegable.style.transform = 'translate(0em)'
    }
});