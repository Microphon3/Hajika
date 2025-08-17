<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { browser } from '$app/environment';
	
	let container: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let animationId: number;
	
	// Clean professional animation objects
	let logoSphere: THREE.Mesh;
	let orbitRings: THREE.Mesh[] = [];
	let floatingDots: THREE.Mesh[] = [];
	
	onMount(() => {
		if (!browser) return;
		
		initThreeJS();
		animate();
		
		// Handle window resize
		const handleResize = () => {
			if (!container || !camera || !renderer) return;
			const width = container.clientWidth;
			const height = container.clientHeight;
			
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};
		
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	
	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (renderer) {
			renderer.dispose();
		}
	});
	
	function initThreeJS() {
		if (!browser || !container) return;
		
		// Scene setup
		scene = new THREE.Scene();
		
		// Camera setup
		const width = container.clientWidth;
		const height = container.clientHeight;
		camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
		camera.position.set(0, 0, 6);
		
		// Renderer setup
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		renderer.setClearColor(0x000000, 0); // Transparent background
		container.appendChild(renderer.domElement);
		
		// Elegant, sophisticated lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambientLight);
		
		const directionalLight = new THREE.DirectionalLight(0x4a9eff, 0.8);
		directionalLight.position.set(2, 2, 2);
		scene.add(directionalLight);
		
		// Central elegant sphere - represents Hajika core
		const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
		const sphereMaterial = new THREE.MeshPhongMaterial({
			color: 0x2563eb,
			transparent: true,
			opacity: 0.85,
			shininess: 150,
			emissive: 0x0a1628,
			specular: 0x60a5fa
		});
		logoSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		scene.add(logoSphere);
		
		// Create 3 elegant orbit rings
		for (let i = 0; i < 3; i++) {
			const radius = 1.8 + (i * 0.4);
			const ringGeometry = new THREE.TorusGeometry(radius, 0.02, 8, 64);
			const ringMaterial = new THREE.MeshBasicMaterial({
				color: i === 0 ? 0x3b82f6 : i === 1 ? 0x6366f1 : 0x8b5cf6,
				transparent: true,
				opacity: 0.5
			});
			const ring = new THREE.Mesh(ringGeometry, ringMaterial);
			
			// Random rotation for each ring
			ring.rotation.x = Math.random() * Math.PI;
			ring.rotation.y = Math.random() * Math.PI;
			ring.rotation.z = Math.random() * Math.PI;
			
			scene.add(ring);
			orbitRings.push(ring);
		}
		
		// Create minimal floating dots
		for (let i = 0; i < 8; i++) {
			const dotGeometry = new THREE.SphereGeometry(0.04, 8, 8);
			const dotMaterial = new THREE.MeshBasicMaterial({
				color: 0x60a5fa,
				transparent: true,
				opacity: 0.6
			});
			const dot = new THREE.Mesh(dotGeometry, dotMaterial);
			
			// Position dots on orbit paths
			const angle = (i / 8) * Math.PI * 2;
			const radius = 2.2;
			dot.position.set(
				Math.cos(angle) * radius,
				Math.sin(angle) * radius,
				(Math.random() - 0.5) * 0.5
			);
			
			dot.userData = {
				angle: angle,
				radius: radius,
				speed: 0.5 + Math.random() * 0.5
			};
			
			scene.add(dot);
			floatingDots.push(dot);
		}
	}
	
	function animate() {
		if (!browser) return;
		animationId = requestAnimationFrame(animate);
		
		const time = Date.now() * 0.001;
		
		// Smooth central sphere rotation
		if (logoSphere) {
			logoSphere.rotation.y += 0.01;
			logoSphere.rotation.x += 0.005;
			
			// Subtle breathing effect
			const scale = 1 + Math.sin(time * 1.2) * 0.05;
			logoSphere.scale.set(scale, scale, scale);
		}
		
		// Animate orbit rings with different speeds
		orbitRings.forEach((ring, index) => {
			const speed = 0.5 + (index * 0.2);
			ring.rotation.x += 0.005 * speed;
			ring.rotation.y += 0.008 * speed;
			ring.rotation.z += 0.003 * speed;
		});
		
		// Animate floating dots in smooth orbits
		floatingDots.forEach((dot, index) => {
			const userData = dot.userData;
			userData.angle += 0.01 * userData.speed;
			
			const x = Math.cos(userData.angle) * userData.radius;
			const y = Math.sin(userData.angle) * userData.radius;
			const z = Math.sin(time * 2 + index) * 0.3;
			
			dot.position.set(x, y, z);
			
			// Subtle opacity pulsing
			const material = dot.material as THREE.MeshBasicMaterial;
			material.opacity = 0.4 + Math.sin(time * 3 + index) * 0.3;
		});
		
		// Minimal camera movement
		camera.position.x = Math.sin(time * 0.1) * 0.1;
		camera.position.y = Math.cos(time * 0.15) * 0.1;
		camera.lookAt(0, 0, 0);
		
		if (renderer && scene && camera) {
			renderer.render(scene, camera);
		}
	}
</script>

<div bind:this={container} class="w-full h-full relative">
</div>

<style>
	div {
		position: relative;
		overflow: hidden;
	}
</style>