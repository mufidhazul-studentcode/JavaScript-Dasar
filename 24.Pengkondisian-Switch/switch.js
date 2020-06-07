var item = prompt(
  "Sila masukkan nama panganan / wedangan : \n (ex: bubur, ikan, jus, pizza, milkshake)"
);

switch (item) {
  case "bubur":
  case "ikan":
  case "jus":
    alert("makanan / minuman SEHAT.");
    break;
  case "pizza":
  case "milkshake":
    alert("makanan / minuman TIDAK SEHAT.");
    break;
  default:
    alert("kamu masukin makanan / minuman yang gada di contoh.");
}
