const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
	constructor(playlist) {
		this.playlist = playlist;
	}

	addSong(song) {
		this.playlist.songs.push(song);
	}

	play() {
		if (this.playlist.isEmpty()) return "";

		const song = this.playlist.songs.shift();

		if (this.playlist.isRepeatable) this.playlist.songs.push(song);

		return `Now Playing ${song.singer} - ${song.title}`;
	}
};
