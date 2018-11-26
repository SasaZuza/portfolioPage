// Variables that select Items from DOM (classes, item, tags from HTML page)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu - by default manu will be closed so it's false
let showMenu = false;

// When button is clicked click event and function bellow is activated
menuBtn.addEventListener('click', toggleMenu);

// Regulate the opening and closing menu button
function toggleMenu() {

    if (!showMenu) {
        // Adds all those elements to menu after button is clicked  
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State to true
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State to false
        showMenu = false;
    }
}