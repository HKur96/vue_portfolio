# Flutter Developer Portfolio

A modern, visually stunning portfolio website built with Vue 3, showcasing a Flutter developer's work with beautiful animations and a futuristic dark theme.

## Features

- **Modern Tech Stack**: Vue 3 (Composition API + `<script setup>`), TypeScript, Vite
- **Routing**: Vue Router with smooth page transitions
- **State Management**: Pinia for global theme state
- **Styling**: Tailwind CSS with custom glassmorphism and neon glow effects
- **Animations**: AOS (Animate On Scroll) for scroll-based animations
- **Theme Toggle**: Dark/Light mode with persistent storage
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance**: Optimized build with code splitting and lazy loading

## Design Highlights

- Dark futuristic aesthetic with blue/accent neon glow accents
- Smooth gradients and glassmorphism effects
- Custom animations and transitions
- Beautiful typography with Poppins and Inter fonts
- Interactive hover effects and micro-interactions
- Loading splash screen with animated logo

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable components
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── ThemeToggle.vue
│   ├── ProjectCard.vue
│   ├── ExperienceCard.vue
│   └── LoadingSplash.vue
├── views/           # Page components
│   ├── Home.vue
│   ├── About.vue
│   ├── Projects.vue
│   └── Contact.vue
├── stores/          # Pinia stores
│   └── themeStore.ts
├── router/          # Vue Router config
│   └── index.ts
├── App.vue         # Root component
└── main.ts         # Application entry
```

## Pages

1. **Home** - Hero section with developer introduction and CTA buttons
2. **About** - Biography, skills grid, and work experience
3. **Projects** - Featured projects with glassmorphic cards
4. **Contact** - Contact information and social links

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#8b5cf6',    // Purple
  secondary: '#3b82f6',  // Blue
  accent: '#a855f7',     // Accent purple
}
```

### Content

- **Personal Info**: Update the Home and About pages in `src/views/`
- **Projects**: Modify the projects array in `src/views/Projects.vue`
- **Contact**: Update contact information in `src/views/Contact.vue`

## Deployment

This project can be deployed to:

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Vercel**: Import your Git repository and deploy with one click
- **GitHub Pages**: Push the `dist` folder to a `gh-pages` branch

## Technologies Used

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Tailwind CSS
- AOS (Animate On Scroll)

## License

MIT License - Feel free to use this template for your own portfolio!
