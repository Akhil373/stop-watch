const time = document.getElementById('time');
let secondsElapsed = 0;
let interval;
let isRunning = false;
let count = 1


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
    if(count <= 10) {
        let paragraph = document.createElement("p");
        let text = document.createTextNode(`#${count} ${time.innerHTML}`);
        paragraph.appendChild(text);
        document.body.appendChild(paragraph);
    }

    clearInterval(interval)
    count ++;
    isRunning = false;
}

function restartClock() {
    stopClock()

    let paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(paragraph => {
        paragraph.remove()
    })

    secondsElapsed = 0;
    setTime()
    count = 1;
    isRunning = false;
}