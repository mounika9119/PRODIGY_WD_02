let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const formattedTime = new Date(time).toISOString().substr(11, 8);
    document.getElementById('display').textContent = formattedTime;
}

function lapTimer() {
    const lapTime = elapsedTime;
    const formattedLapTime = new Date(lapTime).toISOString().substr(11, 8);
    const lapList = document.getElementById('lapTimes');
    const li = document.createElement('li');
    li.textContent = formattedLapTime;
    lapList.appendChild(li);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', lapTimer);
