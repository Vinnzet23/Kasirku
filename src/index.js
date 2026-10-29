import { MenjalankanNode } from "./menjalankan_node.js";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
// console.log(MenjalankanNode());

const rl = readline.createInterface({input, output});

const daftar = [{
    nama : "Teh Celup", harga:5000
},{
    nama : "Coca Cola", harga:8000
}];

console.table(daftar);
let pilihYA;
do {
    pilihYA = await rl.question("Pilih Menu :");
    switch (pilihYA) {
        case "1":
         // TAMBAH
         const nama = await rl.question("Nama Produk : ");
         if (nama === "") {
            console.log(`Isi dulu nama Produk!`);
            break;
         }
         let harga = 0;
         while (true){
            harga = Number(await rl.question("Harga Produk : "));
            if (harga === 0 || harga > 0) {
            console.log(`Isi dulu harga atau harga tidak boleh minus!`);
            break;
         }
         console.log(`Harga gagal ter input`);
    }
         daftar.push({nama, harga});
         console.log(`Berhasil Bertambah!`);
        //  console.table(daftar);
        break; //-----------------------------------------
         case "2":
         // LIHAT
         console.table(daftar)
        break;
         case "3":
         // CARI
         const cari = await rl.question("Ketik yg dicari : ");
         let ketemu = 0;
         for (const d of daftar) {
            if(d.nama.toLowerCase().includes(cari.toLocaleLowerCase())) {
                console.table({
                    nama: d.nama,
                    harga: d.harga,
                });
                ketemu++;
            }
         }
         if (ketemu === 0) {
            console.log(`Data tidak ditemukan`);
         }
        break;
         case "4":
         // KELUAR
         console.log (`Sampai Jumpa Lagi ...`);
        break;

        default:
            console.log(`Pilihan tidak dikenali`);
            break;
    }
} while (pilihYA !== "4");
rl.close();