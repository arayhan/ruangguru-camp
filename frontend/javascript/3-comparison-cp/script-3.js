// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here
switch (true) {
	case score >= 91 && score <= 100:
		alert("Nilai A");
		break;
	case score >= 71 && score <= 90:
		alert("Nilai B");
		break;
	case score >= 61 && score <= 70:
		alert("Nilai C");
		break;
	case score >= 51 && score <= 60:
		alert("Nilai D");
		break;
	case score >= 0 && score <= 50:
		alert("Nilai E");
		break;
	case score < 0 || score > 100:
		alert("Score hanya dapat diinput dari angka 0 - 100");
		break;
	default:
		alert("Score tidak valid");
		break;
}
