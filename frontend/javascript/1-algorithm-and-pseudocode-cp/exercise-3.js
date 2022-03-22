// Buatlah pseudocode untuk menjumlahkan bilangan genap yang ada di antara 1 sampai 10

// TODO: answer here

let result = 0;

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		result += i; // 2 + 4 + 6 + 8 + 10
	}
}

console.log(`Result: ${result}`); // 30
