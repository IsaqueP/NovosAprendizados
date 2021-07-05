let btnMenuOpen = document.querySelector(".menu_open")
let btnMenuClose = document.querySelector(".menu_close")
let listMenu = document.querySelector(".listMenu")

btnMenuOpen.addEventListener("click", function(){
    listMenu.classList.add("open")
})

btnMenuClose.addEventListener("click", function(){
    listMenu.classList.remove("open")
})

