const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
	constructor(name) {
		super(name);
		this.job = "Thief";
	}

	robbedBlind() {
		this.stealChance = 0.75;

		return this.gold < 10 ? "Aku terlalu miskin" : this.setStealChance;
	}

	steal(player) {
		if (player.randomizer() > player.getDistractionPurseChance()) {
			return "Gagal mencuri balik";
		} else {
			player.setGold(player.getGold() - 5);
			this.setGold(this.getGold() + 5);

			if (player.getDistractionPurseChance() > this.randomizer()) {
				if (this.getGold() < 10) {
					player.setGold(player.getGold() + this.getGold());
					this.setGold(0);
					return "Berhasil mencuri balik semua uang lawan";
				}

				player.setGold(player.getGold() + 10);
				this.setGold(this.getGold() - 10);
				return "Berhasil mencuri balik 10 gold";
			}
		}
	}
}

class Trickster extends Player {
	constructor(name) {
		super(name);
		this.distractionPurseChance = 0.25;
		this.job = "Trickster";
	}

	setDistractionPurseChance(chance) {
		this.distractionPurseChance = chance;
	}

	getDistractionPurseChance() {
		return this.distractionPurseChance;
	}

	distractionPurse(player) {
		const rng = this.randomizer();
	}

	steal(player) {
		// TODO: answer here
	}
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
	Thief,
	Trickster,
};
