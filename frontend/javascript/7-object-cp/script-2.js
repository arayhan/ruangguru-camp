// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
	read: () => {
		calculator.value1 = parseInt(prompt("Masukan nilai a: "));
		calculator.value2 = parseInt(prompt("Masukan nilai b: "));
	},
	sum: () => calculator.value1 + calculator.value2,
	substract: () => calculator.value1 - calculator.value2,
	multiply: () => calculator.value1 * calculator.value2,
	division: () => calculator.value1 / calculator.value2,
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());
