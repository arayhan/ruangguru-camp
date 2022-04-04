/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let startTime = stopwatch.innerHTML.split(":");
let minute = startTime[0];
let second = startTime[1];
let millisecond = startTime[2];
let interval;

function start() {
	millisecond++;
	startbtn.disabled = true;
	stopwatch.innerHTML = `${minute}:${second}:${millisecond}`;
}

function stop() {
	clearInterval(interval);
	startbtn.disabled = false;
	console.log(interval);
}

function reset() {
	clearInterval(interval);
	startbtn.disabled = false;
	minute = "00";
	second = "00";
	millisecond = "00";
	stopwatch.innerHTML = `${minute}:${second}:${millisecond}`;
}

function runTime() {
	interval = setInterval(() => start(), 100);
}

startbtn.addEventListener("click", () => runTime());
stopbtn.addEventListener("click", () => stop());
resetbtn.addEventListener("click", () => reset());
