// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh:
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
for (let i = n; i > 0; i--) {
	let hasil = "";
	for (let j = 0; j < i; j++) {
		hasil += "*";
	}
	console.log(hasil);
}
