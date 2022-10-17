let btnMenu = document.getElementById("btnMenu");
let menu = document.querySelector(".menuMobile");
let closeMenu = document.getElementById("closeMenu");

btnMenu.addEventListener("click", function(){
    menu.classList.add("open")
})

closeMenu.addEventListener("click", function(){
    menu.classList.remove("open")
})