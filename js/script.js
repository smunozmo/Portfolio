const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);

function menuOpen(){
    containerMenu.style.display = 'flex';
}
function menuClose(){
    containerMenu.style.display = 'none';
}
