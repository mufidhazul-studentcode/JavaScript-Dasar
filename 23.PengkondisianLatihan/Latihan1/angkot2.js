var jumlahAngkot = 10;
var angkotBeroperasi = 4;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot no. " + noAngkot + " beroperasi dengan baek.");
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
}
