<script lang="ts">
	export let name: string;
	export let className: string = 'w-8 h-8';
	export let color: string = 'currentColor';
</script>

{#if name === 'email'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 8L10.89 13.26C11.2 13.47 11.8 13.47 12.11 13.26L20 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		<path d="M3 7L12 13L21 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
	</svg>
{:else if name === 'travel'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" fill={color}/>
		<path d="M8 12C8 10.34 9.34 9 11 9H13C14.66 9 16 10.34 16 12V13H14V12C14 11.45 13.55 11 13 11H11C10.45 11 10 11.45 10 12V13H8V12Z" fill={color}/>
		<circle cx="9" cy="8" r="1" fill={color}/>
		<circle cx="15" cy="16" r="1" fill={color}/>
		<path d="M6.5 6.5L8 8M17.5 6.5L16 8M12 4V6" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
	</svg>
{:else if name === 'data'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<rect x="3" y="4" width="18" height="16" rx="2" stroke={color} stroke-width="2" fill="none"/>
		<path d="M7 8H17M7 12H17M7 16H13" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
		<circle cx="5" cy="8" r="0.5" fill={color}/>
		<circle cx="5" cy="12" r="0.5" fill={color}/>
		<circle cx="5" cy="16" r="0.5" fill={color}/>
		<path d="M3 6H21" stroke={color} stroke-width="2" stroke-linecap="round"/>
	</svg>
{:else if name === 'research'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="11" cy="11" r="8" stroke={color} stroke-width="2" fill="none"/>
		<path d="21 21L16.65 16.65" stroke={color} stroke-width="2" stroke-linecap="round"/>
		<circle cx="11" cy="11" r="3" stroke={color} stroke-width="1.5" fill="none"/>
		<path d="M8 11H14M11 8V14" stroke={color} stroke-width="1" stroke-linecap="round"/>
	</svg>
{:else if name === 'meeting'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<rect x="3" y="4" width="18" height="15" rx="2" stroke={color} stroke-width="2" fill="none"/>
		<path d="M16 2V6M8 2V6M3 10H21" stroke={color} stroke-width="2" stroke-linecap="round"/>
		<circle cx="8" cy="14" r="1" fill={color}/>
		<circle cx="12" cy="14" r="1" fill={color}/>
		<circle cx="16" cy="14" r="1" fill={color}/>
		<path d="M7 16H17" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
	</svg>
{:else if name === 'support'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		<circle cx="9" cy="9" r="1" fill={color}/>
		<circle cx="15" cy="9" r="1" fill={color}/>
		<path d="M9 13C9 13 10 14 12 14S15 13 15 13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
	</svg>
{:else if name === 'essential'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke={color} stroke-width="2" stroke-linejoin="round" fill="none"/>
		<circle cx="12" cy="12" r="3" stroke={color} stroke-width="1.5" fill="none"/>
		<path d="M12 9V15M9 12H15" stroke={color} stroke-width="1" stroke-linecap="round"/>
	</svg>
{:else if name === 'premium'}
	<svg class={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 9L12 2L18 9H22L16 15H20L12 22L4 15H8L2 9H6Z" fill={color}/>
		<path d="M12 6L14 10H10L12 6Z" fill="white"/>
		<circle cx="12" cy="16" r="1.5" fill="white"/>
		<path d="M8 12L16 12" stroke="white" stroke-width="1" stroke-linecap="round"/>
	</svg>
{/if}