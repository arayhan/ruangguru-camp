// Mengembalikan urutan bilangan, dan mengetahui bilangan kelipatan 3 dan kelipatan 5
// contoh:
// baris = 5
// hasil:
// 1
// 2
// 3 merupakan kelipatan 3
// 4
// 5 merupakan kelipatan 5
//
// catatam: ingat, 15 merupakan kelipatan 3 dan 5.

// Masukan jumlah bilangan yang ingin dicek, iterasi dari angka 1
const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

// TODO: answer here

let hasil = "";
for (let i = 1; i <= counter; i++) {
	if (i % 3 === 0) {
		hasil += i + " merupakan kelipatan 3\n";
	} else if (i % 5 === 0) {
		hasil += i + " merupakan kelipatan 5\n";
	} else {
		hasil += i + "\n";
	}
}

console.log(hasil);
