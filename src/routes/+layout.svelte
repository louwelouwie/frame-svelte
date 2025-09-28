<script lang="ts">
    import Header from "../components/+Header.svelte";

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<title>SvelteKit Opdrachten</title>
	<meta name="description" content="SvelteKit Opdrachten"/>
	<meta property="og:author" content="Chris Louwerse"/>
</svelte:head>

<Header/>

{@render children?.()}
