document.addEventListener("DOMContentLoaded", () => {
  let totalSeconds = 0;
  let timerId;
  let isTimerRunning = false;
  elapsedTime = 0;

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");

  const formatTime = (timer) => {
    if (timer < 10) {
      return `0${timer}`;
    }

    return timer;
  };

  startButton.addEventListener("click", () => {
    if (!isTimerRunning) {
      isTimerRunning = true;
      totalSeconds = Date.now() - elapsedTime;

      timerId = setInterval(() => {
        elapsedTime = Date.now() - totalSeconds;

        const hours = Math.floor(elapsedTime / 3600000);
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);

        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);
        document.getElementById("milliseconds").innerHTML =
          formatTime(milliseconds);
      }, 10);
    }
  });

  const stopTimer = () => {
    if (isTimerRunning) {
      clearInterval(timerId);
      isTimerRunning = false;
    }
  };

  stopButton.addEventListener("click", () => {
    stopTimer();
  });

  resetButton.addEventListener("click", () => {
    stopTimer();
    elapsedTime = 0;

    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";
  });
});
