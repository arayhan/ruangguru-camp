// Mengembalikan teks yang berkebalikan
//
// contoh:
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
	return str.split("").reverse().join("");
}

// take input from the user
// const string = prompt("Masukan teks: ");
const string1 = "hello world";
const string2 = "test";

// const result = reverseString(string);
// console.log(result);

console.log(reverseString(string1));
console.log(reverseString(string2));
