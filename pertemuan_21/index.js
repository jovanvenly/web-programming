//Menambah, Menghapus, dan Mengganti Element Array dengan 
//splice()
let nilai = [90, 80, 75, 95, 85];
nilai.splice(3, 0, 25, 35, 45);
console.log(nilai);

//Menggabungkan Lebih Dari Satu Array dengan 
//concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);

console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]


//Mengambil Element Array dengan 
//slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

//Mengurutkan Array dengan 
//sort()
let nilai = [91, 84, 75, 95, 85];
nilai.sort();
console.log(nilai);

//Memutar urutan Array dengan 
//reverse()
let nilai = [91, 84, 75, 95, 85];
buah.reverse();
console.log(buah); // Output: ["Jambu", "Mangga", "Apel", "Jeruk"]

