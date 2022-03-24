// Mengembalikan teks yang berkebalikan
//
// contoh:
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
	return str.split("").reverse().join("");
}

const string1 = "hello world";
const string2 = "test";

console.log(reverseString(string1));
console.log(reverseString(string2));

// take input from the user
// const string = prompt("Masukan teks: ");
// const result = reverseString(string);
// console.log(result);
