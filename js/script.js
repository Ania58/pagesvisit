const numberOfVisits = document.getElementById('contadorVisitas');
const buttonReestablish = document.getElementById('btnReestablecer');

let counter = localStorage.getItem('pageVisits');

if (counter === null) {
  counter = 0;
} else {
  counter = parseInt(counter);
}

counter++;

localStorage.setItem('pageVisits', counter);

numberOfVisits.innerText = counter;

function resetCounter() {
  localStorage.setItem('pageVisits', 0);
  numberOfVisits.innerText = 0;
}

buttonReestablish.addEventListener('click', resetCounter);
