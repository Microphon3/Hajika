<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let className: string = '';
	export let shimmerColor: string = '#ffffff';
	export let background: string = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
	export let animationDuration: string = '3s';
	export let shimmerSize: string = '200px';
	
	let buttonElement: HTMLButtonElement;
	let isAnimating = false;
	
	function handleClick(event: MouseEvent) {
		// Trigger shimmer effect on click
		if (browser && buttonElement) {
			isAnimating = true;
			setTimeout(() => {
				isAnimating = false;
			}, 3000);
		}
		
		// Dispatch custom event for parent components
		const customEvent = new CustomEvent('shimmerClick', {
			detail: { originalEvent: event }
		});
		buttonElement?.dispatchEvent(customEvent);
	}
	
	onMount(() => {
		if (browser && buttonElement) {
			// Set CSS custom properties
			buttonElement.style.setProperty('--shimmer-color', shimmerColor);
			buttonElement.style.setProperty('--background', background);
			buttonElement.style.setProperty('--animation-duration', animationDuration);
			buttonElement.style.setProperty('--shimmer-size', shimmerSize);
		}
	});
</script>

<button
	bind:this={buttonElement}
	class="shimmer-button {className}"
	class:animating={isAnimating}
	on:click={handleClick}
	type="button"
>
	<span class="shimmer-button-content">
		<slot />
	</span>
</button>

<style>
	.shimmer-button {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		border: none;
		background: var(--background, linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%));
		color: white;
		font-weight: 600;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		padding: 16px 32px;
		font-size: 16px;
		letter-spacing: 0.5px;
		--shimmer-color: #ffffff;
		--animation-duration: 3s;
		--shimmer-size: 200px;
	}
	
	.shimmer-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
		background: linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%);
	}
	
	.shimmer-button:active {
		transform: translateY(0);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}
	
	.shimmer-button::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: var(--shimmer-size);
		height: var(--shimmer-size);
		background: linear-gradient(
			45deg,
			transparent,
			var(--shimmer-color, #ffffff) 40%,
			var(--shimmer-color, #ffffff) 60%,
			transparent
		);
		border-radius: 50%;
		opacity: 0;
		transform: rotate(45deg);
		animation: shimmer var(--animation-duration) ease-in-out infinite;
		pointer-events: none;
		z-index: 1;
	}
	
	.shimmer-button:hover::before,
	.shimmer-button.animating::before {
		opacity: 0.6;
		animation-duration: 1.5s;
	}
	
	.shimmer-button-content {
		position: relative;
		z-index: 2;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		white-space: nowrap;
		text-align: center;
		font-weight: 600;
		letter-spacing: 0.025em;
		line-height: 1;
	}
	
	@keyframes shimmer {
		0% {
			transform: translateX(-100%) translateY(-100%) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			transform: translateX(300%) translateY(300%) rotate(45deg);
			opacity: 0;
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.shimmer-button {
			padding: 14px 32px;
			font-size: 16px;
		}
	}
	
	@media (max-width: 640px) {
		.shimmer-button {
			padding: 12px 24px;
			font-size: 15px;
		}
	}
</style>