let turn = "X";
const SIZE = 3;

let winningCount = {
	X: 0,
	O: 0,
};

//render scoreboard on x-wins and o-wins <label/>
function renderScore() {
	let xWins = document.getElementById("x-wins");
	let oWins = document.getElementById("o-wins");

	xWins.textContent = winningCount.X;
	oWins.textContent = winningCount.O;
}

//check who the winner is, add the score to the scoreboard, and render the scoreboard
function checkWinner() {
	//Let's make it simple, just hardcode the winning combinations
	let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
	let winner = "";

	//horizontal
	if (
		getValue(0, 0) != "" &&
		getValue(0, 0) === getValue(0, 1) &&
		getValue(0, 0) === getValue(0, 2)
	) {
		winner = getValue(0, 0);
	}
	if (
		getValue(1, 0) != "" &&
		getValue(1, 0) === getValue(1, 1) &&
		getValue(1, 0) === getValue(1, 2)
	) {
		winner = getValue(1, 0);
	}
	if (
		getValue(2, 0) != "" &&
		getValue(2, 0) === getValue(2, 1) &&
		getValue(2, 0) === getValue(2, 2)
	) {
		winner = getValue(2, 0);
	}

	//vertical
	if (
		getValue(0, 0) != "" &&
		getValue(0, 0) === getValue(1, 0) &&
		getValue(0, 0) === getValue(2, 0)
	) {
		winner = getValue(0, 0);
	}
	if (
		getValue(0, 1) != "" &&
		getValue(0, 1) === getValue(1, 1) &&
		getValue(0, 1) === getValue(2, 1)
	) {
		winner = getValue(0, 1);
	}
	if (
		getValue(0, 2) != "" &&
		getValue(0, 2) === getValue(1, 2) &&
		getValue(0, 2) === getValue(2, 2)
	) {
		winner = getValue(0, 2);
	}

	//diagonal
	if (
		getValue(0, 0) != "" &&
		getValue(0, 0) === getValue(1, 1) &&
		getValue(0, 0) === getValue(2, 2)
	) {
		winner = getValue(0, 0);
	}
	if (
		getValue(0, 2) != "" &&
		getValue(0, 2) === getValue(1, 1) &&
		getValue(0, 2) === getValue(2, 0)
	) {
		winner = getValue(0, 2);
	}

	if (winner != "") {
		winningCount[winner]++;
		renderScore();
		generate();
	}
}

function checkNoWinner() {
	// let buttons = document.querySelector("#board").querySelectorAll("button");
	// let allFilled = true;

	// for (let i = 0; i < buttons.length; i++) {
	// 	if (buttons[i].textContent === "") {
	// 		allFilled = false;
	// 		break;
	// 	}
	// }

	// if (allFilled) {
	// 	alert("No winner!");
	// 	generate();
	// }
	let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			if (getValue(i, j) == "") {
				return false;
			}
		}
	}

	alert("No winner!");
	return true;
}

//handle click event, don't forget to disable the button so that it can't be clicked again
function click(event) {
	this.disabled = true;
	this.textContent = turn;
	this.style.color = "white";

	if (turn == "X") {
		turn = "O";
		this.style.backgroundColor = "red";
	} else {
		turn = "X";
		this.style.backgroundColor = "blue";
	}

	checkWinner();
	if (checkNoWinner()) {
		//the board is full but no winner, it's a tie
		generate();
	}
}

//generate the tictactoe board. It is just a 3x3 table with <button/> inside <td/>
function generate() {
	const BUTTON_SIZE = "60px";

	let board = document.getElementById("board");
	board.replaceChildren();
	let table = document.createElement("table");
	board.appendChild(table);

	for (let i = 0; i < SIZE; i++) {
		let tr = document.createElement("tr");
		table.appendChild(tr);

		for (let j = 0; j < SIZE; j++) {
			let td = document.createElement("td");
			tr.appendChild(td);

			let button = document.createElement("button");

			button.id = i + "-" + j;
			button.style.width = BUTTON_SIZE;
			button.style.height = BUTTON_SIZE;
			button.addEventListener("click", click);

			td.appendChild(button);
		}
	}

	renderScore();
}
