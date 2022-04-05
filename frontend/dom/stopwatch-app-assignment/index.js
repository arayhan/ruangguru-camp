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
	minute = parseInt(minute);
	second = parseInt(second);
	millisecond = parseInt(millisecond);

	millisecond++;

	if (millisecond >= 100) {
		second++;
		millisecond = 0;
	}

	if (second >= 60) {
		minute++;
		second = 0;
	}

	let minuteText = minute < 10 ? `0${minute}` : minute;
	let secondText = second < 10 ? `0${second}` : second;
	let millisecondText = millisecond < 10 ? `0${millisecond}` : millisecond;

	startbtn.disabled = true;
	stopwatch.innerHTML = `${minuteText}:${secondText}:${millisecondText}`;
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
	interval = setInterval(() => start(), 10);
}

startbtn.addEventListener("click", () => runTime());
stopbtn.addEventListener("click", () => stop());
resetbtn.addEventListener("click", () => reset());
