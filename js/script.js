const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');
const linkMenu = document.querySelectorAll('.menu a');

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);


function menuOpen(){
    containerMenu.style.display = 'flex';
}
function menuClose(){
    containerMenu.style.display = 'none';
}

linkMenu.forEach((link) => {
    link.addEventListener('click', menuClose)
});
