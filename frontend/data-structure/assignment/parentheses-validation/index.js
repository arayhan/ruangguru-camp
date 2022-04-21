const Stack = require("./stack");

function IsValidParentheses(s) {
	if (s.length === 0) return false;

	let stack = new Stack();

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
			stack.push(s[i]);
		} else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
			if (stack.data.length === 0) return false;
			let top = stack.pop();
			if (top === "(" && s[i] !== ")") return false;
			if (top === "[" && s[i] !== "]") return false;
			if (top === "{" && s[i] !== "}") return false;
		}
	}

	return stack.data.length === 0;
}

module.exports = {
	IsValidParentheses,
};
