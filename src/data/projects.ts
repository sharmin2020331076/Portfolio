
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'notesnest',
    title: 'NotesNest',
    description: 'A beautiful, modern Progressive Web App for capturing notes and managing tasks.',
    fullDescription: `# NotesNest

<div align="center">
  <img src="\notenest.png" alt="NotesNest Logo" width="100" height="100" />
  <h3>Your thoughts and tasks, perfectly organized</h3>
  <p>A beautiful, modern Progressive Web App for capturing notes and managing tasks</p>
</div>

## ✨ Features

### 📝 Notes
- **Rich Text Editing** - Bold, italic, underline, headings, lists, quotes, code blocks, and more
- **Smart Organization** - Organize notes with folders and tags for flexible categorization
- **Full-Text Search** - Instantly find any note with powerful search functionality
- **Image Attachments** - Add images directly to your notes with preview
- **Favorites** - Star important notes for quick access
- **Archive & Trash** - Archive notes or move them to trash with restore capability
- **Quick Create** - New Note button in notes list header for fast note creation
- **Auto-save** - Changes are automatically saved with debouncing

### ✅ Tasks (To-Do)
- **Task Management** - Create, edit, complete, and delete tasks effortlessly
- **Calendar View** - Visualize your tasks on an interactive calendar with priority indicators
- **Priority Levels** - Mark tasks as high, medium, or low priority
- **Categories** - Organize tasks with custom color-coded categories
- **Smart Views** - Filter tasks by All, Today, Upcoming, Completed, or Calendar
- **Due Dates** - Set and track due dates for all your tasks
- **Floating Action Button** - Quick task creation from anywhere

### 🚀 Progressive Web App
- **Installable** - Add to home screen on mobile or install as desktop app
- **Offline Support** - Full functionality without internet connection via service worker
- **Fast & Reliable** - Cached assets for instant loading
- **Custom Icons** - Beautiful branded icons with #C5705D theme color
- **App Manifest** - Complete PWA configuration with shortcuts

### 🎨 User Experience
- **Privacy-First** - 100% local storage - your data never leaves your device
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean design with smooth Framer Motion animations and Lenis smooth scrolling
- **Unified Navigation** - Single header component across notes and todos pages
- **Settings in Sidebar** - Easy access to app settings, profile, and data management
- **Error Handling** - Custom error boundary and 404 page for graceful error recovery
- **Loading States** - Smooth loading indicators for better perceived performance
- **Social Sharing** - Open Graph and Twitter Card meta tags for rich link previews

## 🛠️ Tech Stack

- **Framework** - [Next.js 16](https://nextjs.org/) with App Router and Turbopack
- **Language** - TypeScript for type safety
- **Styling** - [Tailwind CSS v4](https://tailwindcss.com/) with custom oklch color design tokens
- **Animation** - [Framer Motion](https://www.framer.com/motion/) for smooth transitions and effects
- **Smooth Scroll** - [Lenis](https://lenis.studiofreight.com/) for buttery smooth scrolling
- **UI Components** - [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives + Tailwind)
- **State Management** - React hooks with localStorage persistence via custom stores
- **PWA** - Service Worker with offline caching and installable app manifest
- **Icons** - [Lucide React](https://lucide.dev/) for consistent icon system
- **Rich Text** - Native contentEditable with document.execCommand
- **Date Handling** - Native Date objects with custom calendar logic

## 🎨 Design Highlights

### Color Palette
- **Primary Color**: #C5705D (Warm terracotta) - Used for branding, CTAs, and accents
- **Background**: Cream with subtle gradients for depth
- **Shadows**: Layered shadows with primary color tints for elevated elements

### Typography
- **Font Family**: Geist (sans-serif) for clean, modern readability
- **Font Mono**: Geist Mono for code blocks and monospace content

### UI Components
- **Hero Section**: Gradient orbs, trust badges, and screenshot mockup with bordered window
- **Feature Cards**: Bento grid layout with enhanced visibility, shadows, and hover effects
- **Footer**: Primary background with newsletter subscription and social links
- **Navigation**: Unified header across all pages with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm installed
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd note-web-application
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

5. **Install as PWA** (Optional)
- Click the install icon in your browser's address bar
- Or use "Add to Home Screen" on mobile devices

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Project Structure

\`\`\`
note-web-application/
├── app/
│   ├── page.tsx              # Homepage with hero, features, and footer
│   ├── layout.tsx            # Root layout with PWA meta tags
│   ├── loading.tsx           # Global loading state
│   ├── error.tsx             # Error boundary component
│   ├── not-found.tsx         # Custom 404 page
│   ├── globals.css           # Global styles with design tokens
│   ├── notes/
│   │   └── page.tsx          # Notes application page
│   └── todos/
│       └── page.tsx          # Tasks/To-Do application page
├── components/
│   ├── global-nav.tsx        # Navigation between Home/Notes/Todos
│   ├── unified-header.tsx    # Unified header for notes and todos
│   ├── pwa-installer.tsx     # Client-side PWA service worker registration
│   ├── theme-provider.tsx    # Theme context provider
│   ├── quickquill/           # Notes-specific components
│   │   ├── sidebar.tsx       # Notes sidebar with settings
│   │   ├── notes-list.tsx    # Notes list with create button
│   │   └── note-editor.tsx   # Rich text note editor
│   ├── todos/                # Tasks-specific components
│   │   ├── todo-sidebar.tsx  # Tasks sidebar with settings
│   │   ├── todo-list.tsx     # Tasks list
│   │   └── todo-calendar.tsx # Calendar view for tasks
│   └── ui/                   # Reusable shadcn/ui components
├── hooks/
│   ├── use-notes-store.tsx   # Notes state and localStorage
│   └── use-todos-store.tsx   # Tasks state and localStorage
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   └── utils.ts              # Utility functions (cn, etc.)
└── public/
    ├── manifest.json         # PWA manifest configuration
    ├── sw.js                 # Service worker for offline support
    ├── offline.html          # Offline fallback page
    ├── icon.svg              # Favicon and app icon
    ├── icon-maskable.svg     # Maskable PWA icon
    └── note-preview.jpg      # Homepage preview image
\`\`\`

## 📱 Key Features Explained

### Progressive Web App (PWA)

NotesNest is a fully installable Progressive Web App with:
- **Service Worker**: Caches all assets for offline functionality
- **App Manifest**: Configured with app name, icons, theme colors, and shortcuts
- **Install Prompt**: Browser-native install prompt for adding to home screen
- **Offline Support**: Full app functionality without internet connection
- **Fast Loading**: Instant startup from cached resources

### Responsive Design

- **Mobile (< 768px)**: Single column layout with slide-out sidebar
- **Tablet (768px - 1023px)**: Two-column layout with collapsible sidebar
- **Desktop (1024px+)**: Three-column layout - sidebar, list, and editor visible simultaneously

### Data Persistence & Privacy

All data is stored in browser localStorage with:
- **Zero Cloud Sync**: Your data never leaves your device
- **No Tracking**: No analytics, cookies, or third-party scripts
- **Instant Access**: No login required, no accounts to create
- **Export/Import**: Full data export and import capabilities in settings
- **Data Structure**: Organized JSON format in localStorage with separate stores for notes and tasks

### Rich Text Editing

The note editor supports:
- Text formatting (bold, italic, underline, strikethrough)
- Structural elements (headings H1-H3, lists, blockquotes, code blocks)
- Text alignment (left, center, right, justify)
- Link insertion with URL dialog
- Image insertion from file upload with inline preview
- Undo/Redo functionality

### Auto-save Mechanism

- **1-second debounce** to avoid excessive saving during typing
- **Silent background saving** with no interruption to workflow
- **Immediate localStorage** persistence for data safety
- **Visual feedback** with "Saved" indicator

### Settings & Customization

Accessible from sidebar on both notes and todos pages:
- **Profile Management**: Set display name and avatar
- **Theme Selection**: Choose app color scheme
- **Font Size**: Adjust editor font size (Small, Medium, Large)
- **Auto-save Toggle**: Enable/disable auto-save
- **Data Management**: Export all data as JSON or import from backup

## 🎨 Customization

### Color Scheme

The app uses oklch color space design tokens in \`app/globals.css\`. Customize by modifying:

\`\`\`css
:root {
  --primary: oklch(0.58 0.12 35);      /* #C5705D - Warm terracotta */
  --background: oklch(0.985 0.005 60); /* Cream background */
  --foreground: oklch(0.25 0.02 30);   /* Dark text */
  /* ... more tokens ... */
}
\`\`\`

The primary color (#C5705D) is used throughout:
- Branding (logo, icons)
- Call-to-action buttons
- Active states and highlights
- Footer background
- PWA theme color

### Typography

Configured in \`app/layout.tsx\` using Google Fonts:
\`\`\`typescript
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
\`\`\`

### Adding Custom Features

1. **New Note Actions**: Extend \`hooks/use-notes-store.tsx\`
2. **New Task Filters**: Modify \`hooks/use-todos-store.tsx\`
3. **UI Components**: Add to \`components/ui/\` following shadcn patterns
4. **Animations**: Use Framer Motion variants in component files

## 🌐 Browser Support

Works on all modern browsers supporting:
- ✅ ES2020+ JavaScript
- ✅ CSS Grid and Flexbox
- ✅ localStorage API
- ✅ contentEditable
- ✅ File API
- ✅ Service Workers (for PWA)
- ✅ Web App Manifest

**Tested on:**
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Smooth Scrolling**: Lenis for 60fps scrolling
- **Optimized Images**: SVG icons for scalability
- **Code Splitting**: Automatic with Next.js App Router

## 🔮 Future Enhancements

Planned features for future versions:
- [ ] Cloud sync with end-to-end encryption
- [ ] User authentication (optional)
- [ ] Real-time collaboration on notes
- [ ] Native mobile apps (iOS/Android)
- [ ] Advanced search with filters and operators
- [ ] Note templates and snippets
- [ ] Markdown export
- [ ] Voice notes and audio attachments
- [ ] Kanban board view for tasks
- [ ] Time tracking for tasks
- [ ] Pomodoro timer integration
- [ ] Browser extension for quick capture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Share your ideas in the discussions
3. **Submit PRs**: Fork the repo and submit pull requests
4. **Improve Docs**: Help make the documentation better
5. **Share Feedback**: Let us know how you're using NotesNest

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test thoroughly before submitting PRs
- Update documentation for new features
- Keep accessibility in mind

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/notesnest/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/notesnest/discussions)
- **Email**: Contact through NotesNest homepage

## 🙏 Acknowledgments

Built with these amazing tools:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide](https://lucide.dev/) - Icon library
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll

## 📸 Screenshots

### Homepage
Modern landing page with feature showcases, trust badges, and newsletter signup.

### Notes App
Clean interface for capturing and organizing your thoughts with rich text formatting.

### Tasks App
Calendar view and list view for managing your tasks with priorities and categories.

---

<div align="center">
  <p><strong>Built with ❤️ for your productivity</strong></p>
  <p>100% Private • Offline First • Zero Setup</p>
</div>`,
    image: '/notenest.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    githubUrl: 'https://github.com/sharmin2020331076/NoteNest',
    liveUrl: '#',
    category: 'Productivity',
    featured: true
  },
  {
    id: 'coffinest',
    title: 'Coffee Shop Landing Page ☕',
    description: 'A modern and responsive coffee shop landing page built with React, TypeScript, and Vite.',
    fullDescription: `# Coffee Shop Landing Page ☕

A modern and responsive coffee shop landing page built with React, TypeScript, and Vite. It showcases a fictional coffee brand with sections like hero, menu, about, and contact.

## Features
- **Responsive layout** for desktop and mobile screens.
- **Built with React + TypeScript + Vite** for fast development and HMR.
- **Modular component structure** for easy customization.
- **CSS styling** for typography, layout, and coffee-themed visuals.

## Tech Stack
- React
- TypeScript
- Vite
- CSS
- ESLint (with TypeScript setup)

## Getting Started

### Clone the repository
\`\`\`bash
git clone https://github.com/sharmin2020331076/Coffee-Shop-Landing-Page.git
cd Coffee-Shop-Landing-Page
\`\`\`

### Install dependencies
\`\`\`bash
npm install
\`\`\`

### Run the development server
\`\`\`bash
npm run dev
\`\`\`

The app will be available at http://localhost:5173

## Available Scripts
- \`npm run dev\`: Start the Vite dev server with HMR.
- \`npm run build\`: Create a production build.
- \`npm run preview\`: Preview the production build locally.
- \`npm run lint\`: Run ESLint checks.

## Project Structure
\`\`\`
.
├─ public/       # Static assets
├─ src/          # React components and app logic
├─ index.html    # Root HTML template
├─ package.json  # Scripts and dependencies
├─ tsconfig.json # TypeScript configuration
├─ vite.config.ts # Vite configuration
└─ eslint.config.js # ESLint configuration
\`\`\`

## Deployment
The project is configured to be deployable via static hosting (GitHub Pages, Vercel, Netlify) using the Vite build output.

\`\`\`bash
npm run build
\`\`\`

## Future Improvements
- Add animations and micro-interactions for a richer UX.
- Integrate a simple cart or ordering form.
- Enhance accessibility and keyboard navigation support.`,
    image: '/coffinest.png',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/sharmin2020331076/Coffee-Shop-Landing-Page',
    liveUrl: 'https://coffee-shop-landing-page-pi.vercel.app/',
    category: 'Commercial Website',
    featured: true
  }];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
