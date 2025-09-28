<script>
  import { producten } from "$lib/data/producten";
</script>

<div class="w-5/6 mx-auto">
    <h1 class="text-4xl font-bold text-center mt-8">Producten</h1>
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each producten as product}
      <a href={`/producten/${product.id}`} title={product.name} class="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.name} class="w-full h-78 object-cover" />
        <div class="p-4">
          <h2 class="text-lg font-semibold">{product.name}</h2>
          <p class="text-gray-600">{product.price}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
