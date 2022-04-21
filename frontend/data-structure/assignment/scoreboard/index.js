class Score {
	constructor(name, correct, wrong, empty) {
		this.name = name;
		this.correct = correct;
		this.wrong = wrong;
		this.empty = empty;
	}
}

class Scores {
	constructor(scores) {
		this.scores = scores;
	}

	topStudents() {
		const totalScores = this.scores.map(({ name, correct, wrong }) => {
			const correctScore = correct * 4;
			const wrongScore = wrong * -1;
			const totalScore = correctScore + wrongScore;

			return { name, correct, wrong, totalScore };
		});

		totalScores.sort((a, b) => {
			console.log(a, b);
			if (a.totalScore === b.totalScore) {
				if (a.correct === b.correct) return a.name.localeCompare(b.name);
				return b.correct - a.correct;
			}

			return b.totalScore - a.totalScore;
		});

		// return totalScores;
		return totalScores.map((score) => score.name);
	}
}

module.exports = {
	Score,
	Scores,
};
