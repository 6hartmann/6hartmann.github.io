var countDown = new Date("dec 15, 2023 10:10:10").getTime();
// atualiza a contagem a cada 1s
var updateCount = setInterval(() => {
  // pegar data e hora atual
  var dataTimeNow = new Date().getTime();
  //calcula o tempo entre a data atual e a contagem
  var distCalc = countDown - dataTimeNow;
  var days = Math.floor(distCalc / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distCalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distCalc % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distCalc % (1000 * 60)) / 1000);
  // mostra a contagem no elemento <p class="timer"></p>
  document.querySelector(".days-time").innerHTML = days;
  document.querySelector(".hours-time").innerHTML = hours;
  document.querySelector(".minutes-time").innerHTML = minutes;
  document.querySelector(".seconds-time").innerHTML = seconds;
});

var modal = document.querySelector(".modal-container");
var btnRegister = document.querySelector(".btn");
btnRegister.addEventListener("click", function () {
  modal.style.display = "flex";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
