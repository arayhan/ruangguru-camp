const inputEl = document.getElementById("input");

//handle when the number is pressed. It renders the number into #input element
function number(number) {
	inputEl.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
	switch (operator) {
		case "Del":
			inputEl.value = inputEl.value.slice(0, -1);
			break;
		case "AC":
			inputEl.value = "";
			break;
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

//handle when = button is pressed. It renders the result into #input element
function calculate() {
	inputEl.value = eval(inputEl.value);
}
