// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
	constructor() {
		this.data = [];
		this.size = 10;
		this.top = -1;
	}

	push(elemen) {
		if (this.data.length == this.size) {
			throw "stack overflow";
		} else {
			this.top += 1;
			return this.data.push(elemen);
		}
	}

	pop() {
		if (this.top == -1) {
			throw "stack underflow";
		} else {
			let poppedValue = this.data.pop();
			this.top -= 1;
			return poppedValue;
		}
	}
};
