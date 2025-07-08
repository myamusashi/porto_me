<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let node: { id: string; title: string; content: any; image: string };

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('select', node.id);
	}
</script>

<button class="node-box z-[999999999]" on:click={handleClick} tabindex="0">
	<h2 class="text-lg font-bold text-black">{node.title}</h2>
	<img src={node.image} width="64" height="50" alt="" />
	<p class="my-4 line-clamp-3 text-sm text-black">{node.content}</p>
</button>

<style>
	.node-box {
		background-color: #e0e0e0;
		color: #1a1a1a;
		padding: 20px;
		border-radius: 8px;
		width: 100%;
		cursor: pointer;
		transition: transform 0.2s ease;
		text-align: center;
		border: 2px solid transparent;
	}
	.node-box:hover {
		transform: translateY(-5px);
		border-color: #ffffff;
	}
</style>
