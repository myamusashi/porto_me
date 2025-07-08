<script lang="ts">
	import Button from '$components/Button.svelte';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import Node from '$components/Node.svelte';
	import { Colors } from '$lib/Colors';
	import { fade, fly } from 'svelte/transition';

	let selectedNodeId: string | null = null;
	$: selectedNode = nodes.find((n) => n.id === selectedNodeId);

	const handleNodeSelect = (event: CustomEvent<string>) => (selectedNodeId = event.detail);
	const closeModal = () => (selectedNodeId = null);

	const nodes = [
		{
			id: 'n1',
			title: 'SEKOLAH DASAR NEGERI CINANGKA 02 DEPOK',
			content: '',
			image: '/images/logo-sd.svg'
		},
		{
			id: 'n2',
			title: 'SEKOLAH MENENGAH PERTAMA 25 DEPOK',
			content: '',
			image: '/images/logo-smp.svg'
		},
		{
			id: 'n3',
			title: 'SEKOLAH MENENGAH KEJURUAN INDONESIA GLOBAL',
			content: '',
			image: '/images/logo-smk.svg'
		},
		{ id: 'n4', title: 'UNIVERSITAS PAMULANG', content: '', image: '/images/logo-univ.svg' }
	];
</script>

<Header></Header>
<main class="relative mt-1 h-screen w-full overflow-y-auto">
	<div class="timeline-container" class:blurred={selectedNode}>
		{#each nodes as node (node.id)}
			<div class="timeline-item">
				<div class="timeline-content">
					<Node {node} on:select={handleNodeSelect} />
				</div>
			</div>
		{/each}
	</div>

	{#if selectedNode}
		<div class="modal-backdrop" on:click={closeModal} transition:fade={{ duration: 300 }}>
			<div class="modal-content" on:click|stopPropagation transition:fly={{ y: 50, duration: 400 }}>
				<h2 class="text-lg font-bold text-white">{selectedNode.title}</h2>
				<img
					src={selectedNode.image}
					alt="Logo {selectedNode.title}"
					class="mx-auto my-4 h-24 w-24"
				/>
				<p class="my-4 text-sm text-[#e4e4e4]">{selectedNode.content}</p>
				<Button symbol={'Tutup'} on:click={closeModal} bgColor={Colors.OnBackground}></Button>
			</div>
		</div>
	{/if}
</main>
<Footer></Footer>

<style>
	/* --- Efek Blur untuk Timeline --- */
	.blurred {
		filter: blur(8px);
		transform: scale(0.98);
		transition:
			filter 0.3s ease,
			transform 0.3s ease;
	}

	/* --- Struktur Timeline --- */
	.timeline-container {
		position: relative;
		max-width: 896px; /* 4xl */
		margin: 2rem auto;
		padding: 2rem 1rem;
		padding-left: 50px; /* Ruang untuk garis vertikal */
	}

	/* Garis Vertikal Utama */
	.timeline-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 15px;
		height: 100%;
		width: 2px;
		background-color: #4a5568;
	}

	.timeline-item {
		position: relative;
		margin-bottom: 50px;
	}

	/* Titik (dot) pada garis vertikal */
	.timeline-item::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -39px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: white;
		border: 2px solid #4a5568;
		z-index: 2;
		transform: translateY(-50%);
	}

	/* Garis Horizontal dari dot ke konten */
	.timeline-item::after {
		content: '';
		position: absolute;
		top: 50%;
		left: -35px;
		width: 35px;
		height: 2px;
		background-color: #4a5568;
		z-index: 1;
		transform: translateY(-50%);
	}

	.timeline-content {
		position: relative;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.timeline-content:hover {
		transform: translateX(5px);
	}

	/* --- Modal --- */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: grid;
		place-items: center;
	}

	.modal-content {
		background-color: #2d3748;
		padding: 2rem;
		border-radius: 0.5rem;
		max-width: 500px;
		width: 90%;
		border: 1px solid #4a5568;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	/* --- Responsive Design --- */
	@media (max-width: 768px) {
		.timeline-container {
			padding-left: 40px;
		}

		.timeline-item::before {
			left: -38px;
		}

		.timeline-item::after {
			left: -30px;
			width: 30px;
		}
	}
</style>
