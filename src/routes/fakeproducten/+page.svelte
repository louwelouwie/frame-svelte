<script>
  export let data;
  const { producten } = data;
</script>

<div class="w-5/6 mx-auto">
  <h1 class="text-4xl font-bold text-center mt-8">API producten</h1>
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each producten as product}
      <a href={`/fakeproducten/${product.id}`} title={product.title} class="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.title} class="w-full h-72 object-cover" title={product.title}/>
        <div class="p-4">
          <h2 class="text-lg font-semibold">{product.title}</h2>
          <p class="text-gray-600">${product.price} | Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </a>
    {/each}
  </div>
</div>
