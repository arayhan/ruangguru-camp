module.exports = class TextEditor {
	constructor() {
		this.undoStack = [];
		this.redoStack = [];
	}

	write(c) {
		if (this.undoStack.length === this.size) throw "TextEditor is full";
		else {
			this.undoStack.push(c);
			this.top++;
		}
	}

	read() {
		return this.undoStack.join("");
	}

	undo() {
		if (this.undoStack.length) this.redoStack.push(this.undoStack.pop());
	}

	redo() {
		if (this.redoStack.length) this.undoStack.push(this.redoStack.pop());
	}
};
