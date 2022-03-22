// Masukan 3 bilangan bulat menggunakan if condition
const num1 = parseInt(prompt("Masukan bilangan pertama: "));
const num2 = parseInt(prompt("Masukan bilangan kedua: "));
const num3 = parseInt(prompt("Masukan bilangan ketiga: "));

let largest;

// TODO: answer here
if (num1 > num2 && num1 > num3) {
	largest = num1;
} else if (num2 > num1 && num2 > num3) {
	largest = num2;
} else if (num3 > num1 && num3 > num2) {
	largest = num3;
}

// Menampilkan hasil
alert("Bilangan terbesar adalah " + largest);
