const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".main-nav");

const navHeader = document.querySelector(".main-header__content")

const navHeaderButton = document.querySelector(".main-header__content nav")

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    navHeader.classList.toggle("active")
    navHeaderButton.classList.toggle("active")
});