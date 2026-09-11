// Mengambil elemen HTML dengan getElementById
const orderForm = document.getElementById("orderForm");
const nama = document.getElementById("nama");
const layananPesanan = document.getElementById("layananPesanan");
const hargaSatuan = document.getElementById("hargaSatuan");
const jumlah = document.getElementById("jumlah");
const kategoriPelanggan = document.getElementById("kategoriPelanggan");
const tanggal = document.getElementById("tanggal");
const hasilPerhitungan = document.getElementById("hasilPerhitungan");
const riwayatBody = document.getElementById("riwayatBody");

const hargaLayanan = {
    kiloan: 7000,
    "cuci-setrika": 9000,
    setrika: 5000,
    express: 12000,
    "bed-cover": 20000
};

const namaLayanan = {
    kiloan: "Laundry Kiloan",
    "cuci-setrika": "Cuci + Setrika",
    setrika: "Setrika",
    express: "Express",
    "bed-cover": "Bed Cover"
};

// Mengisi harga otomatis ketika layanan dipilih
layananPesanan.addEventListener("change", function () {
    hargaSatuan.value = hargaLayanan[this.value] || "";
});

// Format angka menjadi Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
}

// Menghitung transaksi
orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const harga = Number(hargaSatuan.value);
    const qty = Number(jumlah.value);
    const namaPelanggan = nama.value.trim();
    const layanan = layananPesanan.value;
    const kategori = kategoriPelanggan.value;

    if (!harga || !qty || !namaPelanggan || !layanan || !kategori) {
        hasilPerhitungan.textContent =
            "Mohon lengkapi data pemesanan terlebih dahulu.";
        return;
    }

    let diskon = 0;

    if (kategori === "member") {
        diskon = 0.05;
    } else if (kategori === "vip") {
        diskon = 0.10;
    }

    const subtotal = harga * qty;
    const nilaiDiskon = subtotal * diskon;
    const total = subtotal - nilaiDiskon;

    // Menampilkan hasil menggunakan textContent
    hasilPerhitungan.textContent =
        `Pesanan ${namaPelanggan}: ${namaLayanan[layanan]} × ${qty}. ` +
        `Subtotal ${formatRupiah(subtotal)}, ` +
        `diskon ${formatRupiah(nilaiDiskon)}, ` +
        `total ${formatRupiah(total)}.`;

    // Membuat baris baru menggunakan createElement
    const row = document.createElement("tr");

    const data = [
        namaPelanggan,
        namaLayanan[layanan],
        `${qty}`,
        formatRupiah(total),
        kategori.toUpperCase()
    ];

    data.forEach(function (item) {
        const cell = document.createElement("td");

        cell.textContent = item;

        row.appendChild(cell);
    });

    // Menambahkan baris ke tabel
    riwayatBody.appendChild(row);

    alert("Pesanan berhasil dihitung dan disimpan.");
});

// Reset form
orderForm.addEventListener("reset", function () {
    setTimeout(function () {
        hargaSatuan.value = "";
        hasilPerhitungan.textContent =
            "Hasil perhitungan akan tampil di sini.";
    }, 0);
});
