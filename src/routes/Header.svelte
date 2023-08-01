<script lang="ts">
</script>
<div class="wrapper">
	<div class="container">
		<h2>
			moinsen.space
		</h2>
		<nav>
			<a href="/begrüßungen">Begrüßungen</a>
			<a href="/ai">Ai Begrüßung</a>
			<a href="/spenden">Spenden</a>
			<a href="/rechtliches">rechtliches</a>
		</nav>
	</div>

</div>

<style>
	.wrapper {
		height: 10vh;
		background-color: transparent;
		width: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		padding: 11px;
		border-radius: 11px;
		background-color: var(--secondary);
	}
	.container h2 {
		color: white;
		margin-left: 10px;
		font-size: xx-large;	
	}
	.container nav {
		margin-right: 10px;
	}
	.container nav a {
		background-color: var(--primary);
		padding: 10px;
		transition: all 0.4s ease;
		color: var(--background);
		border-radius: 4px;
		text-decoration: none;
	}
	.container nav a:hover {
		background-color: lightblue;
		transition: all 0.4s ease;
	}
</style>

