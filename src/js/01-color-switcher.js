function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const objBody = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalChangeColor = null;

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', onStopedChanges);

function onChangeColor () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalChangeColor = setInterval(() => {
        objBody.style.backgroundColor = getRandomHexColor();
    }, 1000
    )
};

function onStopedChanges () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalChangeColor);
};