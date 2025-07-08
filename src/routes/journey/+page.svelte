<script lang="ts">
	import Button from '$components/Button.svelte';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import Node from '$components/Node.svelte';
	import { p1_md, p2_md, p3_md, p4_md, p5_md } from './text';
	import { Colors } from '$lib/Colors';
	import { fade, fly } from 'svelte/transition';

	let selectedNodeId: string | null = null;
	$: selectedNode = nodes.find((n) => n.id === selectedNodeId);

	const handleNodeSelect = (event: CustomEvent<string>) => (selectedNodeId = event.detail);
	const closeModal = () => (selectedNodeId = null);

	const nodes = [
		{ id: 'n1', title: 'Node 1', content: p1_md, image: '' },
		{ id: 'n2', title: 'Node 2', content: p2_md, image: '' },
		{ id: 'n3', title: 'Node 3', content: p3_md, image: '' },
		{ id: 'n4', title: 'Node 4', content: p4_md, image: '' },
		{ id: 'n5', title: 'Node 5', content: p5_md, image: '' }
	];
</script>

<Header></Header>
<main class="relative h-screen w-full overflow-auto">
	<div class="tree-container" class:blurred={selectedNode}>
		<!-- Garis penghubung utama -->
		<div class="connection-lines">
			<!-- Garis vertikal tengah -->
			<div class="vertical-line"></div>

			<div class="horizontal-line node-1-line"></div>
			<div class="horizontal-line node-2-line"></div>
			<div class="horizontal-line node-3-line"></div>
			<div class="horizontal-line node-4-line"></div>
			<div class="horizontal-line node-5-line"></div>
		</div>

		<!-- Nodes -->
		{#each nodes as node (node.id)}
			<div class="line-clamp-1 node-wrapper node-{node.id}">
				<Node {node} on:select={handleNodeSelect} />
			</div>
		{/each}
	</div>

	{#if selectedNode}
		<button class="modal-backdrop z-0" on:click={closeModal} transition:fade={{ duration: 300 }}>
			<div class="modal-content" on:click|stopPropagation transition:fly={{ y: 50, duration: 400 }}>
				<h2 class="text-lg font-bold text-white">{selectedNode.title}</h2>
				<img src={selectedNode.image} alt="" />
				<p class="my-4 text-sm text-[#e4e4e4]">{selectedNode.content}</p>
				<Button symbol={'Tutup'} on:click={closeModal} bgColor={Colors.OnBackground}></Button>
			</div>
		</button>
	{/if}
</main>
<Footer></Footer>

<style>
	/* --- Container untuk Tree --- */
	.tree-container {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 80px 1fr; /* node kolom | Tengah |node kolom */
		grid-template-rows: repeat(6, 1fr);
		gap: 20px;
		height: 100%;
		padding: 50px;
		transition:
			filter 0.3s ease,
			transform 0.3s ease;
	}

	.tree-container.blurred {
		filter: blur(8px);
		transform: scale(0.98);
	}

	/* --- Peletakan Node di Grid --- */
	.node-wrapper {
		position: relative;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.node-n1 {
		grid-area: 2 / 1;
		justify-self: end;
		align-self: center;
	}

	.node-n2 {
		grid-area: 5 / 1;
		justify-self: end;
		align-self: center;
	}

	.node-n3 {
		grid-area: 1 / 3;
		justify-self: start;
		align-self: center;
	}

	.node-n4 {
		grid-area: 3 / 3;
		justify-self: start;
		align-self: center;
	}

	.node-n5 {
		grid-area: 6 / 3;
		justify-self: start;
		align-self: center;
	}

	/* --- Sistem Garis Penghubung --- */
	.connection-lines {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		pointer-events: none;
	}

	/* Garis vertikal tengah */
	.vertical-line {
		position: absolute;
		left: 50%;
		top: 50px;
		bottom: 50px;
		width: 2px;
		background-color: #e0e0e0;
		transform: translateX(-50%);
	}

	/* Garis horizontal umum */
	.horizontal-line {
		position: absolute;
		height: 2px;
		background-color: #e0e0e0;
	}

	/* Garis dari node 1 ke tengah */
	.node-1-line {
		left: calc(33.33% + 40px);
		right: 50%;
		top: calc(50px + (100vh - 100px) / 6 * 1.5 - 1px);
	}

	/* Garis dari Parent 2 ke tengah */
	.node-2-line {
		left: calc(33.33% + 40px);
		right: 50%;
		top: calc(50px + (100vh - 100px) / 6 * 4.5 - 1px);
	}

	/* Garis dari tengah ke Child 1 */
	.node-3-line {
		left: 50%;
		right: calc(33.33% + 40px);
		top: calc(50px + (100vh - 100px) / 6 * 0.5 - 1px);
	}

	/* Garis dari tengah ke Child 2 */
	.node-4-line {
		left: 50%;
		right: calc(33.33% + 40px);
		top: calc(50px + (100vh - 100px) / 6 * 2.5 - 1px);
	}

	/* Garis dari tengah ke Child 3 */
	.node-5-line {
		left: 50%;
		right: calc(33.33% + 40px);
		top: calc(50px + (100vh - 100px) / 6 * 5.5 - 1px);
	}

	/* --- Responsive Design --- */
	@media (max-width: 768px) {
		.tree-container {
			grid-template-columns: 1fr 60px 1fr;
			padding: 30px 20px;
			gap: 15px;
		}

		.vertical-line {
			top: 30px;
			bottom: 30px;
		}

		.node-1-line {
			left: calc(33.33% + 30px);
			top: calc(30px + (100vh - 60px) / 6 * 1.5 - 1px);
		}

		.node-2-line {
			left: calc(33.33% + 30px);
			top: calc(30px + (100vh - 60px) / 6 * 4.5 - 1px);
		}

		.node-3-line {
			right: calc(33.33% + 30px);
			top: calc(30px + (100vh - 60px) / 6 * 0.5 - 1px);
		}

		.node-4-line {
			right: calc(33.33% + 30px);
			top: calc(30px + (100vh - 60px) / 6 * 2.5 - 1px);
		}

		.node-5-line {
			right: calc(33.33% + 30px);
			top: calc(30px + (100vh - 60px) / 6 * 5.5 - 1px);
		}
	}

	/* --- Efek Hover untuk Garis --- */
	.tree-container:hover .connection-lines .horizontal-line,
	.tree-container:hover .connection-lines .vertical-line {
		background-color: #c0c0c0;
		transition: background-color 0.2s ease;
	}

	/* --- Style untuk Modal dan Backdrop --- */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;
	}

	.modal-content {
		background-color: #2a2a2a;
		padding: 40px;
		border-radius: 12px;
		max-width: 500px;
		width: 90%;
		border: 1px solid #444;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	/* --- Animasi untuk Garis --- */
	.connection-lines .vertical-line,
	.connection-lines .horizontal-line {
		opacity: 0;
		animation: drawLine 0.8s ease-out forwards;
	}

	.connection-lines .vertical-line {
		animation-delay: 0.2s;
	}

	.connection-lines .node-1-line {
		animation-delay: 0.4s;
	}

	.connection-lines .node-2-line {
		animation-delay: 0.5s;
	}

	.connection-lines .node-3-line {
		animation-delay: 0.6s;
	}

	.connection-lines .node-4-line {
		animation-delay: 0.7s;
	}

	.connection-lines .node-5-line {
		animation-delay: 0.8s;
	}

	@keyframes drawLine {
		from {
			opacity: 0;
			transform: scaleX(0);
		}
		to {
			opacity: 1;
			transform: scaleX(1);
		}
	}
</style>
