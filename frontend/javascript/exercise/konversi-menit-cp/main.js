/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal:
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 *
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */

function konversiMenit(menit) {
	let jam = Math.floor(menit / 60);
	let menitSisa = menit % 60;

	if (menitSisa < 10) {
		menitSisa = "0" + menitSisa;
	}

	return jam + ":" + menitSisa;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;
