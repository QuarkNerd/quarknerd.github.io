# 8-Bit Portfolio - Next.js

A retro-styled personal portfolio website built with Next.js, TypeScript, and React components.

## 🎮 Features

- **8-bit Aesthetic**: Retro pixel font and neon color scheme
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Component-Based**: Clean, reusable React components
- **TypeScript**: Type-safe code for better development experience
- **Static Export**: Pre-renders to static HTML for easy deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized static build in the `out/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer
│   ├── Header.tsx           # Header with title
│   ├── Navigation.tsx       # Navigation bar
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Projects.tsx         # Projects section
│   └── ThemeToggle.tsx      # Theme switcher
└── data/
    └── projects.ts          # Project data

public/
├── fonts/
│   └── PressStart2P-Regular.ttf
└── img/                     # Your images go here
```

## ✏️ Customization

### Update Your Information

1. **Header** - Edit `src/components/Header.tsx`:
   - Change "YOUR NAME" to your name
   - Update the subtitle

2. **About** - Edit `src/components/About.tsx`:
   - Add your bio

3. **Projects** - Edit `src/data/projects.ts`:
   - Add/remove/edit project entries
   - Update images, titles, descriptions, and URLs

4. **Contact** - Edit `src/components/Contact.tsx`:
   - Update social media links
   - Change email address

5. **Footer** - Edit `src/components/Footer.tsx`:
   - Update the name and copyright info

### Add Your Project Images

Place your project images in `public/img/` and reference them like:

```typescript
image: "/img/my-project.png";
```

### Customize Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root,
[data-theme="dark"] {
  --primary-color: #00ff00; /* Main accent color */
  --secondary-color: #ff00ff; /* Secondary accent */
  --accent-color: #00ffff; /* Tertiary accent */
  --bg-dark: #0a0a0a; /* Darkest background */
  --bg-medium: #1a1a1a; /* Medium background */
  --bg-light: #2a2a2a; /* Light background */
  --text-color: #e0e0e0; /* Text color */
  --border-color: #00ff00; /* Border color */
}
```

## 🌐 Deployment

### GitHub Pages

1. Update `next.config.js` with your repo name if not using a custom domain:

```javascript
const nextConfig = {
  output: "export",
  basePath: "/your-repo-name",
  images: {
    unoptimized: true,
  },
};
```

2. Build and deploy:

```bash
npm run build
```

3. Deploy the `out/` folder to GitHub Pages

### Vercel/Netlify

Simply connect your repository and these platforms will automatically build and deploy your Next.js app.

## 📝 License

Free to use for personal projects. Customize as you wish!

## 🎨 Technologies

- Next.js 14
- React 18
- TypeScript
- CSS Variables for theming
- Local Font Loading (Press Start 2P)

---

Built with ❤️ and pixels
