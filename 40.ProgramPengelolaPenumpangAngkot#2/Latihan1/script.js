var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array  & keluar dari function
    return penumpang;
  } // else
  else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika uda ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahanya
        console.log(
          namaPenumpang + " uda ada di dalam angkot. Lain kali lagi yah..."
        );
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika semua kursi uda terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot masih kosong
    console.log("Angkot masi kosong, apenya yg mau turoon?");
    // tidak mungkin penumpang turun
    // kembalikan isi array dan keluar
  } else {
    // telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log("Nama penumpang yang dimaksud gaada di dalam angkot.");
        return penumpang;
      }
    }
    // jika nama penumpang sesuai
    // hapus dengan mengubah namanya,
    // menjadi undefined
    // kembalikan isi array & keluar dari function
    // jika tidak ada nama yang sesuai
    // tampilkan pesan error nya
    // kembalikan isi array & keluar dari function
  }
  return penumpang;
};
