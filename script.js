const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.custom-navbar nav');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
})