const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY>60)

}); 


const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

// Rest of your JavaScript code...




