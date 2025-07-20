fetch('products.json')
  .then(res => res.json())
  .then(data => renderProducts(data));

function renderProducts(products) {
  const container = document.getElementById('catalog-products') || document.getElementById('featured-products');
  container.innerHTML = '';

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>${p.price} ₴</p>
      <button onclick="addToCart(${p.id})">Додати до кошика</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Додано до кошика!');
}
