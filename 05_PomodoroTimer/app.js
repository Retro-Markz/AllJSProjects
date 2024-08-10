const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let intervarl;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")} `;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  intervarl = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(intervarl);
      alert("Time is up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervarl);
}

function resetTimer() {
  clearInterval(intervarl);
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
