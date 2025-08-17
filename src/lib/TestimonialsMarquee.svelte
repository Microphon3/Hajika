<script lang="ts">
	import Marquee from './Marquee.svelte';
	
	const reviews = [
		{
			name: "Priya Sharma",
			username: "@priyasharma",
			body: "Hajika helped me book train tickets for my parents' anniversary trip to Goa. Even got them senior citizen discount! 🙏",
			img: "https://avatar.vercel.sh/priya"
		},
		{
			name: "Rahul Gupta",
			username: "@rahulgupta",
			body: "Was stuck in Bangalore traffic, Hajika rescheduled my client meeting and ordered lunch for the team. Lifesaver! 💯",
			img: "https://avatar.vercel.sh/rahul"
		},
		{
			name: "Anita Iyer",
			username: "@anitaiyer",
			body: "Hajika sorted my kids' school admission docs while I was at work. Even reminded me about the fees deadline! 👏",
			img: "https://avatar.vercel.sh/anita"
		},
		{
			name: "Arjun Malhotra",
			username: "@arjunmalhotra",
			body: "My startup's registration was stuck for weeks. Hajika got it done in 3 days! Finally got my GST number 🚀",
			img: "https://avatar.vercel.sh/arjun"
		},
		{
			name: "Sneha Reddy",
			username: "@snehareddy",
			body: "Hajika found me a reliable maid, plumber, and electrician in my new Hyderabad flat. All verified and trusted! ✨",
			img: "https://avatar.vercel.sh/sneha"
		},
		{
			name: "Vikram Singh",
			username: "@vikramsingh",
			body: "Missed my flight to Mumbai, Hajika reboked me on the next one and got a full refund on the original ticket! 🙌",
			img: "https://avatar.vercel.sh/vikram"
		},
		{
			name: "Meera Joshi",
			username: "@meerajoshi",
			body: "Hajika organized my daughter's birthday party - from cake to decorations. Even arranged the photographer! 🎂",
			img: "https://avatar.vercel.sh/meera"
		},
		{
			name: "Karan Agarwal",
			username: "@karanagarwal",
			body: "Had 200+ emails after vacation. Hajika sorted them by priority and responded to clients. Came back to clean inbox! 📧",
			img: "https://avatar.vercel.sh/karan"
		},
		{
			name: "Divya Nair",
			username: "@divyanair",
			body: "Hajika helped me find the best health insurance for my family. Compared 15 plans and saved ₹20k annually! 💰",
			img: "https://avatar.vercel.sh/divya"
		},
		{
			name: "Amit Kumar",
			username: "@amitkumar",
			body: "Buying my first car was overwhelming. Hajika negotiated with dealers, arranged financing, and got me ₹50k off! 🚗",
			img: "https://avatar.vercel.sh/amit"
		},
		{
			name: "Pooja Kapoor",
			username: "@poojakapoor",
			body: "Hajika coordinated my wedding planning from Delhi while I was in Pune for work. Every vendor was perfect! 💍",
			img: "https://avatar.vercel.sh/pooja"
		},
		{
			name: "Rohit Mehta",
			username: "@rohitmehta",
			body: "Property hunting in Mumbai was nightmare. Hajika shortlisted 5 perfect flats, negotiated rent, handled paperwork! 🏠",
			img: "https://avatar.vercel.sh/rohit"
		}
	];
	
	const firstRow = reviews.slice(0, 6);
	const secondRow = reviews.slice(6);
</script>

<div class="testimonials-section">
	<!-- Section Header -->
	<div class="text-center mb-8">
		<h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
			What Our Clients Say
		</h3>
		<p class="text-lg text-gray-600">
			Real stories from busy professionals across India
		</p>
	</div>
	
	<!-- Marquee Testimonials -->
	<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
		<Marquee pauseOnHover={true} duration="25s" className="mb-3">
			{#each firstRow as review}
				<div class="review-card">
					<div class="flex flex-row items-center gap-2 mb-2">
						<img 
							class="rounded-full w-8 h-8" 
							alt="{review.name}" 
							src="{review.img}"
						/>
						<div class="flex flex-col">
							<div class="text-sm font-semibold text-gray-900">
								{review.name}
							</div>
							<div class="text-xs text-gray-500">
								{review.username}
							</div>
						</div>
					</div>
					<blockquote class="text-sm text-gray-700 leading-relaxed">
						{review.body}
					</blockquote>
				</div>
			{/each}
		</Marquee>
		
		<Marquee reverse={true} pauseOnHover={true} duration="25s">
			{#each secondRow as review}
				<div class="review-card">
					<div class="flex flex-row items-center gap-2 mb-2">
						<img 
							class="rounded-full w-8 h-8" 
							alt="{review.name}" 
							src="{review.img}"
						/>
						<div class="flex flex-col">
							<div class="text-sm font-semibold text-gray-900">
								{review.name}
							</div>
							<div class="text-xs text-gray-500">
								{review.username}
							</div>
						</div>
					</div>
					<blockquote class="text-sm text-gray-700 leading-relaxed">
						{review.body}
					</blockquote>
				</div>
			{/each}
		</Marquee>
		
		<!-- Gradient Overlays -->
		<div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
		<div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
	</div>
</div>

<style>
	.testimonials-section {
		padding: 3rem 0;
		background: white;
		max-width: 100vw;
		overflow: hidden;
	}
	
	.review-card {
		position: relative;
		height: auto;
		width: 260px;
		cursor: pointer;
		overflow: hidden;
		border-radius: 8px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 16px;
		background: rgba(0, 0, 0, 0.01);
		transition: all 0.3s ease;
		flex-shrink: 0;
	}
	
	.review-card:hover {
		background: rgba(0, 0, 0, 0.05);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.testimonials-section {
			padding: 2rem 0;
		}
		
		.review-card {
			width: 220px;
			padding: 14px;
		}
		
		h3 {
			font-size: 2rem;
		}
		
		p {
			font-size: 1rem;
		}
	}
</style>