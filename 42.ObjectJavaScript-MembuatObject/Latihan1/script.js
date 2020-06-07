// Kreating objekt
// Objek literal
var santri1 = {
  nama: "Mufidha Zulfulansyah",
  NISN: "0030392426",
  surel: "mufidhazulfulansyah@gmail.com",
  kelas: "XI",
  jurusan: "MIA 1",
};

var santri2 = {
  nama: "Putra Zulfandi Kusuma",
  NISN: "0030495836",
  surel: "zulfandipk@gmail.com",
  kelas: "XI",
  jurusan: "Ternak Lele",
};

// Pakek function declaration
function buatObjekSantri(nama, NISN, surel, kelas, jurusan) {
  var santri = {};
  santri.nama = nama;
  santri.NISN = NISN;
  santri.surel = surel;
  santri.kelas = kelas;
  santri.jurusan = jurusan;
  return santri;
}

var santri3 = buatObjekSantri(
  "Fuad MH.",
  "0030492739",
  "fuadmuhhilmy@yahoo.co.id",
  "XI",
  "Kaligraph"
);

// Construktor
function Santri(nama, NISN, surel, kelas, jurusan) {
  // gapake var this
  this.nama = nama;
  this.NISN = NISN;
  this.surel = surel;
  this.kelas = kelas;
  this.jurusan = jurusan;
  //   gapake return this
}

var santri4 = new Santri(
  "Ahmad Fakhrurozi Ramdhani",
  "0023893946",
  "dhanimpret123@gmail.com",
  "XI",
  "Desain grafhics"
);
