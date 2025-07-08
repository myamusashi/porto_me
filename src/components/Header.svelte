<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	// State untuk mengontrol menu mobile
	let isMenuOpen = false;
</script>

<header class="sticky top-0 z-[999] mt-3 mb-12 flex justify-center">
	<div class="mx-4 my-2 flex w-6/12 max-w-7xl items-center justify-between rounded-full p-2 shadow-md">
		<a href="/" class="ml-4 text-white text-2xl font-semibold" style="text-decoration: none;">
			Gilang Ramadhan
		</a>

		<nav class="mr-4 hidden items-center md:flex">
			<a href="/skills" class="list-header px-3 py-1">Skills</a>
			<a href="/education" class="list-header px-3 py-1">Education</a>
			<a href="/journey" class="list-header px-3 py-1">Journey</a>
			<a href="/" class="list-header px-3 py-1">About Me</a>
		</nav>

		<div class="mr-4 md:hidden">
			<button on:click={() => (isMenuOpen = !isMenuOpen)} class="p-2" aria-label="Buka menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			</button>
		</div>
	</div>
</header>

{#if isMenuOpen}
	<div
		class="bg-opacity-95 fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-gray-900"
		transition:fade={{ duration: 200 }}
		on:click={() => (isMenuOpen = false)}
	>
		<button
			on:click={() => (isMenuOpen = false)}
			class="absolute top-8 right-8 p-2"
			aria-label="Tutup menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>

		<nav
			class="flex flex-col items-center gap-6 text-2xl"
			transition:fly={{ y: -20, duration: 300, delay: 100 }}
		>
			<a href="/skills" on:click={() => (isMenuOpen = false)}>Skills</a>
			<a href="/education" on:click={() => (isMenuOpen = false)}>Education</a>
			<a href="/journey" on:click={() => (isMenuOpen = false)}>Journey</a>
			<a href="/" on:click={() => (isMenuOpen = false)}>About Me</a>
		</nav>
	</div>
{/if}

<style>
	/* Styling umum untuk header dan link-nya */
	header div {
		background: rgba(29, 28, 30, 1);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	/* Styling untuk link di desktop */
	nav.hidden a {
		color: #e4e4e4;
		text-align: center;
		padding: 8px 12px;
		text-decoration: none;
		transition:
			background-color 300ms ease,
			border-radius 300ms ease,
			color 300ms ease;
	}

	nav.hidden a:hover {
		background: rgba(255, 255, 255, 1);
		border-radius: 4px;
		color: black;
	}

	/* Styling untuk link di menu mobile */
	div > nav > a {
		color: #e4e4e4;
		transition: color 300ms ease;
	}
	div > nav > a:hover {
		color: #ffffff;
	}

	/* Styling untuk tombol hamburger dan tombol tutup */
	button {
		color: #e4e4e4;
	}
</style>
