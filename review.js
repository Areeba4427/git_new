const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hour");
const minsEL = document.getElementById("mins");
const secEL =  document.getElementById("sec");



const newYears = "1 Jan 2022";

function countdown() {

    const NewYearDate = new Date(newYears);
    const CurrentDate = new Date();
    const second = (NewYearDate - CurrentDate) / 1000;

    const days = Math.floor(second / 86400);
    const hours = Math.floor(second / 3600) % 24;
    const minutes = Math.floor(second / 60) % 60;
    const seconds = Math.floor(second) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = Timeformat(hours);
    minsEL.innerHTML = Timeformat(minutes);
    secEL.innerHTML = Timeformat(seconds);

}
function Timeformat(time){

    return time < 10 ? '0' + time : time ; 

}
countdown();

setInterval(countdown, 1000);

