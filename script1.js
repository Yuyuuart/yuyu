const hamburger1 = document.querySelector(".hamburger1");
const navMenu = document.querySelector(".nav-menu1");

hamburger1.addEventListener("click", () => {
    hamburger1.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger1.classList.remove("active");

    navMenu.classList.remove("active");
}))