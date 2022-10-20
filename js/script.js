
let linkMain = document.querySelector(".link-Main");
let mainBurger = document.querySelector("#mainBurger");

mainBurger.addEventListener('click',()=> {
    linkMain.classList.toggle('mobile-main')
})