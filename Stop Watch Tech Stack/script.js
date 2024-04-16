let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startStop() 
{
    if (!isRunning) 
    {
        timer = setInterval(updateTime, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById("startStop").innerHTML = "Start";
        isRunning = false;
    }
}

function reset() 
{
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("display").innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
    document.getElementById("startStop").innerHTML = "Start";
    isRunning = false;
}

function updateTime() 
{
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("display").innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);