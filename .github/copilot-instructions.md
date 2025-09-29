# MUI-KIT Copilot Instructions

## Project Overview
This is a Next.js 15 App Router project featuring a comprehensive Material-UI (MUI) component kit with custom theming. The architecture prioritizes design system consistency through centralized theme customization and component overrides.

## Architecture Patterns

### Theme System Structure
- **Theme Entry Point**: `theme/index.ts` exports `createMuiTheme(mode)` function
- **Component Overrides**: Individual component themes in `theme/ThemeComponents/` are aggregated in `theme/components.ts`
- **Color Palette**: `theme/colors.ts` defines semantic color tokens (primary, secondary, neutral, etc.)
- **Theme Provider Setup**: `app/theme-client.tsx` wraps the app with MUI ThemeProvider (client component)

### Component Customization Pattern
Each MUI component gets its own theme file (e.g., `theme/ThemeComponents/Button.ts`):
```typescript
export const Button = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => theme.unstable_sx({ /* styles */ }),
      // variant-specific overrides
    },
  },
};
```

### App Router Integration
- Root layout (`app/layout.tsx`) wraps children with `AppRouterCacheProvider` and `ThemeClient`
- Pages are organized by feature (e.g., `app/alert/`, `app/dashboard/`)
- Mix of CSS Modules (`styles/Home.module.css`) and MUI's sx prop for styling

## Key Files & Workflows

### Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

### Adding New Components
1. Create theme customization in `theme/ThemeComponents/ComponentName.ts`
2. Export from `theme/ThemeComponents/index.ts`  
3. Import and spread in `theme/components.ts`
4. Use component with customized theme automatically applied

### Color System Usage
- Reference semantic colors: `primary.main`, `neutral.400`, `success.light`
- Custom avatar colors: `avatar.main`, `avatar.background`
- Text colors: Use `text.primary` for consistent text styling

### Layout Constants
- Screen breakpoints and dimensions in `constants/screen-css-constants.ts`
- Use `MOBILE`, `DRAWER_WIDTH`, `HEADER_HEIGHT` constants for consistency

## Project-Specific Conventions

### Styling Approach
- **Primary**: MUI's `sx` prop and theme overrides for component styling
- **Secondary**: CSS Modules for layout containers and page-specific styles
- **Avoid**: Inline styles or styled-components (project uses Emotion through MUI)

### Component Structure
- Pages combine pre-themed MUI components with minimal custom styling
- Alert examples in `app/alert/` demonstrate icon + typography patterns
- Container components use CSS Modules classes (e.g., `.alert-container`)

### TypeScript Configuration
- Strict mode disabled (`"strict": false`) but `strictNullChecks: true`
- MUI types automatically included through component theme definitions

## Integration Points

### MUI + Next.js App Router
- `AppRouterCacheProvider` enables MUI SSR with App Router
- `enableCssLayer: true` option for CSS layer management
- Client-side theme switching ready (mode state in `ThemeClient`)

### Tailwind Integration Ready
- `theme/tailwind.util.ts` exports theme tokens for potential Tailwind config
- Converts MUI theme values to Tailwind-compatible format

## Common Tasks

### Updating Theme Colors
Edit `theme/colors.ts` light/dark palettes - changes automatically propagate through all components.

### Adding Component Variants
Create new styleOverrides entries in respective `ThemeComponents/` files using MUI's variant system.

### Creating New Pages
Follow `app/alert/page.tsx` pattern: import themed components, use CSS Modules for containers.