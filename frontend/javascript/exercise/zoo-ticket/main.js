/**
 * Tuliskan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, Sebuah kebun binatang ingin mengganti harga tiketnya. Saat ini, kebun binatang tersebut memiliki HARGA DASAR
 * Rp 10.000. Harga tiket masuk akan disesuaikan dengan umur dari pengunjung tersebut. Kamu diminta untuk membuat program yang akan menghitung
 * harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA dan TAHUN KELAHIRAN.
 *
 * -Umur < 2 tahun: gratis
 * -Umur 2-10:  Harga dasar
 * -Umur 11-18:  Harga dasar dikalikan 1.5
 * -Umur 19 keatas: Harga dasar dikalikan 2
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age'
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

const basePrice = 10000;
const currentYear = new Date().getFullYear();

function calculateTicketPrice(name, birthYear) {
	let resultPrice = 0;
	const currentAge = currentYear - birthYear;

	if (currentAge < 2) {
		resultPrice = 0;
	} else if (currentAge >= 2 && currentAge <= 10) {
		resultPrice = basePrice;
	} else if (currentAge >= 11 && currentAge <= 18) {
		resultPrice = basePrice * 1.5;
	} else if (currentAge >= 19 && currentAge <= 120) {
		resultPrice = basePrice * 2;
	} else {
		resultPrice = "Invalid Age";
	}

	return `${name} your ticket price is ${resultPrice}`;
}

console.log(calculateTicketPrice("Rayhan", 1999));
