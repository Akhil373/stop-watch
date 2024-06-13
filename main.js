const time = document.getElementById('time');
let secondsElapsed = 0;
let interval;
let isRunning = false;


function setTime() {
    const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
    time.innerHTML = `${minutes}:${seconds}`;
}


function updateTime() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if(!isRunning) {
        interval = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stopClock() {
    clearInterval(interval)
    isRunning = false;
}

function restartClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
    isRunning = false;
}