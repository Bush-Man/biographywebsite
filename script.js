const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".navLinks");
const navItems = document.querySelectorAll(".item");
 
const homeBtn = document.getElementById("homelink")



homeBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    
});

openMenu.addEventListener("click", () => {
    menu.style.display = "block";
    closeMenu.style.display = "block";

});

