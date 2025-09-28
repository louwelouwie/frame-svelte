<script lang="ts">
    export let data: {
        title: string;
        content: string;
        image: string;
    };
</script>

<article class="max-w-lg mx-auto mt-12 shadow-lg p-3 rounded-lg">
    <img
        src={data.image}
        alt={data.title}
        class="w-full h-64 object-cover rounded-lg"
    />
    <h1 class="text-2xl font-bold mt-4 ml-2">{data.title}</h1>
    <div class="mt-2 text-gray-700 ml-2">
        {@html data.content}
    </div>
</article>
