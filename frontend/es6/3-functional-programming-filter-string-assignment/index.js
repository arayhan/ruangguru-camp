/**
 * Ambil semua element yang bukan angka dalam array
 * Contoh
 *  input: [s, df, g, 9, 10, 1D1, 27]
 *  output: [s, df, g, 1D1]
 *
 */

const filterString = (array) => {
	return array.filter(function (item) {
		return typeof item === "string";
	});
};

module.exports = filterString;
