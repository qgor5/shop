<script>
  import { cart } from '$lib/stores.js';
</script>

<h1 class="text-2xl font-bold mb-4">Оформлення замовлення</h1>

<form class="space-y-4">
  <input placeholder="Ім’я" class="border p-2 w-full" />
  <input placeholder="Адреса доставки" class="border p-2 w-full" />
  <button class="bg-black text-white px-4 py-2 rounded">Підтвердити замовлення</button>
</form>

<p><strong>Разом: ₴{$cart.reduce((a, b) => a + b.price, 0)}</strong></p>
