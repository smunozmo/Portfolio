// Mobile Menu Variables
const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');
const linkMenu = document.querySelectorAll('.menu a');

// Modal Variables
const containerModal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.modal-open');
class Project {
  constructor(title, language, image, description, liveUrl, seeUrl) {
    this.title = title;
    this.language = language;
    this.image = image;
    this.description = description;
    this.liveUrl = liveUrl;
    this.seeUrl = seeUrl;
  }
}

const project1 = new Project(
  'Project name goes here',
  ['HTML', 'Ruby On Rails', 'JavaScript'],
  'assets/img/Project2.png',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  'https://github.com',
  'https://microverse.org',
);

const project2 = new Project(
  'Project name goes here',
  ['HTML', 'Ruby On Rails', 'JavaScript'],
  'assets/img/Project2.png',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  'https://github.com',
  'https://microverse.org',
);

const project3 = new Project(
  'Project name goes here',
  ['HTML', 'Ruby On Rails', 'JavaScript'],
  'assets/img/Project2.png',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  'https://github.com',
  'https://microverse.org',
);

const project4 = new Project(
  'Project name goes here',
  ['HTML', 'Ruby On Rails', 'JavaScript'],
  'assets/img/Project2.png',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  'https://github.com',
  'https://microverse.org',
);

const infoModal = [project1, project2, project3, project4];

const contentModal = `
<div class="modal-container">
        <div class="modal-close"><img src="assets/img/Union.svg" alt=""></div>
        <h2>${infoModal[0].title}</h2>
        <ul class="project-lang">
          <li>${infoModal[0].language[0]}</li>
          <li>${infoModal[0].language[1]}</li>
          <li>${infoModal[0].language[2]}</li>
        </ul>
        <div class="big-pic">
          <img src="${infoModal[0].image}" alt="">
        </div>
        <ul class="thumbnails">
          <li><img src="${infoModal[0].image}" alt=""></li>
          <li><img src="${infoModal[0].image}" alt=""></li>
          <li><img src="${infoModal[0].image}" alt=""></li>
          <li><img src="${infoModal[0].image}" alt=""></li>
        </ul>
        <p class="intro">${infoModal[0].description}</p>
         <div class="modal-buttons">
           <button href="${infoModal[0].liveUrl}" type="button">See live<img src="assets/img/ic_link.svg" alt=""></button>
           <button href="${infoModal[0].seeUrl}" type="button">See code<img src="assets/img/ic_github_black.svg" alt=""></button>
         </div>
         <div class="modal-links">
           <a href="#"><img src="assets/img/ic_arrow_left.svg" alt=""> Previous project</a>
           <a href="#">Next project <img src="assets/img/ic_arrow_right.svg" alt=""></a>
         </div>
      </div>`;

// Mobile Menu Functions
function menuOpen() {
  containerMenu.style.display = 'flex';
}
function menuClose() {
  containerMenu.style.display = 'none';
}

// Modal Functions
function modalClose() {
  containerModal.innerHTML -= contentModal;
  containerModal.classList.remove('active');
}

function modalOpen() {
  containerModal.innerHTML += contentModal;
  containerModal.style.display = 'flex';
  containerModal.classList.add('active');

  const closeModal = document.querySelector('.modal-close');
  closeModal.addEventListener('click', modalClose);
  containerModal.classList.add('active');
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

// Form Validation
const mail = document.getElementById('mail');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  if (mail.value.toLowerCase() !== mail.value) {
    submitBtn.setCustomValidity('Oops! Email should be lowercase only please.');
  } else {
    submitBtn.setCustomValidity('');
  }
});

//  Local Storage
const input = document.getElementById('name');
const email = document.getElementById('mail');
const msg = document.getElementById('msg');
const form = document.getElementById('form');

function updateValue() {
  const formObject = {
    name: input.value,
    email: email.value,
    msg: msg.value,
  };

  localStorage.setItem('formObject', JSON.stringify(formObject));
}

form.addEventListener('input', updateValue);

const thisObject = JSON.parse(localStorage.getItem('formObject'));

if (localStorage.getItem('theObject.name') !== '') {
  input.value = thisObject.name;
}
if (localStorage.getItem('theObject.email') !== '') {
  email.value = thisObject.email;
}
if (localStorage.getItem('theObject.msg') !== '') {
  msg.value = thisObject.msg;
}