let daysItem = document.querySelector("#days");

let hoursItem = document.querySelector("#hours");

let minItem = document.querySelector("#min");

let secItem = document.querySelector("#sec");

 

let countDown = () => {

  let futureDate = new Date("May 23, 2023 01:58:00").getTime();

  let currentDate = new Date().getTime();

  let myDate = futureDate - currentDate;

  //console.log(myDate);

 

  let days =  Math.floor(myDate / (1000 * 60 * 60 * 24));

 

  let hours = Math.floor((myDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

 

  let min = Math.floor((myDate % (1000 * 60 * 60)) / (1000 * 60));

 

  let sec = Math.floor((myDate % (1000 * 60)) / 1000);

 

  daysItem.innerHTML = days;

  hoursItem.innerHTML = hours;

  minItem.innerHTML = min;

  secItem.innerHTML = sec;

 

  // redirect to another page after count down is finished

  if (myDate < 0) {

    clearInterval(countDown);

    window.location="surprise.html"

}

}

 

setInterval(countDown, 1000)





