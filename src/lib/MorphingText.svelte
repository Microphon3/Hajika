<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	
	export let texts: string[] = [];
	export let className: string = '';
	export let morphDuration: number = 2000;
	export let pauseDuration: number = 1500;
	
	let textElement: HTMLElement;
	let currentIndex = 0;
	let isAnimating = false;
	
	const englishChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
	const devanagariChars = 'अआइईउऊएऐओऔकखगघचछजझटठडढतथदधनपफबभमयरलवशषसह०१२३४५६७८९';
	
	function getRandomCharacter(text: string) {
		// Detect if text contains Devanagari characters
		const hasDevanagari = /[\u0900-\u097F]/.test(text);
		const charSet = hasDevanagari ? devanagariChars : englishChars;
		return charSet[Math.floor(Math.random() * charSet.length)];
	}
	
	function morphToNext() {
		if (!browser || !textElement || isAnimating || texts.length === 0) return;
		
		isAnimating = true;
		const fromText = texts[currentIndex];
		const nextIndex = (currentIndex + 1) % texts.length;
		const toText = texts[nextIndex];
		
		const maxLength = Math.max(fromText.length, toText.length);
		let step = 0;
		const totalSteps = 28; // More steps for Devanagari support
		
		const morphInterval = setInterval(() => {
			let morphedText = '';
			
			for (let i = 0; i < maxLength; i++) {
				const fromChar = fromText[i] || ' ';
				const toChar = toText[i] || ' ';
				
				if (step === totalSteps) {
					// Final step - show target character
					morphedText += toChar;
				} else if (i < step - 3) {
					// Character has morphed to target
					morphedText += toChar;
				} else if (i < step + 3) {
					// Characters in morphing zone - show random
					if (Math.random() < 0.6) {
						morphedText += getRandomCharacter(toText);
					} else {
						morphedText += toChar;
					}
				} else {
					// Characters still showing original
					morphedText += fromChar;
				}
			}
			
			// Trim trailing spaces but preserve structure
			textElement.textContent = morphedText.replace(/\s+$/, '');
			
			step++;
			if (step > totalSteps) {
				clearInterval(morphInterval);
				currentIndex = nextIndex;
				isAnimating = false;
				
				// Schedule next morph
				setTimeout(() => {
					morphToNext();
				}, pauseDuration);
			}
		}, morphDuration / totalSteps);
	}
	
	onMount(() => {
		if (browser && texts.length > 0) {
			textElement.textContent = texts[0];
			// Start morphing after initial pause
			setTimeout(() => {
				morphToNext();
			}, pauseDuration);
		}
	});
	
	onDestroy(() => {
		// Animation intervals are handled within the morphToNext function scope
	});
</script>

<span 
	bind:this={textElement}
	class="morphing-text {className}"
>
	{#if texts.length > 0}
		{texts[0]}
	{/if}
</span>

<style>
	.morphing-text {
		display: inline-block;
		font-family: monospace;
		white-space: nowrap;
		min-height: 1em;
		overflow: visible;
	}
	
	/* Mobile adjustments */
	@media (max-width: 768px) {
		.morphing-text {
			white-space: nowrap;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			max-width: 100vw;
			overflow: visible;
		}
	}
	
	@media (max-width: 640px) {
		.morphing-text {
			white-space: nowrap;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 10px;
			box-sizing: border-box;
			max-width: calc(100vw - 20px);
			overflow: visible;
		}
	}
	
	@media (max-width: 480px) {
		.morphing-text {
			white-space: nowrap;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 15px;
			box-sizing: border-box;
			max-width: calc(100vw - 30px);
			overflow: visible;
			transform: scale(0.9);
			transform-origin: center;
		}
	}
	
	/* Very small screens */
	@media (max-width: 360px) {
		.morphing-text {
			transform: scale(0.8);
			padding: 0 20px;
			max-width: calc(100vw - 40px);
		}
	}
</style>