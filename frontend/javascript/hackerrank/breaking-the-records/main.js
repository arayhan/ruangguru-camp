// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
	// Write your code here
	let min = scores[0];
	let max = scores[0];
	let minCount = 0;
	let maxCount = 0;

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > max) {
			max = scores[i];
			maxCount++;
		}
		if (scores[i] < min) {
			min = scores[i];
			minCount++;
		}
	}

	return [maxCount, minCount];
}

function main() {
	//     var n = parseInt(readLine());
	//     s = readLine().split(' ');
	//     s = s.map(Number);
	var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
	var result = breakingRecords(scores);
	console.log(result.join(" ") + "\n");
}

main(); // execute program

module.exports = breakingRecords;
