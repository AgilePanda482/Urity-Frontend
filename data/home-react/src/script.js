const menuIconDespegable = document.getElementById('menu_despegable_icon')
const menuDespegable = document.getElementById('menu_despegable')
const menuIconDespegableClose = document.getElementById('menu_despegable_icon-close')

menuIconDespegable.addEventListener('click', function () {
        menuDespegable.style.transform = 'translate(0%)'
        // menuDespegable.style.transform = 'translate(-100em)'
})

menuIconDespegableClose.addEventListener('click', function () {
        menuDespegable.style.transform = 'translate(-100%)'
        // menuDespegable.style.transform = 'translate(0em)'
});