/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 *
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
	while (true) {
		const reverseNum = Number(num.toString().split("").reverse().join(""));

		if (num.toString().length > 1 && num === reverseNum) {
			return reverseNum;
		}

		num += 1;
	}
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181
console.log(angkaPalindrome(9)); //181
console.log(angkaPalindrome(12)); //181
console.log(angkaPalindrome(347)); //181

module.exports = angkaPalindrome;
