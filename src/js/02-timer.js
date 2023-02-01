import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

Notiflix.Notify.failure('Please choose a date in the future');
const options = {
    enableTime: true,                   // Enables time picker
    time_24hr: true,                // Displays time picker in 24 hour mode without AM/PM selection when enabled.
    defaultDate: new Date(),        // Sets the initial selected date(s).
    minuteIncrement: 1,             // Adjusts the step for the minute input (incl. scrolling)
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },                              // Function(s) to trigger on every time the calendar is closed. See Events API
};

flatpickr("#datetime-picker", options);


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}  