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