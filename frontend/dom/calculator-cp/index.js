const inputEl = document.getElementById("input");

//handle when the number is pressed. It renders the number into #input element
function number(number) {
	inputEl.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
	const lastInput = inputEl.value.slice(-1);

	if (operator === "Del") {
		inputEl.value = inputEl.value.slice(0, -1);
	} else if (operator === "AC") {
		inputEl.value = "";
	} else if (
		lastInput !== "+" &&
		lastInput !== "-" &&
		lastInput !== "*" &&
		lastInput !== "/" &&
		lastInput !== "."
	) {
		switch (operator) {
			case "+":
				inputEl.value += "+";
				break;
			case "-":
				inputEl.value += "-";
				break;
			case "*":
				inputEl.value += "*";
				break;
			case "/":
				inputEl.value += "/";
				break;
			case ".":
				inputEl.value += ".";
				break;
			default:
				break;
		}
	}
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
	inputEl.value = eval(inputEl.value);
}
