<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let className: string = '';
	export let width: number = 40;
	export let height: number = 40;
	export let strokeDasharray: string = '0';
	export let squares: [number, number][] = [
		[4, 4],
		[6, 4],
		[8, 4],
		[10, 4],
		[12, 4],
		[14, 4],
		[16, 4],
		[18, 4],
		[20, 4],
		[22, 4],
		[24, 4]
	];
	
	let svgElement: SVGSVGElement;
	let gridSquares: { id: string; x: number; y: number; opacity: number }[] = [];
	let mousePosition = { x: 0, y: 0 };
	let isHovering = false;
	
	onMount(() => {
		if (!browser) return;
		
		// Initialize grid squares
		const cols = Math.ceil(800 / width);
		const rows = Math.ceil(600 / height);
		
		gridSquares = [];
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				gridSquares.push({
					id: `${row}-${col}`,
					x: col * width,
					y: row * height,
					opacity: 0.1
				});
			}
		}
		
		// Add mouse move listener
		const handleMouseMove = (e: MouseEvent) => {
			if (!svgElement) return;
			
			const rect = svgElement.getBoundingClientRect();
			mousePosition = {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			};
			
			// Update square opacities based on distance from mouse
			gridSquares = gridSquares.map(square => {
				const distance = Math.sqrt(
					Math.pow(mousePosition.x - (square.x + width / 2), 2) +
					Math.pow(mousePosition.y - (square.y + height / 2), 2)
				);
				
				const maxDistance = 150;
				const opacity = isHovering 
					? Math.max(0.1, Math.min(1, (maxDistance - distance) / maxDistance * 0.8))
					: 0.1;
				
				return { ...square, opacity };
			});
		};
		
		const handleMouseEnter = () => {
			isHovering = true;
		};
		
		const handleMouseLeave = () => {
			isHovering = false;
			// Reset all squares to default opacity
			gridSquares = gridSquares.map(square => ({ ...square, opacity: 0.1 }));
		};
		
		svgElement.addEventListener('mousemove', handleMouseMove);
		svgElement.addEventListener('mouseenter', handleMouseEnter);
		svgElement.addEventListener('mouseleave', handleMouseLeave);
		
		return () => {
			if (svgElement) {
				svgElement.removeEventListener('mousemove', handleMouseMove);
				svgElement.removeEventListener('mouseenter', handleMouseEnter);
				svgElement.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	});
</script>

<svg
	bind:this={svgElement}
	class="interactive-grid-pattern {className}"
	width="100%"
	height="100%"
	viewBox="0 0 800 600"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<pattern
			id="grid-pattern"
			width={width}
			height={height}
			patternUnits="userSpaceOnUse"
		>
			<path
				d="M.5 {height}V.5H{width}"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-dasharray={strokeDasharray}
			/>
		</pattern>
	</defs>
	
	<!-- Base grid -->
	<rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.1" />
	
	<!-- Interactive squares -->
	{#each gridSquares as square (square.id)}
		<rect
			x={square.x}
			y={square.y}
			width={width}
			height={height}
			fill="currentColor"
			opacity={square.opacity}
			style="transition: opacity 0.2s ease;"
		/>
	{/each}
	
	<!-- Special accent squares -->
	{#each squares as [x, y]}
		<rect
			x={x * width}
			y={y * height}
			width={width}
			height={height}
			fill="currentColor"
			opacity="0.3"
		/>
	{/each}
</svg>

<style>
	.interactive-grid-pattern {
		position: absolute;
		inset: 0;
		color: #6b7280;
		pointer-events: auto;
		z-index: 0;
	}
</style>