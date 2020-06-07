var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baek.");
  } else if (noAngkot === 8) {
    console.log("Angkot no. " + noAngkot + " sedang lemboor.");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
  }
}
