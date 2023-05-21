/*// Set the date we're counting down to

var countDownDate = new Date("june 02, 2023 00:00:00").getTime();

 

// Update the count down every 1 second

var x = setInterval(function() {

 

  // Get today's date and time

  var now = new Date().getTime();

 

  // Find the distance between now and the count down date

  var distance = countDownDate - now;

 

  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 

  // Display the result in the element with id="demo"

     document.getElementById("demo").innerHTML = days + "d " + hours + "h "

    + minutes + "m " + seconds + "s";

    // document.getElementById("demo").innerHTML = days + "     " + hours + "     "

    // + minutes + "      " + seconds + "       "+ "Days "+"Hours "+"Minutes "+"Seconds ";

  

 

  // If the count down is finished, write some text or redirect to another page

  if (distance < 0) {

    clearInterval(x);

    //document.getElementById("demo").innerHTML = "Click for Surprise";

    window.location="surprise.html"

   

  }

}, 1000);*/




































let daysItem = document.querySelector("#days");

let hoursItem = document.querySelector("#hours");

let minItem = document.querySelector("#min");

let secItem = document.querySelector("#sec");

 

 

let countDown = () => {

  let futureDate = new Date("May 21, 2023 23:17:00").getTime();

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

 

  // If the count down is finished, write some text or redirect to another page

  if (myDate < 0) {

    clearInterval(countDown);

    window.location="surprise.html"

}

}

 

 

 

 

setInterval(countDown, 1000)





