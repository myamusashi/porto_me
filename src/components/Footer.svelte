<script>
	import { Colors } from '$lib/Colors';
	import { linkedinIconPath, youtubeIconPath, instagramIconPath } from '$lib/Svg';

	const socialLinks = [
		{ name: 'LinkedIn', href: '#', iconSvgPath: linkedinIconPath },
		{ name: 'YouTube', href: '#', iconSvgPath: youtubeIconPath },
		{ name: 'Instagram', href: '#', iconSvgPath: instagramIconPath }
	];

	const linkColumnsData = [
		{
			title: 'Mulai',
			links: [
				{ text: 'Kemudian', href: '#' },
				{ text: 'Bangun', href: '#' },
				{ text: 'Ulangi', href: '#' }
			]
		},
		{
			title: 'Dengan',
			links: [
				{ text: 'Lanjutkan', href: '#' },
				{ text: 'Jika', href: '#' },
				{ text: 'Sampai', href: '#' }
			]
		},
		{
			title: 'Tidur',
			links: [
				{ text: 'Bermimpi', href: '#' },
				{ text: 'Terpaksa', href: '#' },
				{ text: 'Pensiun', href: '#' }
			]
		}
	];
</script>

<footer class="mt-12 border-t" style="border-color: {Colors.Accent2};">
	<div class="container mx-auto px-4 py-8 lg:px-8">
		<div class="flex flex-col items-start justify-between gap-8 md:flex-row">
			<div class="flex flex-col space-y-4">
				<h2 class="text-lg font-medium" style="color: {Colors.PrimaryText};">Gilang Ramadhan</h2>
				<div class="space-x-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							aria-label={social.name}
							class="text-gray-400 transition-colors duration-200 hover:text-gray-600"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path d={social.iconSvgPath}></path>
							</svg>
						</a>
					{/each}
				</div>
			</div>

			<div class="grid grid-cols-3 gap-x-16 text-sm">
				{#each linkColumnsData as column}
					<div>
						<h3 class="mb-3 font-medium" style="color: {Colors.PrimaryText}">
							{column.title}
						</h3>
						<ul class="space-y-2">
							{#each column.links as link}
								<li>
									<a
										href={link.href}
										class="text-gray-600 transition-colors duration-200 hover:text-gray-900"
										style="color: {Colors.SecondaryText};"
									>
										{link.text}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
