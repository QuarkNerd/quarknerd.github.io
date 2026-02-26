## Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Then open http://localhost:3000

### 3. Customize Your Site

#### Update Personal Info

- **Name & Title**: `src/components/Header.tsx`
- **About Section**: `src/components/About.tsx`
- **Social Links**: `src/components/Contact.tsx`
- **Footer**: `src/components/Footer.tsx`

#### Add Your Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "My Awesome Project",
    description: "What it does and why it's cool",
    image: "/img/project1.png", // Put images in public/img/
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/username/project",
  },
  // Add more projects...
];
```

#### Change Colors

Edit CSS variables in `src/app/globals.css` (lines 15-25 for dark, 27-37 for light theme)

### 4. Build for Production

```bash
npm run build
```

The static site will be in the `out/` folder, ready to deploy!

## Component Structure

```
Header           - Your name and tagline
Navigation       - Nav links + theme toggle
  └─ ThemeToggle - Sun/moon theme switcher
About            - Bio section
Projects         - Grid of project cards
  └─ ProjectCard - Individual project display
Contact          - Social links
Footer           - Copyright info
```

## File You'll Edit Most

- `src/data/projects.ts` - Your projects
- `src/components/Header.tsx` - Name/title
- `src/components/About.tsx` - Bio
- `src/components/Contact.tsx` - Links
- `src/app/globals.css` - Colors/styling

## Tips

- Images go in `public/img/` or `public/`
- The font is already downloaded in `public/fonts/`
- Theme persists automatically via localStorage
- Site is fully responsive out of the box
- Use TypeScript for better autocomplete!

Happy coding! 🎮
