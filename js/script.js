'use strict'
const daysElem = document.querySelector('.days__value');
const hoursElem = document.querySelector('.hours--value');
const minElem = document.querySelector('.minutes--value');
const secElem = document.querySelector('.sec--value');

const countDown = ()=>{
    const endTime = new Date(2022, 8, 1, 0).getTime();
    const nowTime = Date.now()

    const gap = endTime - nowTime;
    const sec  = 1000;
    const min = 60*sec;
    const hrs = 60*min;
    const days = 24*hrs;

    const daysLeft = Math.floor(gap/days);
    const hoursLeft = Math.floor((gap % days)/hrs );
    const minLeft = Math.floor((gap%hrs)/min);
    const secLeft = Math.floor((gap%min)/sec);

    daysElem.textContent = daysLeft;
    hoursElem.textContent = hoursLeft;
    minElem.textContent = minLeft;
    secElem.textContent = secLeft;
};

setInterval(countDown, 1000)