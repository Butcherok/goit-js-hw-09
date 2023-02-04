import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

let ms = null;
let selectedDate = null;
let timerIntervalId = null;

const setDataTime = document.getElementById('datetime-picker');
const setTimeBtn = document.querySelector('button[data-start]');
const daysValue = document.querySelector('.value[data-days]');
const hoursValue = document.querySelector('.value[data-hours]');
const minsValue = document.querySelector('.value[data-minutes]');
const secsValue = document.querySelector('.value[data-seconds]');

const options = {
    enableTime: true,                   // Enables time picker
    time_24hr: true,                // Displays time picker in 24 hour mode without AM/PM selection when enabled.
    defaultDate: new Date(),        // Sets the initial selected date(s).
    minuteIncrement: 1,             // Adjusts the step for the minute input (incl. scrolling)
    onClose(selectedDates) {
        selectedDate = new Date(selectedDates[0]).getTime();
        ms = selectedDate - Date.now();
    
        if (ms > 0) {
            setTimeBtn.disabled = false;
            Notiflix.Notify.success('All is Ok, Let get STARTED');
        } else {
            setTimeBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        }
    },                              // Function(s) to trigger on every time the calendar is closed. See Events API
    onOpen() {
        clearInterval(timerIntervalId);
        daysValue.textContent = '00';
        hoursValue.textContent = '00';
        minsValue.textContent = '00';
        secsValue.textContent = '00';
    }
};

flatpickr("#datetime-picker", options);

setTimeBtn.addEventListener('click', onBtnClick);
setTimeBtn.disabled = true;

function convertMs(ms) {
    ms = selectedDate - Date.now();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}  


function onBtnClick(e) {
    e.preventDefault();
    setTimeBtn.disabled = true;
    timerIntervalId = setInterval(countDownEvent, 1000);
}

function countDownEvent() {
    daysValue.textContent = convertMs().days;
    hoursValue.textContent = convertMs().hours;
    minsValue.textContent = convertMs().minutes;
    secsValue.textContent = convertMs().seconds;

    if (daysValue.textContent === '00'
        && hoursValue.textContent === '00'
        && minsValue.textContent === '00'
        && secsValue.textContent === '00') {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timerIntervalId);
    Notiflix.Notify.success('You have reached your destination!');

}