document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burger-icon");
    const sidebar = document.getElementById("sidebar");
    const navbarRight = document.getElementById("navbar-right");
    const closeBtn = document.getElementById("closebtn");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("change");
        sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
    });

    closeBtn.addEventListener("click", () => {
        sidebar.style.display = "none";
        burgerIcon.classList.remove("change");
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});