const toggleMenu = document.getElementById('toggle-menu');
const navbarLinks = document.getElementById('navbar-mobile').querySelector(".navbar-links");

toggleMenu.addEventListener('click', () => {
    navbarLinks.style.display = navbarLinks.style.display == "none" ? "flex" : "none"
});