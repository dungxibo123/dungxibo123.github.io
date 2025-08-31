# Tech Stack

## Core Framework
- **SvelteKit**: Full-stack framework with SSR/SSG capabilities
- **Svelte**: Component framework with compile-time optimizations
- **TypeScript**: Primary language for type safety

## Build System & Tools
- **Vite**: Build tool and dev server
- **pnpm**: Package manager (preferred over npm/yarn)
- **ESLint**: Code linting with @antfu/eslint-config and @importantimport/eslint-config
- **PostCSS**: CSS processing with LightningCSS

## Styling & UI
- **TailwindCSS**: Utility-first CSS framework
- **DaisyUI**: Component library built on Tailwind
- **UnoCSS**: Atomic CSS engine for icons and utilities
- **@tailwindcss/typography**: Beautiful typography defaults

## Content Processing
- **MDsveX**: Markdown preprocessor for Svelte with component support
- **KaTeX**: Mathematical expression rendering
- **Shiki Twoslash**: Syntax highlighting with TypeScript support
- **remark/rehype**: Markdown processing plugins

## PWA & Performance
- **@vite-pwa/sveltekit**: PWA capabilities
- **vite-imagetools**: Image optimization
- **Workbox**: Service worker management

## Deployment Adapters
- **@sveltejs/adapter-static**: Static site generation (default)
- **@sveltejs/adapter-node**: Node.js server
- **@sveltejs/adapter-netlify**: Netlify deployment
- **@sveltejs/adapter-vercel**: Vercel deployment

## Common Commands

```bash
# Development
pnpm dev              # Start dev server with file watching
pnpm dev:parallel     # Run dev with parallel processes

# Building
pnpm build           # Full production build
pnpm preview         # Preview built site
pnpm start           # Build and start Node.js server

# Content Management
pnpm urara:build     # Process urara content to src/routes
pnpm urara:watch     # Watch urara directory for changes

# Code Quality
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint issues
pnpm check           # Run Svelte type checking
pnpm check:watch     # Watch mode for type checking

# Utilities
pnpm clean           # Clean generated files
pnpm tsc             # Compile TypeScript
```

## Environment Variables
- `URARA_SITE_DOMAIN`: Site domain
- `URARA_SITE_PROTOCOL`: Protocol (http/https)
- `ADAPTER`: Deployment adapter (node/static/auto)
- `NODE_OPTIONS=--max_old_space_size=7680`: Memory allocation for builds