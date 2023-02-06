import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('input', onInputData);
form.addEventListener('submit', onSubmitForm);

let inputData = {};
let position = null;
let delay = null;

function onInputData(evt) {
  inputData[evt.target.name] = evt.target.value;
}

function onSubmitForm(evt) {
  evt.preventDefault();
  amountTimes();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  }); 
}

function isFulfill(position, delay) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function isReject(position, delay) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}

function amountTimes() {
  const amount = inputData.amount;
  delay = Number(inputData.delay);
    for(var i = 0; i < amount; i += 1){
      position = i + 1;
      delay = Number(inputData.delay) + Number(inputData.step)*i;
      createPromise(position, delay)
      .then(({ position, delay }) => {
        isFulfill(position, delay);
      })
      .catch(({ position, delay }) => {
        isReject(position, delay);
      });    };
}