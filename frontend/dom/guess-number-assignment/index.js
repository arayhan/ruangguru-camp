/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

const MAX_NUMBER = 10;
const MIN_NUMBER = 1;

function generateRandomNumber() {
	return Math.floor(Math.random() * MAX_NUMBER) + 1;
}

let newGameBtn = document.getElementById("newGameBtn");
let randomNumber = generateRandomNumber();
let message = document.getElementById("message");
let displayScore = document.getElementById("score");
let input = document.getElementById("input");
let checkBtn = document.getElementById("checkBtn");
let score = Number(displayScore.innerHTML);

function displayMessage(messageText) {
	message.innerHTML = messageText;
}

function resetGame() {
	randomNumber = generateRandomNumber();

	displayMessage("Lets start guessing...");
	displayScore.innerHTML = 10;
	input.value = "";

	document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
	let inputValue = parseInt(input.value);

	console.log({ randomNumber, inputValue });

	if (score > MIN_NUMBER) {
		if (isNaN(inputValue)) {
			displayMessage("Please enter a number!");
		} else if (inputValue > MAX_NUMBER || inputValue < MIN_NUMBER) {
			displayMessage("Guess any number between 1 and 10");
		} else if (inputValue === randomNumber) {
			displayMessage("Yeay! you guessed it!");
			score += 1;
			displayScore.innerHTML = score;
			randomNumber = generateRandomNumber();
		} else if (inputValue > randomNumber || inputValue < randomNumber) {
			score -= 1;
			displayScore.innerHTML = score;

			if (score === 0) {
				displayMessage("Oops, you lost the game");
			} else {
				displayMessage(
					input > randomNumber ? "Oww... that's too big!" : "Too small, buddy!"
				);
			}
		}
	}
}

window.addEventListener("load", function () {
	generateRandomNumber();
});

newGameBtn.addEventListener("click", function () {
	resetGame();
});

checkBtn.addEventListener("click", function () {
	checkNumber();
});

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;
