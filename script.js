var countDown = new Date("2024-10-24T13:00:00.000+02:00").getTime();
// atualiza a contagem a cada 1s
var updateCount = setInterval(() => {
  // pegar data e hora atual
  var dataTimeNow = new Date().getTime();
  //calcula o tempo entre a data atual e a contagem
  var distCalc = countDown - dataTimeNow;
  var days = Math.floor(distCalc / (1000 * 60 * 60 * 24));
  days = days < 10 ? "0"+days : days;
  var hours = Math.floor((distCalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = hours < 10 ? "0"+hours : hours;
  var minutes = Math.floor((distCalc % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? "0"+minutes : minutes;
  var seconds = Math.floor((distCalc % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0"+seconds : seconds;
  // mostra a contagem no elemento <p class="timer"></p>
  document.querySelector(".days-time").innerHTML = days;
  document.querySelector(".hours-time").innerHTML = hours;
  document.querySelector(".minutes-time").innerHTML = minutes;
  document.querySelector(".seconds-time").innerHTML = seconds;
});
