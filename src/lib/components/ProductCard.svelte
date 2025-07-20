<script>
  export let product;
  import { cart } from '$lib/stores.js';

  function addToCart(product) {
    cart.update(items => [...items, product]);
  }
</script>

<div class="border p-4 rounded">
  <h2 class="text-lg font-bold">{product.name}</h2>
  <p class="text-gray-600">₴{product.price}</p>
  <button class="mt-2 bg-black text-white px-4 py-2 rounded" on:click={() => addToCart(product)}>
    Додати до кошика
  </button>
</div>
