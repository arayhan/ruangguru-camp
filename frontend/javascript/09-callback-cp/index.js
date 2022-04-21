// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		result += str[i].repeat(2);
	}

	return result;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		result += cb(str[i].repeat(num));
	}

	return result;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
	doubleChars,
	repeat,
};
