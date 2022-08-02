import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const startBtn = document.querySelector('button[type="submit"]');

let delay = 0;
let step = 0;
let amount = 0;

form.addEventListener("input", input);
startBtn.addEventListener('click', start);

function input(event) {
  event.preventDefault();
  delay = Number(form.delay.value);
  step = Number(form.step.value);
  amount = Number(form.amount.value);
}

function start(event) {
  event.preventDefault();
  for (let i = 0; i < amount; i++) {
    if (i + 1 === amount) {
      delay = 0;
    }
    createPromise(i + 1, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
    }, delay);
  });

  promise
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
}
