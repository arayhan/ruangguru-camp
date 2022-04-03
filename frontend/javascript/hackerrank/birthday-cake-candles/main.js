// Birthday Cake Candles
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
	if (!candles || !candles.length) return "invalid data";

	candles.sort((a, b) => b - a);

	let max = candles[0];
	let count = 0;

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] === max) {
			count++;
		} else {
			break;
		}
	}

	return count;
}

function main() {
	//var n = parseInt(readLine());
	//arr = readLine().split(' ');
	//arr = arr.map(Number);
	var arr = [3, 2, 1, 3]; // override input
	var result = birthdayCakeCandles(arr);
	console.log(result);
}

main(); // execute program

module.exports = birthdayCakeCandles;
