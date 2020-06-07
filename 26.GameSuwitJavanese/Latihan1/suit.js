var tanya = true;
while (tanya) {
  // Nangkep player's choice//
  var p = prompt("Sila pilih : gajah, semut, atau hooman?");

  //Nangkep komputer's choice//
  var comp = Math.random();
  console.log(comp);

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "hooman";
  } else {
    comp = "semut";
  }
  console.log(comp);

  var hasil = "";
  // Nentuin playrules nya//
  if (p == comp) {
    hasil = "podo! / sami! / seri! / imbang!";
  } else if (p == "gajah") {
    hasil = comp == "hooman" ? "menang!" : "kalah!";
  } else if (p == "hooman") {
    hasil = comp == "gajah" ? "kalah!" : "menang!";
  } else if (p == "semut") {
    hasil = comp == "hooman" ? "kalah!" : "menang!";
  } else {
    hasil = "Pilihanmu salah / wrong";
  }
  // Menampilkan hasilnya
  alert(
    "Kamu uda pilih : " +
      p +
      ", sedangkan komputer memilih : " +
      comp +
      "\n maka hasilnya : kamu " +
      hasil
  );

  tanya = confirm("Mo maen lagi?");
}
alert("Makasi uda mau maen sama akuh... :)");
