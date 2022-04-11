/**
 * Pada soal kali ini disediakan class `Person` dimana kalian diminta untuk melengkapi serta membuat beberapa hal dibawah ini:
 * - Class Person yang memiliki properti name, age, dan job
 * - Buatlah getter untuk masing masing Properti diatas dengan format `getName` untuk mendapatkan nama, `getAge` untuk mendapatkan usia, dan `getJob` untuk mendapatkan pekerjaan dari class Person.
 * - Buatlah setter untuk masing masing Properti diatas dengan format `setName` untuk mengubah nilai nama, `setAge` untuk mengubah nilai usia, dan `setJob` untuk mengubah nilai pekerjaan dari class Person
 */

class Person {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}

	getJob() {
		return this.job;
	}

	setName(name) {
		this.name = name;
	}

	setAge(age) {
		this.age = age;
	}

	setJob(job) {
		this.job = job;
	}
}

let case1 = new Person("Jhon", 29, "Programmer");

console.log(case1.getName());
console.log(case1.getAge());
console.log(case1.getJob());

// expect(case1.getName).toMatch("Jhon");
// expect(case1.getAge).toBe(29);
// expect(case1.getJob).toMatch("Programmer");

module.exports = Person;
