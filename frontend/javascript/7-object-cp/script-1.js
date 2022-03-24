// Dari kode di bawah ini

let programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes:
		"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// buat kode untuk manipulasi data dalam objek berdasarkan instruksi berikut

// 1. Tulis perintah untuk menambahkan bahasa "Go" ke akhir array languages.
// 2. Ubah difficulty menjadi 7.
// 3. Menggunakan kata kunci delete, tulis perintah untuk menghapus key jokes dari objek programming.
// 4. Tulis perintah untuk menambahkan key baru yang disebut isFun dan nilai true ke objek programming.
// 5. Menggunakan loop, iterasi array languages dan console.log semua bahasa.
// 6. Menggunakan loop, console.log semua key dalam objek pemrograman.
// 7. Menggunakan loop, console.log semua value dalam objek pemrograman.

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
programming.languages.forEach((language) => console.log(language));
Object.keys(programming).forEach((key) => console.log(key));
Object.values(programming).forEach((value) => console.log(value));

console.log(programming);
