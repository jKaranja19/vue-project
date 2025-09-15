# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Setup and Installation
```bash
npm install
npx playwright install  # Required for end-to-end tests
```

### Development Server
```bash
npm run dev              # Start development server (http://localhost:5173)
npm run preview          # Preview production build (http://localhost:4173)
```

### Building and Type Checking
```bash
npm run build            # Full production build with type checking
npm run build-only       # Build without type checking
npm run type-check       # Run TypeScript type checking only
```

### Testing
```bash
npm run test:e2e                              # Run all Playwright tests
npm run test:e2e -- --project=chromium       # Run tests on specific browser
npm run test:e2e -- tests/example.spec.ts    # Run specific test file
npm run test:e2e -- --debug                  # Run tests in debug mode
```

### Code Formatting
```bash
npm run format           # Format code with Prettier (src/ directory only)
```

## Development Shortcuts

### Quick Development Workflow
```bash
# Start fresh development session
npm run dev && open http://localhost:5173

# Quick build and test cycle
npm run build && npm run test:e2e

# Format code and check types
npm run format && npm run type-check

# Debug specific test
npm run test:e2e -- --debug tests/vue.spec.ts
```

### File Navigation Shortcuts
```bash
# Open main application files
code src/App.vue                    # Root component
code src/components/BlogList.vue    # Main blog container
code src/stores/blogStore.ts        # State management
code vite.config.ts                 # Build configuration
code playwright.config.ts           # Test configuration
```

### Common Development Tasks
```bash
# Create new component
touch src/components/NewComponent.vue

# Add new Pinia store
touch src/stores/newStore.ts

# Run specific browser tests
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit

# Build for production and preview
npm run build && npm run preview
```

### Debugging Shortcuts
```bash
# Start dev server with verbose output
npm run dev --verbose

# Type check with watch mode
npx vue-tsc --build --watch

# Run tests with UI mode
npx playwright test --ui

# Generate test report
npx playwright show-report
```

## Project Architecture

### Tech Stack
- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite with Vue DevTools integration
- **State Management**: Pinia with persisted state plugin
- **Language**: TypeScript with Vue SFC support
- **Testing**: Playwright for E2E testing
- **Code Formatting**: Prettier

### Application Structure
This is a blog viewer application with the following component hierarchy:
```
App.vue (root)
├── BlogList.vue (main container)
    ├── BlogPost.vue (individual blog cards)
    ├── BlogForm.vue (create/edit blog form)
    └── BlogModal.vue (full blog display)
```

### Key Components
- **App.vue**: Root component with main layout and title
- **BlogList.vue**: Parent component managing blog posts, modal states, and form visibility
- **BlogPost.vue**: Reusable card component for displaying blog summaries with edit/delete actions
- **BlogForm.vue**: Form component for creating and editing blog posts
- **BlogModal.vue**: Modal component for displaying full blog content
- **ChildComponent.vue**: Example component demonstrating props and emits

### State Management
- **Pinia Store**: `src/stores/blogStore.ts` handles blog data with localStorage persistence
- **Store Actions**: addBlog, updateBlog, deleteBlog, saveToLocalStorage, loadFromLocalStorage
- **Pinia Plugin**: Uses `pinia-plugin-persistedstate` for automatic persistence

### File Organization
```
src/
├── main.ts              # App initialization with Pinia setup
├── App.vue              # Root component
├── ChildComponent.vue   # Example component
├── components/          # Vue components
│   ├── BlogList.vue     # Main blog container
│   ├── BlogPost.vue     # Individual blog card
│   ├── BlogForm.vue     # Create/edit form
│   ├── BlogModal.vue    # Full blog display
│   └── icons/           # Icon components
└── stores/              # Pinia stores
    └── blogStore.ts     # Blog state management
```

### Development Configuration
- **Vite Config**: Includes Vue, Vue JSX, and Vue DevTools plugins with @ alias for src/
- **TypeScript**: Configured with Vue-specific settings and node types
- **Prettier**: Configured with single quotes, no semicolons, 100 character line width
- **Playwright**: Configured for multi-browser testing with automatic dev server startup

### Testing Setup
- Tests located in `e2e/` directory
- Playwright automatically starts dev server before running tests
- Configured for Chromium, Firefox, and WebKit browsers
- CI-optimized settings for headless execution

### Development Notes
- Uses Vue 3 Composition API with `<script setup>` syntax
- TypeScript is configured but some files use loose typing (e.g., `any` types in store)
- Local storage is used for blog persistence via Pinia plugin
- Component communication uses props down, events up pattern
- VSCode with Volar extension recommended for Vue development
