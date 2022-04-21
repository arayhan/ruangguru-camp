function ageDistribution(persons) {
	let result = new Map();

	people.forEach((person) => {
		if (result.has(person.age)) {
			result.set(person.age, result.get(person.age) + 1);
		} else {
			result.set(person.age, 1);
		}
	});

	return result;
}

function groupByAge(persons) {
	let result = new Map();

	people.forEach((person) => {
		let age = person.age;
		if (!result.has(age)) {
			result.set(age, []);
		}
		result.get(age).push(person);
	});

	return result;
}

let people = [
	{ name: "Bob", age: 21 },
	{ name: "Sam", age: 28 },
	{ name: "Ann", age: 21 },
	{ name: "Joe", age: 22 },
	{ name: "Ben", age: 28 },
];

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
	ageDistribution,
	groupByAge,
};
