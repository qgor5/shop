fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const filtered = products.filter(p => cart.includes(p.id));
    const summary = document.getElementById('order-summary');
    const total = filtered.reduce((sum, p) => sum + p.price, 0);

    summary.innerHTML = filtered.map(p => `
      <li class="list-group-item">${p.name} – ${p.price} ₴</li>
    `).join('');

    document.getElementById('total-price').textContent = `${total} ₴`;
  });

document.getElementById('checkout-form').addEventListener('submit', function (e) {
  e.preventDefault();
  this.classList.add('was-validated');
  if (!this.checkValidity()) return;

  const data = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    delivery: document.getElementById('delivery').value,
    branch: document.getElementById('branch').value,
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  };

  console.log("Замовлення:", data); // <-- сюди вставиш email-відправку

  alert("Замовлення відправлено!");
  localStorage.removeItem('cart');
  window.location.href = "index.html";
});
