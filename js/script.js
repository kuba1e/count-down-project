'use strict'
const daysElem = document.querySelector('.days--value');
const hoursElem = document.querySelector('.hours--value');
const minElem = document.querySelector('.minutes--value');
const secElem = document.querySelector('.sec--value');
const auth = 's1pbbU4vEycnHukx7uZoFuLqLXrSN2Nq';
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${auth}&limit=15&offset=5&rating=g`
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

async function getGifs(){
    const dataFetch = await fetch(url)
    .then(response =>{
        return  response.json()
    })
    .then(data =>{
      //  const imgUrl = data.data.url;
        const gifsArray = data.data;
      gifsArray.forEach(gif => {
        const elem = document.createElement('img');
        const gifContainer = document.querySelector('.gif--container')
        elem.setAttribute('src', gif.images.fixed_height.url);  
        gifContainer.appendChild(elem)
    });
    })
}


getGifs()