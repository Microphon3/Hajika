
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import TestimonialsMarquee from '$lib/TestimonialsMarquee.svelte';
	import HyperText from '$lib/HyperText.svelte';
	import MorphingText from '$lib/MorphingText.svelte';
	import InteractiveGridPattern from '$lib/InteractiveGridPattern.svelte';
	import PremiumIcons from '$lib/icons/PremiumIcons.svelte';
	import BorderBeam from '$lib/BorderBeam.svelte';
	
</script>

<svelte:head>
	<title>Hajika - Premium Virtual Assistant Services | Consider It Done</title>
	<meta name="description" content="Premium virtual assistance that actually gets things done. Completely remote, 100% online execution, tailored to your needs." />
</svelte:head>

<style>
	.hajika-logo {
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
	.hajika-logo::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, #ffd700, #f59e0b, #d97706);
		border-radius: 1px;
		opacity: 0.9;
	}
	
	.shine-border-container {
		position: relative;
		border-radius: 12px;
		padding: 2px;
		overflow: hidden;
		background: linear-gradient(45deg, #ffd700, #f59e0b, #d97706, #ffd700);
		background-size: 400% 400%;
		animation: shine-gradient 3s ease-in-out infinite;
	}
	
	.shine-border-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.4),
			transparent
		);
		animation: shine-sweep 2s infinite;
		z-index: 2;
	}
	
	.shine-border-inner {
		background: rgba(0, 0, 0, 0.95);
		border-radius: 10px;
		padding: 16px 20px;
		position: relative;
		z-index: 1;
	}
	
	@keyframes shine-gradient {
		0%, 100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
	
	@keyframes shine-sweep {
		0% {
			left: -100%;
		}
		100% {
			left: 100%;
		}
	}
	
	
	.corporate-button {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
		border: none;
		border-radius: 6px;
		padding: 16px 32px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		letter-spacing: 0.5px;
	}
	
	.corporate-button:hover {
		background: linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}
	
	.corporate-button:active {
		transform: translateY(0);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.hajika-logo {
			font-size: 4rem;
		}
		
		section h2 {
			font-size: 2.5rem;
		}
		
		section p {
			font-size: 1.125rem;
		}
		
		.corporate-button {
			padding: 14px 32px;
			font-size: 16px;
		}
	}
	
	@media (max-width: 640px) {
		.hajika-logo {
			font-size: 3rem;
		}
		
		section h2 {
			font-size: 2rem;
		}
		
		section p {
			font-size: 1rem;
		}
		
		.corporate-button {
			padding: 12px 24px;
			font-size: 15px;
		}
	}
	
	/* Morphing text specific styles */
	:global(.morphing-logo) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
		background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: 0.1em;
		white-space: nowrap;
		display: inline-block;
		width: 100%;
		text-align: center;
		min-width: max-content;
	}
	
	/* Mobile morphing text adjustments */
	@media (max-width: 768px) {
		:global(.morphing-logo) {
			font-size: 3.2rem !important;
			letter-spacing: 0.03em;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
		}
	}
	
	@media (max-width: 640px) {
		:global(.morphing-logo) {
			font-size: 2.4rem !important;
			letter-spacing: 0.01em;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 10px;
			box-sizing: border-box;
		}
	}
	
	/* iPhone specific adjustments */
	@media (max-width: 480px) {
		:global(.morphing-logo) {
			font-size: 2rem !important;
			letter-spacing: 0;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 15px;
			box-sizing: border-box;
			line-height: 1.1;
		}
	}
	
	/* Interactive Grid Pattern Styles */
	:global(.mask-radial-gradient) {
		mask-image: radial-gradient(400px circle at center, white, transparent);
		-webkit-mask-image: radial-gradient(400px circle at center, white, transparent);
	}
	
	:global(.mask-size-400) {
		mask-size: 400px 400px;
		-webkit-mask-size: 400px 400px;
	}
	
	:global(.inset-x-0) {
		left: 0;
		right: 0;
	}
	
	:global(.inset-y-\[-30\%\]) {
		top: -30%;
		bottom: -30%;
	}
	
	:global(.skew-y-12) {
		transform: skewY(12deg);
	}
	
	/* Footer specific morphing text styles */
	:global(.footer-logo) {
		font-size: 3rem !important;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
		background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 50%, #6b7280 100%) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
		background-clip: text !important;
		letter-spacing: 0.1em;
		font-weight: 800;
		display: inline-block;
		text-align: center;
		width: auto;
		min-width: max-content;
		white-space: nowrap;
	}
	
	/* Footer mobile morphing text adjustments */
	@media (max-width: 768px) {
		:global(.footer-logo) {
			font-size: 2.5rem !important;
			letter-spacing: 0.05em;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
		}
	}
	
	@media (max-width: 640px) {
		:global(.footer-logo) {
			font-size: 2rem !important;
			letter-spacing: 0.02em;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 10px;
			box-sizing: border-box;
		}
	}
	
	/* Footer iPhone specific adjustments */
	@media (max-width: 480px) {
		:global(.footer-logo) {
			font-size: 1.75rem !important;
			letter-spacing: 0;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			padding: 0 15px;
			box-sizing: border-box;
			transform: scale(0.95);
			transform-origin: center;
		}
	}
	
	/* Section header morphing text styles */
	:global(.section-header-logo) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
		background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
		background-clip: text !important;
		letter-spacing: 0.05em;
		font-weight: 900;
		display: inline-block;
		text-align: center;
		white-space: nowrap;
	}
	
	/* Section header mobile adjustments - smaller than hero */
	@media (max-width: 768px) {
		:global(.section-header-logo) {
			font-size: 2.5rem !important;
			letter-spacing: 0.02em;
			width: 100%;
			text-align: center;
			display: block;
			margin: 0 auto;
			max-width: 100vw;
			overflow: visible;
		}
	}
	
	@media (max-width: 640px) {
		:global(.section-header-logo) {
			font-size: 1.8rem !important;
			letter-spacing: 0.01em;
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
		:global(.section-header-logo) {
			font-size: 1.5rem !important;
			letter-spacing: 0;
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
	
	/* Very small screens for section headers */
	@media (max-width: 360px) {
		:global(.section-header-logo) {
			font-size: 1.3rem !important;
			transform: scale(0.85);
			padding: 0 20px;
			max-width: calc(100vw - 40px);
		}
	}
	
	/* Unified section styling */
	section {
		position: relative;
		transition: all 0.3s ease;
	}
	
	/* Add subtle animation on scroll */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	/* Premium section borders */
	.premium-section {
		border-top: 1px solid rgba(255, 215, 0, 0.1);
		border-bottom: 1px solid rgba(255, 215, 0, 0.1);
	}
	
	/* Pricing header special styling for dark background */
	:global(.pricing-header) {
		background: linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 50%, #d1d5db 100%) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
		background-clip: text !important;
	}
</style>

<!-- Hero Section -->
<section class="min-h-screen bg-white relative flex items-center py-16 overflow-hidden">
	<!-- Interactive Grid Background -->
	<InteractiveGridPattern 
		className="mask-radial-gradient mask-size-400 inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
	/>
	
	<!-- Main Hero Content -->
	<div class="w-full max-w-6xl mx-auto px-8 text-center relative z-10">
		<!-- Logo Treatment -->
		<div class="mb-10">
			<h1 class="hajika-logo text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] mb-4 min-h-[1.2em]">
				<MorphingText 
					texts={["HAJIKA", "Consider It Done", "हाजिका", "हो जाएगा"]} 
					className="hajika-logo morphing-logo"
					morphDuration={1800}
					pauseDuration={2200}
				/>
			</h1>
		</div>
		
		<!-- Main Headlines -->
		<div class="mb-10">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-600 leading-[1.2] mb-6">
				Premium Virtual Assistance
			</h2>
			<p class="text-xl md:text-2xl text-gray-700 font-normal max-w-3xl mx-auto">
				24/7 | Human VA Led | AI Backed | Tailored to Your Needs
			</p>
		</div>
		
		<!-- CTA Button -->
		<div class="mb-8">
			<BorderBeam 
				className="shadow-2xl"
				size={300}
				duration={12}
				delay={6}
				borderWidth={2}
				colorFrom="#ffd700"
				colorVia="#f59e0b"
				colorTo="#d97706"
			>
				<button 
					on:click={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
					class="text-lg px-12 py-4"
				>
					<span class="whitespace-nowrap text-center font-medium leading-none tracking-tight text-white">
						Start Delegating Today
					</span>
				</button>
			</BorderBeam>
		</div>
		
		<!-- Value Proposition -->
		<div class="text-lg text-gray-600">
			<p class="font-medium">✓ Real-Time Execution  ✓ Live Updates  ✓ Complete Transparency</p>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<TestimonialsMarquee />

<!-- Core Services Section -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
				<MorphingText 
					texts={["We Handle Everything", "हम सब संभाल लेंगे"]} 
					className="section-header-logo"
					morphDuration={2000}
					pauseDuration={4000}
				/>
			</h3>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
				From inbox chaos to travel nightmares - we've got the skills to tackle anything on your to-do list
			</p>
		</div>
		
		<!-- Services Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Email & Calendar Management -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500">
				<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="email" className="w-8 h-8" color="#2563eb" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Email & Calendar Management</h4>
				<p class="text-gray-600 mb-4 font-semibold">"Inbox zero. Calendar organized. Meetings that matter."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Organizing inbox, prioritizing messages</li>
					<li>• Scheduling appointments, managing invitations</li>
					<li>• Email responses and follow-ups</li>
				</ul>
			</div>
			
			<!-- Travel Arrangements -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-500">
				<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="travel" className="w-8 h-8" color="#059669" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Travel Arrangements</h4>
				<p class="text-gray-600 mb-4 font-semibold">"From booking to boarding, we handle it all."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Flights, hotels, transportation</li>
					<li>• Detailed itineraries, change management</li>
					<li>• Travel document organization</li>
				</ul>
			</div>
			
			<!-- Data Entry & Bookkeeping -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-500">
				<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="data" className="w-8 h-8" color="#7c3aed" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Data Entry & Bookkeeping</h4>
				<p class="text-gray-600 mb-4 font-semibold">"Numbers organized. Records pristine. Files findable."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Maintaining records, processing invoices</li>
					<li>• Expense tracking, digital file organization</li>
					<li>• Database management and cleanup</li>
				</ul>
			</div>
			
			<!-- Research & Reporting -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-orange-500">
				<div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="research" className="w-8 h-8" color="#ea580c" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Research & Reporting</h4>
				<p class="text-gray-600 mb-4 font-semibold">"Information gathered. Insights delivered. Decisions made easier."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Data gathering, presentation prep</li>
					<li>• Compiled reports for decision-making</li>
					<li>• Market research and analysis</li>
				</ul>
			</div>
			
			<!-- Meeting Coordination -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-indigo-500">
				<div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="meeting" className="w-8 h-8" color="#4f46e5" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Meeting Coordination</h4>
				<p class="text-gray-600 mb-4 font-semibold">"Seamless meetings from setup to follow-up."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Video conference setup, agenda prep</li>
					<li>• Note-taking, action item follow-up</li>
					<li>• Participant coordination and reminders</li>
				</ul>
			</div>
			
			<!-- Customer Support -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-pink-500">
				<div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
					<PremiumIcons name="support" className="w-8 h-8" color="#db2777" />
				</div>
				<h4 class="text-2xl font-bold text-gray-900 mb-3">Customer Support</h4>
				<p class="text-gray-600 mb-4 font-semibold">"Your customers feel heard. Always."</p>
				<ul class="text-gray-600 space-y-2">
					<li>• Email responses, inquiry management</li>
					<li>• Support ticket handling</li>
					<li>• Customer satisfaction follow-ups</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Extended Services Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
				<MorphingText 
					texts={["And So Much More", "और भी बहुत कुछ"]} 
					className="section-header-logo"
					morphDuration={2000}
					pauseDuration={4000}
				/>
			</h3>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
				Whatever you need, we've got the expertise to make it happen
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
				<h4 class="font-bold text-lg text-gray-900 mb-2">Marketing Support</h4>
				<p class="text-gray-600 text-sm">Social media, content creation, newsletters</p>
			</div>
			<div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
				<h4 class="font-bold text-lg text-gray-900 mb-2">Project Coordination</h4>
				<p class="text-gray-600 text-sm">Task boards, contractor management</p>
			</div>
			<div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
				<h4 class="font-bold text-lg text-gray-900 mb-2">Event Assistance</h4>
				<p class="text-gray-600 text-sm">Setup, registration, follow-up</p>
			</div>
			<div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
				<h4 class="font-bold text-lg text-gray-900 mb-2">E-commerce Support</h4>
				<p class="text-gray-600 text-sm">Updates, enrollments, reporting</p>
			</div>
		</div>
		
		<div class="text-center mt-12">
			<p class="text-2xl font-bold text-gray-900 mb-4">
				Anything Else You Need, Just Ask!
			</p>
			<p class="text-lg text-gray-600">
				Consider It Done.
			</p>
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section class="py-24 bg-gray-50 relative overflow-hidden premium-section">
	<!-- Background elements -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full blur-3xl"></div>
	</div>
	
	<div class="relative z-10 container mx-auto px-6">
		<div class="text-center mb-16">
			<h3 class="text-3xl md:text-4xl font-black mb-6">
				<MorphingText 
					texts={["Simple, Transparent Pricing", "सरल पारदर्शी"]} 
					className="section-header-logo"
					morphDuration={2000}
					pauseDuration={4000}
				/>
			</h3>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
				Choose the plan that fits your needs. Both include our signature "Consider It Done" guarantee.
			</p>
		</div>
		
		<!-- Pricing Cards -->
		<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
			<!-- Essential Plan -->
			<div class="bg-white backdrop-blur-lg rounded-3xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
				<div class="text-center mb-8">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
						<PremiumIcons name="essential" className="w-8 h-8" color="white" />
					</div>
					<h4 class="text-2xl font-bold text-gray-900 mb-2">Essential</h4>
					<p class="text-gray-600">Perfect for professionals and small teams</p>
				</div>
				
				<div class="text-center mb-8">
					<div class="text-5xl font-black text-gray-900 mb-2">₹9,000</div>
					<div class="text-gray-500">per month</div>
				</div>
				
				<div class="space-y-4 mb-8">
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
							<span class="text-white text-xs">✓</span>
						</div>
						<span class="text-gray-700">20 hours per month</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
							<span class="text-white text-xs">✓</span>
						</div>
						<span class="text-gray-700">Email & Calendar Management</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
							<span class="text-white text-xs">✓</span>
						</div>
						<span class="text-gray-700">Basic Research & Data Entry</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
							<span class="text-white text-xs">✓</span>
						</div>
						<span class="text-gray-700">Travel Planning</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
							<span class="text-white text-xs">✓</span>
						</div>
						<span class="text-gray-700">Real-time response & execution</span>
					</div>
				</div>
				
				<button class="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-4 px-6 rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Choose Essential
				</button>
			</div>
			
			<!-- Premium Plan -->
			<div class="bg-white backdrop-blur-lg rounded-3xl p-8 border-2 border-yellow-400 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 relative">
				<div class="text-center mb-8">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-4">
						<PremiumIcons name="premium" className="w-8 h-8" color="black" />
					</div>
					<h4 class="text-2xl font-bold text-gray-900 mb-2">Premium</h4>
					<p class="text-gray-600">For executives and growing businesses</p>
				</div>
				
				<div class="text-center mb-8">
					<div class="text-5xl font-black text-gray-900 mb-2">₹25,000</div>
					<div class="text-gray-500">per month</div>
				</div>
				
				<div class="space-y-4 mb-8">
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700 font-semibold">60 hours per month</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Everything in Essential +</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Advanced Research & Analysis</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Project Management</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Marketing & Social Media Support</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Instant response & live updates</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
							<span class="text-black text-xs">✓</span>
						</div>
						<span class="text-gray-700">Priority support & dedicated manager</span>
					</div>
				</div>
				
				<button class="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Choose Premium
				</button>
			</div>
		</div>
		
		<!-- Additional info -->
		<div class="text-center">
			<p class="text-gray-600 mb-4">All plans include a 7-day money-back guarantee</p>
			<div class="inline-flex items-center gap-6 text-sm text-gray-500">
				<span>• No setup fees</span>
				<span>• Cancel anytime</span>
				<span>• Dedicated account manager</span>
			</div>
		</div>
	</div>
</section>

<!-- Sign Up Section -->
<section id="signup-form" class="py-20 bg-gray-100">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h3 class="text-3xl md:text-4xl font-black mb-6">
					<MorphingText 
						texts={["Ready to Get Started?", "शुरू करने के लिए तैयार हैं?"]} 
						className="section-header-logo"
						morphDuration={2000}
						pauseDuration={4000}
					/>
				</h3>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
					Join hundreds of professionals who've transformed their productivity with Hajika
				</p>
			</div>
			
			<!-- Signup Form -->
			<div class="bg-white backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
				<div class="text-center mb-8">
					<h4 class="text-2xl font-bold text-gray-900 mb-2">Sign Me Up!</h4>
					<p class="text-gray-600">Get started in less than 2 minutes</p>
				</div>
				
				<form class="space-y-6 max-w-2xl mx-auto">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label class="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
							<input type="text" placeholder="Your full name" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all">
						</div>
						<div>
							<label class="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
							<input type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all">
						</div>
					</div>
					
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label class="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
							<input type="tel" placeholder="+91 98765 43210" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all">
						</div>
						<div>
							<label class="block text-gray-700 text-sm font-semibold mb-2">Preferred Plan</label>
							<select class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-all">
								<option value="essential" class="bg-white">Essential (₹9,000/month)</option>
								<option value="premium" class="bg-white">Premium (₹25,000/month)</option>
							</select>
						</div>
					</div>
					
					<div>
						<label class="block text-gray-700 text-sm font-semibold mb-2">Tell us about your needs</label>
						<textarea rows="4" placeholder="What tasks would you like us to help you with?" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all resize-none"></textarea>
					</div>
					
					<div class="text-center">
						<BorderBeam 
							className="inline-block"
							size={350}
							duration={10}
							delay={5}
							borderWidth={2.5}
							colorFrom="#ffd700"
							colorVia="#f59e0b"
							colorTo="#d97706"
						>
							<button type="submit" class="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-12 rounded-xl text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
								Start My Hajika Journey
							</button>
						</BorderBeam>
						<p class="text-gray-600 text-sm mt-4">We'll contact you within 24 hours to set everything up!</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>


<!-- Footer -->
<footer class="bg-gray-800 py-8">
	<div class="container mx-auto px-6 text-center">
		<div class="hajika-logo text-3xl font-black mb-6">
			<MorphingText 
				texts={["HAJIKA", "Consider It Done", "हाजिका", "हो जाएगा"]} 
				className="hajika-logo morphing-logo footer-logo"
				morphDuration={1800}
				pauseDuration={2200}
			/>
		</div>
		<p class="text-gray-400 mt-4">&copy; 2025 Hajika Virtual Assistant Services. All rights reserved.</p>
	</div>
</footer>
