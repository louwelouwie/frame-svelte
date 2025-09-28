<script>
  export let data;
  const { product } = data;
</script>

<div class="w-5/6 mx-auto mt-12">
  <div class="bg-white shadow-md rounded-xl overflow-hidden p-6 w-1/2 mx-auto">
    <img src={product.image} alt={product.title} class="w-full h-64 object-cover mb-4" />
    <h1 class="text-2xl font-bold mb-2">{product.title}</h1>
    <p class="text-gray-600">${product.price} | Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    <p>{product.description}</p>
    <p>{product.category}</p>
  </div>
</div>
