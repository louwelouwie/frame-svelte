<script>
    	import { page } from '$app/state';
</script>

<nav class="bg-neutral-800 w-full h-20">
    <ul class="text-white w-5/6 h-full flex justify-end items-center mx-auto gap-10 text-lg">
        <li class="mr-auto"><a href="/" title="home">FRAME SVELTEKIT</a></li>
        <li><a href="/fakeproducten" class={page.url.pathname == '/fakeproducten' ? 'font-bold' : 'font-medium'}>API Producten</a></li>
        <li><a href="/producten" class={page.url.pathname == '/producten' ? 'font-bold' : 'font-medium'}>Producten</a></li>
    </ul>
</nav>