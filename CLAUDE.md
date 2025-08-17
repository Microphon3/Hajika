# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server (configured for ngrok with host 0.0.0.0)
- `npm run dev -- --open` - Start dev server and open in browser
- `npm run dev -- --host 0.0.0.0` - Explicitly start with network access (already default)
- `npm run build` - Build for production (uses static adapter)
- `npm run preview` - Preview production build

### Code Quality
- `npm run check` - Type check with svelte-check
- `npm run check:watch` - Type check in watch mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting with Prettier

### Testing
- `npm run test` - Run all tests (currently only e2e)
- `npm run test:e2e` - Run Playwright e2e tests
- Tests run against production build (port 4173) for realistic performance testing

### Storybook
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

## Project Overview

**Hajika** is a premium virtual assistant services landing page built as a sophisticated marketing website with advanced UI animations and effects.

### Business Context
- **Product**: Premium virtual assistant services targeting executives and professionals
- **Brand**: High-end, professional, with real-time service capabilities
- **Key Message**: "Consider It Done" - emphasizing immediate execution
- **Languages**: English and Devanagari (हाजिका/हो जाएगा) for Indian market

## Architecture

### Tech Stack
- **Framework**: SvelteKit with Svelte 5 (using modern runes syntax)
- **Styling**: Tailwind CSS v4 with official plugins
- **Build Tool**: Vite with custom server configuration for ngrok
- **3D Graphics**: Three.js for interactive animations
- **TypeScript**: Full TypeScript support
- **Testing**: Playwright for e2e testing
- **Documentation**: Storybook

### Key Components Architecture

#### Premium UI Components (`src/lib/`)
- **MorphingText.svelte** - Core brand component that morphs between "HAJIKA" → "Consider It Done" → "हाजिका" → "हो जाएगा"
  - Supports both English and Devanagari character sets
  - Intelligent character detection using Unicode ranges
  - Used in hero section and footer for brand consistency

- **BorderBeam.svelte** - Premium golden border animation for CTA buttons
  - Configurable gradient colors, timing, and sizing
  - Used for "Start Delegating Today" button

- **InteractiveGridPattern.svelte** - Hero section background with mouse-responsive grid
  - SVG-based grid with interactive opacity effects
  - Supports masking and positioning transforms

- **PremiumIcons.svelte** - Custom SVG icon system for services
  - Professional black/white vectors tailored to virtual assistant services
  - Replaces generic icons with brand-specific designs

- **TestimonialsMarquee.svelte** - Indian urban testimonials with scrolling animation
  - Uses Marquee.svelte component for smooth infinite scroll
  - Real testimonials from Indian cities and contexts

- **HyperText.svelte** - Text scrambling effect for interactive elements
  - Configurable scrambling patterns and timing
  - Enhanced version with "furious" character movement

- **ShimmerButton.svelte** - Button component with shimmer animation effects
  - Used for interactive CTAs and form submissions

- **ThreeAnimation.svelte** - Three.js 3D graphics integration
  - Browser-safe Three.js component with proper lifecycle management
  - SSR-compatible with onMount initialization

- **Marquee.svelte** - Base scrolling animation component
  - Reusable infinite scroll functionality
  - Used by TestimonialsMarquee for testimonial display

#### Page Structure
- **+page.svelte** - Single-page application with sections:
  - Hero with morphing logo and interactive grid
  - Services grid with custom icons
  - Testimonials marquee
  - Pricing cards with premium/essential tiers
  - Contact form
  - Footer with consistent morphing logo

### Configuration Details

#### Development Server
- Configured for ngrok tunneling with allowed hosts
- Default host: 0.0.0.0 for network access
- Support for multiple ngrok domains

#### Static Deployment
- Uses `@sveltejs/adapter-static` for static site generation
- Production builds are fully static for easy deployment

#### Browser Compatibility
- SSR-safe components with `browser` guards
- All animations check for browser environment before executing
- Proper cleanup of intervals and event listeners

### Brand Standards

#### Colors
- **Primary Gradient**: #1f2937 → #374151 → #4b5563 (gray scale)
- **Accent Gold**: #ffd700 → #f59e0b → #d97706 (golden highlights)
- **Service Colors**: Blue (#2563eb), Green (#059669), Purple (#7c3aed), Orange (#ea580c), Indigo (#4f46e5), Pink (#db2777)

#### Typography
- **Primary Font**: Inter with system fallbacks
- **Morphing Text**: Font-weight 800, letter-spacing 0.1em
- **Mobile Responsive**: Progressive font sizing (3rem → 2.4rem → 2rem)

#### Animation Principles
- **Real-time responsiveness**: All timing reflects immediate service delivery
- **Professional elegance**: Subtle, sophisticated animations over flashy effects
- **Cultural sensitivity**: Proper Devanagari Unicode support and character sets

### Development Patterns

#### Component Creation
- All interactive components must include browser guards
- Use `onMount` and `onDestroy` for lifecycle management
- Implement proper TypeScript exports with default values
- Follow existing responsive design patterns

#### SSR Considerations
- Import `{ browser }` from `$app/environment` for client-side only code
- Wrap DOM manipulations in browser checks
- Use proper component lifecycle hooks

#### Responsive Design
- Mobile-first approach with progressive enhancement
- Specific breakpoints: 768px (tablet), 640px (phone), 480px (iPhone)
- Transform scaling as fallback for space constraints

### Testing Strategy
- Playwright e2e tests run against production build
- Storybook for component documentation and testing
- Manual testing required for animation timing and responsive behavior

### Deployment Notes
- Static site ready for CDN deployment
- ngrok configuration suggests development workflow with external preview
- No server-side dependencies in production build

### Important Development Notes
- All components use Svelte 5 runes syntax (`$props()`, `$state()`, etc.)
- Three.js integration requires careful SSR handling with browser guards
- Vite dev server is pre-configured for ngrok tunneling (host: 0.0.0.0)
- Component library uses barrel exports pattern (import from `$lib`)
- Storybook available for component development and documentation