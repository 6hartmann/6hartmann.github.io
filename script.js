// set countdown time to the new zealand console launch
var countDown = new Date("2024-10-24T13:00:00.000+02:00").getTime();

// countdown logic
var updateCount = setInterval(() => {
  var dataTimeNow = new Date().getTime();
  var distCalc = countDown - dataTimeNow;
  var days = Math.floor(distCalc / (1000 * 60 * 60 * 24));
  days = days < 10 ? "0"+days : days;
  var hours = Math.floor((distCalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = hours < 10 ? "0"+hours : hours;
  var minutes = Math.floor((distCalc % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? "0"+minutes : minutes;
  var seconds = Math.floor((distCalc % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0"+seconds : seconds;
  document.querySelector(".days-time").innerHTML = days;
  document.querySelector(".hours-time").innerHTML = hours;
  document.querySelector(".minutes-time").innerHTML = minutes;
  document.querySelector(".seconds-time").innerHTML = seconds;
});
