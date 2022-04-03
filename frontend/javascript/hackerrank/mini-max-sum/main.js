// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
	if (!arr || !arr.length) return "invalid data";

	let min = 0;
	let max = 0;

	for (let i = 0; i <= arr.length; i++) {
		if (i < arr.length - 1) {
			min += arr[i];
		}

		if (i > 0 && arr.length - 1) {
			if (arr[i]) max += arr[i];
		}
	}

	return `${min} ${max}`;
}

function main() {
	//arr = readLine().split(' ');
	//arr = arr.map(Number);
	// var arr = [1, 2, 3, 4, 5]; // override input
	var arr = [7, 69, 2, 221, 8974]; // override input
	// var arr = [1, 3, 5, 7, 9]; // override input
	let result = miniMaxSum(arr);
	console.log(result);
}

main(); // execute program

module.exports = miniMaxSum;
