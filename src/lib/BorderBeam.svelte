<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let className: string = '';
	export let size: number = 200;
	export let duration: number = 15;
	export let delay: number = 9;
	export let borderWidth: number = 1.5;
	export let colorFrom: string = '#ffd700';
	export let colorVia: string = '#f59e0b';
	export let colorTo: string = '#d97706';
	
	let containerElement: HTMLDivElement;
	
	onMount(() => {
		if (browser && containerElement) {
			containerElement.style.setProperty('--size', `${size}px`);
			containerElement.style.setProperty('--duration', `${duration}s`);
			containerElement.style.setProperty('--delay', `${delay}s`);
			containerElement.style.setProperty('--border-width', `${borderWidth}px`);
			containerElement.style.setProperty('--color-from', colorFrom);
			containerElement.style.setProperty('--color-via', colorVia);
			containerElement.style.setProperty('--color-to', colorTo);
		}
	});
</script>

<div 
	bind:this={containerElement}
	class="border-beam-container {className}"
>
	<slot />
</div>

<style>
	.border-beam-container {
		position: relative;
		display: inline-block;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border-radius: 8px;
		padding: var(--border-width, 1.5px);
		overflow: hidden;
		
		--size: 200px;
		--duration: 15s;
		--delay: 9s;
		--border-width: 1.5px;
		--color-from: #ffd700;
		--color-via: #f59e0b;
		--color-to: #d97706;
	}
	
	.border-beam-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		padding: var(--border-width);
		background: linear-gradient(
			90deg,
			transparent,
			var(--color-from),
			var(--color-via),
			var(--color-to),
			transparent
		);
		background-size: var(--size) 100%;
		animation: 
			border-beam var(--duration) infinite linear,
			border-beam-delay var(--delay) infinite linear;
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask-composite: xor;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		pointer-events: none;
	}
	
	.border-beam-container:hover::before {
		animation-duration: calc(var(--duration) * 0.5);
	}
	
	:global(.border-beam-container > *) {
		position: relative;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border-radius: calc(8px - var(--border-width));
		border: none;
		color: white;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		padding: 16px 32px;
		font-size: 16px;
		letter-spacing: 0.5px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: auto;
		text-decoration: none;
	}
	
	:global(.border-beam-container > *:hover) {
		background: linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}
	
	:global(.border-beam-container > *:active) {
		transform: translateY(0);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}
	
	@keyframes border-beam {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}
	
	@keyframes border-beam-delay {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		:global(.border-beam-container > *) {
			padding: 14px 32px;
			font-size: 16px;
		}
	}
	
	@media (max-width: 640px) {
		:global(.border-beam-container > *) {
			padding: 12px 24px;
			font-size: 15px;
		}
	}
</style>