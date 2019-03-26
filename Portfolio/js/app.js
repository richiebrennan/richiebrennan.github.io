const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuIcon = document.querySelector('i'); 

function openMenu(e) {
    menuItems.classList.toggle('open');
    e.preventDefault();
}

menu.addEventListener('click', openMenu);
