// Buatlah pseudocode untuk mengecek apakah seseorang dapat membuat SIM atau tidak.
// Seseorang diperbolehkan membuat SIM jika usianya lebih besar atau sama dengan 17 tahun.

// TODO: answer here;
const prompt = require("prompt");

prompt.start();

const AGE_MINIMUM = 17;
const successMessage = "BOLEH membuat SIM";
const failedMessage = "BELUM BOLEH membuat SIM";

prompt.get(["usia"], (err, result) => {
	console.log(result.usia >= AGE_MINIMUM ? successMessage : failedMessage);
});
