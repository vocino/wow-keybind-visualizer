# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WoW Keybind Visualizer - A web application for visualizing and planning World of Warcraft keybindings across multiple tank specializations using a unified, muscle-memory-focused system.

The core concept: assign abstract "functions" (like "Primary Mitigation") to keys, and the app shows which specific ability that represents for each of the 6 tank specs.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Core Data Model

The app uses a functional keybind system defined in `src/types.ts`:

- **KeyFunction**: Abstract categories like "Primary Mitigation", "Ground Effect", etc.
- **TankSpec**: The 6 tank specs (Protection Warrior, Protection Paladin, Blood DK, Brewmaster Monk, Guardian Druid, Vengeance DH)
- **KeyAssignment**: Maps a keyboard key to a function, which contains ability mappings for each spec
- **AbilityMapping**: Links each function to specific abilities across all tank specs

### Component Structure

- `App.tsx` - Main application state and layout
- `components/Keyboard.tsx` - Visual keyboard layout with clickable keys
- `components/Key.tsx` - Individual key button with color coding by function
- `components/FunctionSelector.tsx` - Modal for assigning functions to keys
- `components/SpecSwitcher.tsx` - UI for switching between tank specs
- `data/abilities.ts` - Hardcoded ability mappings for each function/spec combination

### Key Features

1. **Interactive Keyboard**: Click any key to assign it a function
2. **Function Assignment**: Modal shows all function types and what abilities they map to
3. **Spec Switching**: Change active spec to see different abilities on the same keys
4. **Visual Feedback**: Color-coded keys based on function category

### State Management

Currently uses React useState for:
- `currentSpec`: Active tank specialization being viewed
- `keybinds`: Map of key names to KeyAssignment objects
- `selectedKey`: Currently selected key for assignment

Future: Consider localStorage for persistence or export/import functionality.

### Extending the App

**Adding new abilities**: Edit `src/data/abilities.ts` to modify the ability mappings for any function/spec combination.

**Adding new functions**: Add to the `KeyFunction` type in `src/types.ts` and create mappings in `src/data/abilities.ts`.

**Keyboard layout**: Modify the `keyboardLayout` array in `src/components/Keyboard.tsx` to add/remove keys or change positioning.
