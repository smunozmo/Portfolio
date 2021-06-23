// Mobile Menu Variables
const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');
const linkMenu = document.querySelectorAll('.menu a');

// Modal Variables
const containerModal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.modal-open');
const infoModal = {
  title: 'Project name goes here',
  language: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  img: 'assets/img/Project2.png',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br>
  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
  liveUrl: '#',
  seeUrl: '#',
};

const contentModal = `
<div class="modal-container">
        <div class="modal-close"><img src="assets/img/Union.svg" alt=""></div>
        <h2>${infoModal.title}</h2>
        <ul class="project-lang">
          <li>${infoModal.language[0]}</li>
          <li>${infoModal.language[1]}</li>
          <li>${infoModal.language[2]}</li>
        </ul>
        <div class="big-pic">
          <img src="${infoModal.img}" alt="">
        </div>
        <ul class="thumbnails">
          <li><img src="${infoModal.img}" alt=""></li>
          <li><img src="${infoModal.img}" alt=""></li>
          <li><img src="${infoModal.img}" alt=""></li>
          <li><img src="${infoModal.img}" alt=""></li>
        </ul>
        <p class="intro">${infoModal.description}</p>
         <div class="modal-buttons">
           <button href="${infoModal.liveUrl}" type="button">See live<img src="assets/img/ic_link.svg" alt=""></button>
           <button href="${infoModal.seeUrl}" type="button">See code<img src="assets/img/ic_github_black.svg" alt=""></button>
         </div>
      </div>
`;

// Mobile Menu Functions
function menuOpen() {
  containerMenu.style.display = 'flex';
}
function menuClose() {
  containerMenu.style.display = 'none';
}

// Modal Functions
function modalClose() {
  containerModal.classList.remove('active');
  containerModal.innerHTML -= contentModal;
}

function modalOpen() {
  containerModal.innerHTML += contentModal;
  containerModal.style.display = 'flex';
  containerModal.classList.add('active');

  const closeModal = document.querySelector('.modal-close');
  closeModal.addEventListener('click', modalClose);
}

// Mobile Menu Events
linkMenu.forEach((link) => {
  link.addEventListener('click', menuClose);
});

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);

// Modal Events
openModal.forEach((button) => {
  button.addEventListener('click', modalOpen);
});