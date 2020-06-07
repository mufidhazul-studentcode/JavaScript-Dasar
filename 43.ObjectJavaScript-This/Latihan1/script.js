// this
// var a = 10;
// console.log(this.a);

// Membuat object
// Cara 1 - function declaration

// function halo(){
// console.log(this);
// console.log('halo');
// }
// this.halo();
// this = mengembalikan objek global/window

// Cara 2 - object literal

// var obj = {a : 10, nama : 'Mufid'};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// this nya mengembalikan objek yg bersangkutan

// Cara 3 - constructor function

function Halo() {
  console.log(this);
  console.log("Halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this nya mengembalikan objek yang baru dibuat
