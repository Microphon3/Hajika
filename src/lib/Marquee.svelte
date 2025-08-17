<script lang="ts">
	import { onMount } from 'svelte';
	
	export let pauseOnHover: boolean = false;
	export let reverse: boolean = false;
	export let duration: string = '20s';
	export let className: string = '';
	
	let marqueeContainer: HTMLDivElement;
	
	onMount(() => {
		if (marqueeContainer) {
			marqueeContainer.style.setProperty('--duration', duration);
		}
	});
</script>

<div 
	class="marquee-container {className}" 
	class:pause-on-hover={pauseOnHover}
	class:reverse
	bind:this={marqueeContainer}
>
	<div class="marquee-content">
		<slot />
	</div>
	<div class="marquee-content" aria-hidden="true">
		<slot />
	</div>
</div>

<style>
	.marquee-container {
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 1rem;
		--duration: 20s;
	}
	
	.marquee-content {
		display: flex;
		animation: marquee var(--duration) linear infinite;
		gap: 1rem;
		min-width: 100%;
		flex-shrink: 0;
	}
	
	.reverse .marquee-content {
		animation-direction: reverse;
	}
	
	.pause-on-hover:hover .marquee-content {
		animation-play-state: paused;
	}
	
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>