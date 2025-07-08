<script>
	export let symbol;
	export let bgColor;
</script>

<button type="submit" on:click style="background-color: {bgColor}">
	{symbol}
</button>

<style>
	button {
		border: solid 1px #fff;
		padding: 0.5rem 2rem;
		color: #e4e4e4;
		font-size: 1.5rem;
		border-radius: 1rem;
		transition: all 250ms;
		transform-origin: center;
		box-shadow:
			0px 3px 3px rgba(0, 0, 0, 0.25),
			inset 0px -2px 3px rgba(0, 0, 0, 0.25);
	}
	button:hover {
		cursor: pointer;
		transform: scale(0.975);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
		background-color: #ffffff !important;
		color: black;
	}
</style>
