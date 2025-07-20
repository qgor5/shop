<script>
  import { cart } from '$lib/stores.js';
</script>

<h2 class="text-xl font-bold mb-4">Ваш кошик</h2>

{#if $cart.length === 0}
  <p>Кошик порожній</p>
{:else}
  <ul>
    {#each $cart as item}
      <li>{item.name} – ₴{item.price}</li>
    {/each}
  </ul>
  <p><strong>Разом: ₴{$cart.reduce((a, b) => a + b.price, 0)}</strong></p>
  <a href="/checkout" class="btn bg-black text-white px-4 py-2 rounded">Оформити замовлення</a>
{/if}
