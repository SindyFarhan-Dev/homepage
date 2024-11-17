const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let products = [
    { id: 1, name: "Produk 1", description: "Deskripsi Produk 1", price: "Rp100.000" },
    { id: 2, name: "Produk 2", description: "Deskripsi Produk 2", price: "Rp200.000" },
    { id: 3, name: "Produk 3", description: "Deskripsi Produk 3", price: "Rp300.000" },
];

// Endpoint untuk mendapatkan semua produk
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
