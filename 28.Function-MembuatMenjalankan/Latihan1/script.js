//ketahui sisi masing2 kubus
function jumlahVol2Kubus(a, b) {
  var volA;
  var volB;
  var total;
  // hitung volum masing2 kubus
  volA = a * a * a;
  volB = b * b * b;
  // jumlahkan hasilnya
  total = volA + volB;
  // kembalikan nilai jawabannya
  return total;
}
alert(jumlahVol2Kubus(8, 3));
console.log(jumlahVol2Kubus(8, 3));
alert(jumlahVol2Kubus(10, 15));
console.log(jumlahVol2Kubus(10, 15));
