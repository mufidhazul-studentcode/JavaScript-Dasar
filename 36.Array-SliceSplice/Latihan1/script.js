// Latian manipulasi array

// 1. Nambah isi array; (MANUAL)
// harus apal urutan key nya
// var arr = [];
// arr[0]= "Mufidha";
// arr[1]= "Zulfulansyah";
// arr[2]= "Putra";
// console.log(arr);

// 2. Mnghapus array (MANUAL)
// var arr= ["Muf","Zul","Put"];
// arr[2] = undefined;
// console.log(arr);

//3. Menampilkan isi array (CaraBagus)
// var arr = ["Mufid", "Zulfu", "Putra"];
// for (var i = 0; i < arr.length; i++) {
//   console.log("Siswa ke-" + (i + 1) + " : " + arr[i]);
// }

// Method pada Array

// 1. Join
// var arr = ["Mufidha", "Zulfulansyah", "Putra"];
// console.log(arr.join(" "));

// 2. Push n Pop
// arr.push("Kusuma");
// arr.pop();
// arr.pop();
// console.log(arr.join(" "));

// 3. Unshift n Shift
// arr.unshift("Mr.");
// arr.shift();
// console.log(arr.join(" "));

var arr = ["Mufidha", "Zulfulansyah", "Putra", "Zulfandi", "Lagi", "Ngudink"];
// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1,elemenbaru2, dst.);
// arr.splice(1, 1, "Putraa", "Zulfandi", "Kusuma");
// console.log(arr.join(" "));

// 5.Slice
// slice(awal, akhir);
var arr2 = arr.slice(2, 4);

console.log(arr.join(" "));
console.log(arr2.join(" "));
