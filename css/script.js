// ================================
// CLEANWASH LAUNDRY
// JavaScript Form Pemesanan
// ================================


// ================================
// MENGAMBIL ELEMEN HTML
// ================================

const orderForm = document.getElementById("orderForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const telepon = document.getElementById("telepon");

const layanan = document.getElementById("layananPesanan");

const berat = document.getElementById("berat");
const tanggal = document.getElementById("tanggal");
const alamat = document.getElementById("alamat");

const riwayatPesanan = document.getElementById("riwayatPesanan");


// ================================
// HARGA LAYANAN
// ================================

const hargaLayanan = {
    kiloan: 7000,
    "cuci-setrika": 9000,
    setrika: 5000,
    express: 12000
};


// ================================
// NAMA LAYANAN
// ================================

const namaLayanan = {
    kiloan: "Laundry Kiloan",
    "cuci-setrika": "Cuci + Setrika",
    setrika: "Setrika",
    express: "Laundry Express"
};


// ================================
// FORM SUBMIT
// ================================

orderForm.addEventListener("submit", function(event) {

    // Mencegah halaman reload
    event.preventDefault();


    // ================================
    // MENGAMBIL DATA FORM
    // ================================

    const namaPelanggan = nama.value.trim();

    const emailPelanggan = email.value.trim();

    const nomorTelepon = telepon.value.trim();

    const layananDipilih = layanan.value;

    const beratLaundry = Number(berat.value);

    const tanggalPengantaran = tanggal.value;

    const alamatPelanggan = alamat.value.trim();


    // ================================
    // VALIDASI DATA
    // ================================

    if (
        namaPelanggan === "" ||
        emailPelanggan === "" ||
        nomorTelepon === "" ||
        layananDipilih === "" ||
        beratLaundry <= 0 ||
        tanggalPengantaran === "" ||
        alamatPelanggan === ""
    ) {

        alert("Mohon lengkapi semua data pesanan terlebih dahulu.");

        return;
    }


    // ================================
    // MENGAMBIL HARGA
    // ================================

    const hargaSatuan = hargaLayanan[layananDipilih];


    // ================================
    // MENGHITUNG TOTAL
    // ================================

    const totalHarga = hargaSatuan * beratLaundry;


    // ================================
    // MEMBUAT BARIS BARU
    // ================================

    const baris = document.createElement("tr");


    // ================================
    // KOLOM NO
    // ================================

    const kolomNo = document.createElement("td");

    kolomNo.textContent =
        riwayatPesanan.children.length + 1;


    // ================================
    // KOLOM NAMA PELANGGAN
    // ================================

    const kolomNama = document.createElement("td");

    kolomNama.textContent =
        namaPelanggan;


    // ================================
    // KOLOM PRODUK
    // ================================

    const kolomProduk = document.createElement("td");

    kolomProduk.textContent =
        namaLayanan[layananDipilih];


    // ================================
    // KOLOM HARGA SATUAN
    // ================================

    const kolomHarga = document.createElement("td");

    kolomHarga.textContent =
        "Rp" + hargaSatuan.toLocaleString("id-ID");


    // ================================
    // KOLOM JUMLAH
    // ================================

    const kolomJumlah = document.createElement("td");

    kolomJumlah.textContent =
        beratLaundry + " kg";


    // ================================
    // KOLOM TOTAL
    // ================================

    const kolomTotal = document.createElement("td");

    kolomTotal.textContent =
        "Rp" + totalHarga.toLocaleString("id-ID");


    // ================================
    // KOLOM KATEGORI PELANGGAN
    // ================================

    const kolomKategori = document.createElement("td");

    kolomKategori.textContent =
        "Pelanggan";


    // ================================
    // MEMASUKKAN KOLOM KE BARIS
    // ================================

    baris.appendChild(kolomNo);

    baris.appendChild(kolomNama);

    baris.appendChild(kolomProduk);

    baris.appendChild(kolomHarga);

    baris.appendChild(kolomJumlah);

    baris.appendChild(kolomTotal);

    baris.appendChild(kolomKategori);


    // ================================
    // MEMASUKKAN BARIS KE TABEL
    // ================================

    riwayatPesanan.appendChild(baris);


    // ================================
    // PESAN BERHASIL
    // ================================

    alert(
        "Pesanan berhasil diterima!\n\n" +
        "Nama: " + namaPelanggan + "\n" +
        "Produk: " + namaLayanan[layananDipilih] + "\n" +
        "Harga Satuan: Rp" +
        hargaSatuan.toLocaleString("id-ID") + "\n" +
        "Jumlah: " + beratLaundry + " kg\n" +
        "Total: Rp" +
        totalHarga.toLocaleString("id-ID")
    );


    // ================================
    // RESET FORM
    // ================================

    orderForm.reset();

});
