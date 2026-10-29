export const MenjalankanNode = () => {
console.log("Halo, Selamat datang di latihan node js");
const namaproduk = "Minyak Sawit";
const hargasatuan = 17000;
const jumlahbeli = 5;


//Template Literals ``
console.log(`Nama Produk adalah :${namaproduk} total adalah : ${hargasatuan * jumlahbeli.toLocaleString("id-ID")}`);
// ---------------OBJECT---------------
const ProdukWarung ={
    id: 1,
    nama: "Pecel Lele",
    kategori: "Makanan",
    hargaBeli: 9000,
    hargaJual: 14000,
    stock: 15,
    batasMin: 5
};
console.log(`
    ID PRODUCT: SKU-${ProdukWarung.id}
    Nama Product: ${ProdukWarung.nama}
    Kategori: ${ProdukWarung.kategori}
    Harga Beli: Rp. ${ProdukWarung.hargaBeli.toLocaleString("id-ID")}
    Harga Jual: Rp. ${ProdukWarung.hargaJual.toLocaleString("id-ID")}
    Stock:  ${ProdukWarung.stock}`);
// ---------------OBJECT DENGAN KONDISI---------------
console.log(`
    Status:  ${ProdukWarung.stock < ProdukWarung.batasMin ? "Restock" : "Tersedia"}`);
// ---------------LOOPING ARRAY OBJECT---------------
const daftarProduk = [
    {nama: "Telor" , harga: 25000, stock: 15},
    {nama: "Beras" , harga: 14500, stock: 25},
    {nama: "Minyak Sawit" , harga: 39000, stock: 45},
];

for (const product of daftarProduk){
    console.log(`
        Nama Produk: ${product.nama},
        Harga: ${product.harga},
        Stock: ${product.stock}
        `);
}
console.log(daftarProduk[1]);
// ---------------FUNCTION---------------
function hargaMargin(hargaJual, hargaBeli){
    return hargaJual - hargaBeli;
}
function formatRupiah(angka){
    return `Rp. ${angka.toLocaleString("id-ID")}`;
}
const product = {
    nama: "Nasi Kucing",
    hargaJual: 20000,
    hargaBeli: 10000
}
console.log(formatRupiah(product.hargaJual));
console.log(formatRupiah(product.hargaBeli));
console.log(hargaMargin(product.hargaJual, product.hargaBeli));

console.log(`
==================================================
LAPORAN HARIAN POS: Toko Berkah Warung (KasirKu)
Kasir Bertugas : Mbak Sri
==================================================`)
const daftarproduk = [
    {nama: "Minyak Goreng Sania 2L" , harga: 37000, hargaBeli: 33000, stock: 10, batasMin: 5},
    {nama: "Beras Ramos 5Kg" , harga: 72000, hargaBeli: 65000, stock: 15, batasMin: 5},
    {nama: "Gula Pasir 1Kg" , harga: 16000, hargaBeli: 14000, stock: 3, batasMin: 5},
];
let total = 0;
let barangbutuhperhatian = 0;

for (const product of daftarproduk){
total += product.harga * product.stock;
if (product.stock < product.batasMin){
    barangbutuhperhatian++;
}
    console.log(`Nama Produk: ${product.nama}
Harga: ${product.harga} (Margin: ${hargaMargin(product.harga, product.hargaBeli)})
Stock: ${product.stock} Unit | Status:  ${product.stock < product.batasMin ? "Perlu Restock" : "Aman"}
==================================================`)}
console.log (`Total Estimasi Aset Toko :`, (total))
console.log(`Barang Butuh Perhatian :`,barangbutuhperhatian,)
console.log(`==================================================`)};