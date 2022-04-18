/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
	const repetition = numbers.reduce(function (acc, item) {
		if (acc[item]) {
			acc[item]++;
		} else {
			acc[item] = 1;
		}
		return acc;
	}, {});

	return repetition;
};

module.exports = countRepetition;
