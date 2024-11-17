const products = [
    { id: 1, name: "Produk 1", price: "Rp100.000" },
    { id: 2, name: "Produk 2", price: "Rp200.000" },
    { id: 3, name: "Produk 3", price: "Rp300.000" },
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Harga: ${product.price}</p>
        <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;
    productList.appendChild(productDiv);
});

function addToCart(productId) {
    alert(`Produk ${productId} telah ditambahkan ke keranjang!`);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
});
