const cart = JSON.parse(localStorage.getItem('cart') || '[]');
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('cart-items');
    const selected = products.filter(p => cart.includes(p.id));
    container.innerHTML = selected.map(p => `<p>${p.name} – ${p.price} ₴</p>`).join('');
  });
