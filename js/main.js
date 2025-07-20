fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Головна
    if (document.getElementById('featured-products')) {
      const featured = products.slice(0, 3);
      document.getElementById('featured-products').innerHTML = featured.map(p => `
        <div class="col-md-4 mb-4">
          <div class="card product-card">
            <img src="${p.image}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5>${p.name}</h5>
              <p>${p.price} ₴</p>
              <a href="product.html?id=${p.id}" class="btn btn-outline-primary btn-sm">Детальніше</a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Каталог
    if (document.getElementById('catalog-products')) {
      document.getElementById('catalog-products').innerHTML = products.map(p => `
        <div class="col-md-4 mb-4">
          <div class="card product-card">
            <img src="${p.image}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5>${p.name}</h5>
              <p>${p.price} ₴</p>
              <a href="product.html?id=${p.id}" class="btn btn-outline-primary btn-sm">Детальніше</a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Сторінка товару
    if (window.location.pathname.includes('product.html')) {
      const url = new URL(window.location);
      const id = parseInt(url.searchParams.get('id'));
      const product = products.find(p => p.id === id);
      if (product) {
        document.title = product.name + ' – Магазин Україна';
        document.getElementById('product-detail').innerHTML = `
          <div class="col-md-6">
            <img src="${product.image}" class="img-fluid" alt="${product.name}">
          </div>
          <div class="col-md-6">
            <h1>${product.name}</h1>
            <p class="fs-4">${product.price} ₴</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Додати до кошика</button>
          </div>
        `;
      }
    }

    updateCartCount();
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = JSON.parse(localStorage.getItem('cart') || '[]').length;
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}
