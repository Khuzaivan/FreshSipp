function order(product) {
  const phone = "6281222726808";
  const message = `Halo FreshSip, saya mau pesan ${product} (Rp 10.000)`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

function orderNow() {
  const phone = "6281222726808";
  const message = "Halo FreshSip, saya mau pesan minuman FreshSip";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}
