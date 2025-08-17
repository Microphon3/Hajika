<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let className: string = '';
	export let animateOnLoad: boolean = false;
	export let duration: number = 800;
	
	let textElement: HTMLElement;
	let isAnimating = false;
	let originalText = '';
	
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	function scrambleText() {
		if (!browser || !textElement || isAnimating) return;
		
		isAnimating = true;
		originalText = textElement.textContent || '';
		const textLength = originalText.length;
		let iteration = 0;
		let scrambleCount = 0;
		
		const interval = setInterval(() => {
			textElement.textContent = originalText
				.split('')
				.map((char, index) => {
					if (char === ' ') return ' ';
					if (index < iteration) {
						return originalText[index];
					}
					// More furious scrambling with multiple character sets
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');
			
			scrambleCount++;
			
			// Only start revealing after some furious scrambling
			if (scrambleCount > 10) {
				iteration += 1 / 3;
			}
			
			if (iteration >= textLength) {
				clearInterval(interval);
				textElement.textContent = originalText;
				isAnimating = false;
			}
		}, 30); // Even faster interval for furious movement
	}
	
	function handleMouseEnter() {
		scrambleText();
	}
	
	onMount(() => {
		if (browser && textElement) {
			originalText = textElement.textContent || '';
			if (animateOnLoad) {
				setTimeout(scrambleText, 100);
			}
		}
	});
</script>

<span 
	bind:this={textElement}
	class="hyper-text {className}"
	on:mouseenter={handleMouseEnter}
	role="button"
	tabindex="0"
	on:keydown={(e) => e.key === 'Enter' && scrambleText()}
>
	<slot />
</span>

<style>
	.hyper-text {
		cursor: pointer;
		transition: all 0.3s ease;
		user-select: none;
		display: inline-block;
	}
	
	.hyper-text:hover {
		transform: scale(1.01);
	}
	
	:global(.hyper-text.hajika-logo) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		font-weight: 800;
		background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-shadow: none;
		position: relative;
		letter-spacing: 0.1em;
	}
</style>