<script lang="ts">
	import { Colors } from '$lib/Colors';
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import type { Actions } from './$types';

	export let form: Actions;
</script>

<Header></Header>
<main id="about_me" class="mx-auto px-4 sm:px-6 md:w-7xl">
	<section class="md:mt-14">
		<div class="flex flex-col items-center gap-12 md:flex-row">
			<div class="w-full md:w-6/12">
				<article class="w-full text-center text-balance md:text-left">
					<h1 class="mb-5 text-4xl font-bold md:text-5xl" style="color: {Colors.PrimaryText};">
						About Me
					</h1>
					<p style="color: {Colors.SecondaryText};">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aspernatur dolores
						provident recusandae animi rem. Accusamus necessitatibus ipsum, debitis exercitationem
						repudiandae maxime, ullam dolores corporis aliquam ex porro est nesciunt. Lorem ipsum
						dolor sit amet consectetur, adipisicing elit. Doloremque alias ratione in, repudiandae
						dolor porro exercitationem quos eaque, voluptas dolorum omnis. Inventore eveniet quod
						nisi ut obcaecati maxime quidem harum? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. At, reiciendis? Nemo cum deleniti beatae quae sapiente labore
						consectetur magni, libero soluta cumque repudiandae minima, ullam laudantium saepe alias
						laborum sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis aliquid
						delectus sit sequi fugiat sed quisquam officiis quos, sint adipisci quam totam pariatur
						dolorum in molestias itaque voluptatibus et.
					</p>
				</article>
			</div>
			<div class="flex w-full justify-center md:w-6/12">
				<img
					class="h-auto w-full max-w-md rounded-lg object-cover shadow-lg"
					src="/images/dummy-profile-about_me.png"
					alt=""
				/>
			</div>
		</div>
	</section>

	<section id="contact" class="md:justify-start sm:flex sm:justify-center">
		<div class="w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
			<h1
				class="mb-5 md:text-left sm:text-center text-4xl font-bold md:text-5xl"
				style="color: {Colors.PrimaryText};"
			>
				Contact me
			</h1>
			<div class="rounded-2xl p-5 md:p-8" style="background-color: {Colors.OnBackground};">
				{#if form?.success}
					<p class="mb-4 text-green-400">Pesan berhasil terkirim!</p>
				{/if}

				{#if form?.error}
					<p class="mb-4 text-red-400">Error: {form.error}</p>
				{/if}

				<form method="POST">
					<label class="text-white" for="fname">First Name</label>
					<input class="text-white" type="text" name="firstname" placeholder="Jane" required />

					<label class="text-white" for="lname">Last Name</label>
					<input class="text-white" type="text" name="lastname" placeholder="Doe" required />

					<label class="text-white" for="email">Email</label>
					<input
						class="text-white"
						type="email"
						name="email"
						placeholder="jane@email.com"
						required
					/>

					<label class="text-white" for="message">Your Message</label>
					<textarea
						class="text-white"
						name="message"
						id="message"
						placeholder="Write something..."
						required
					></textarea>

					<Button symbol={'Submit'} bgColor={Colors.OnBackground}></Button>
				</form>
			</div>
		</div>
	</section>
</main>
<Footer></Footer>

<style>
	input[type='text'],
    input[type='email'],
    textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid #444;
		border-radius: 4px;
		box-sizing: border-box;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
		background-color: transparent;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #777;
	}
</style>
