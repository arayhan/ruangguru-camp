// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
			}
		}
	}

	return arr;
}

function rotateLeft(d, arr) {
	if (arr.length) {
		while (true) {
			const firstIndex = arr.shift();
			arr.push(firstIndex);

			if (arr[arr.length - 1] === d) return arr;
		}
	}

	return arr;
}

let nums = [4, 5, 2, 1, 3];
let sorted = sort(nums);
console.log(sorted);
rotated = rotateLeft(4, sorted);
console.log(rotated);

module.exports = { sort, rotateLeft };
