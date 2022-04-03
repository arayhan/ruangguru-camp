// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
	// Write your code here
	if (!s) {
		return "";
	}

	let time = s.split(":");
	let hour = parseInt(time[0]);
	let minutes = time[1];
	let seconds = time[2].slice(0, 2);
	let ampm = time[2].slice(2);

	if (ampm === "AM") {
		if (hour === 12) {
			hour = "00";
		} else if (hour < 10) {
			hour = `0${hour}`;
		}
	} else {
		if (hour !== 12) {
			hour += 12;
		}
	}

	return `${hour}:${minutes}:${seconds}`;
}

function main() {
	//var s = readLine();
	// var s = "07:05:45PM"; // override input
	// var s = "12:20:50AM"; // override input
	var s = "06:40:03AM"; // override input
	var result = timeConversion(s);
	console.log(result);
}

main(); // execute program

module.exports = timeConversion;
