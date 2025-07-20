<script>
  import ProductCard from '$lib/components/ProductCard.svelte';

  const products = [
    { id: 1, name: 'Футболка "Слава Україні"', price: 450 },
    { id: 2, name: 'Кружка "Паляниця"', price: 250 },
    { id: 3, name: 'Наліпка "Байрактар"', price: 50 }
  ];
</script>

<h1 class="text-2xl font-bold mb-4">Товари</h1>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {#each products as product}
    <ProductCard {product} />
  {/each}
</div>
