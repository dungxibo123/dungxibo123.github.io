# Project Structure

## Root Directory
- **Configuration Files**: `svelte.config.js`, `vite.config.ts`, `tailwind.config.ts`, `uno.config.ts`
- **Package Management**: `package.json`, `pnpm-lock.yaml`, `.npmrc`
- **Content Processing**: `mdsvex.config.js`, `urara.ts` (content management script)
- **Build Output**: `.svelte-kit/`, `build/` (generated, don't edit)

## Source Code (`src/`)
```
src/
├── app.html              # HTML template
├── app.d.ts              # TypeScript declarations
├── app.pcss              # Global styles
├── hooks.server.ts       # Server-side hooks
├── lib/                  # Shared library code
│   ├── components/       # Reusable Svelte components
│   ├── config/          # Configuration files
│   ├── stores/          # Svelte stores
│   ├── styles/          # CSS files
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
└── routes/              # SvelteKit routes (auto-generated from urara/)
```

## Content Directory (`urara/`)
- **Primary Content Source**: All blog posts, pages, and assets
- **Markdown Files**: `.md` files become pages/posts
- **Assets**: Images, PDFs, and other static files
- **Auto-Processing**: Content gets copied to `src/routes/` and `static/` during build

## Key Directories

### `src/lib/components/`
- **Layout Components**: `header.svelte`, `footer.svelte`, `post_layout.svelte`
- **Post Components**: `post_card.svelte`, `post_toc.svelte`, `post_pagination.svelte`
- **Comment Systems**: `comments/` (giscus, utterances, webmentions)
- **Prose Components**: `prose/` (enhanced markdown rendering)

### `src/lib/config/`
- **site.ts**: Site metadata, author info, domain settings
- **general.ts**: Themes, navigation, header/footer config
- **post.ts**: Post-related configuration
- **publication.ts**: Academic publication settings

### `src/lib/types/`
- **TypeScript Definitions**: Interfaces for site config, posts, publications
- **Type Safety**: Ensures consistent data structures across the app

## Content Conventions

### File Naming
- **Pages**: `+page.md` or `+page.svelte.md`
- **Layouts**: `+layout.svelte`
- **Server Routes**: `+page.server.ts`

### Frontmatter Structure
```yaml
---
title: 'Post Title'
summary: 'Brief description'
published: '2024-01-01'
updated: '2024-01-02'
tags: ['tag1', 'tag2']
toc: true
---
```

### Asset Organization
- **Images**: Place in same directory as content or `urara/assets/`
- **Documents**: PDFs and files in `urara/assets/`
- **Processing**: Assets automatically copied to `static/` and `src/static/`

## Build Process
1. **Content Processing**: `urara.ts` copies content from `urara/` to `src/routes/`
2. **Markdown Processing**: MDsveX converts `.md` to Svelte components
3. **Asset Handling**: Images and files copied to appropriate directories
4. **Route Generation**: SvelteKit generates routes from file structure
5. **Static Generation**: Build process creates static site or server bundle

## Development Workflow
- **Content Changes**: Edit files in `urara/` directory
- **Component Changes**: Edit files in `src/lib/components/`
- **Configuration**: Modify files in `src/lib/config/`
- **Styling**: Use Tailwind classes, DaisyUI components, or custom CSS