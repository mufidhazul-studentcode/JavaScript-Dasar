var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baek.");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
  }
}
