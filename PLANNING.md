# GitHub Copilot Workshop Site - Planning Document

## Project Overview

Build an interactive workshop site to demonstrate GitHub Copilot features, designed with the GitHub Universe 2025 theme aesthetic.

### Tech Stack
- **Frontend Framework**: Vue 3 with Options API
- **State Management**: Vuex 4
- **Styling**: CSS with GitHub Universe 2025 theme (dark mode, gradient accents, modern typography)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

---

## Design System - GitHub Universe 2025 Theme

### Color Palette
```css
/* Primary Colors */
--color-bg-primary: #0d1117;      /* Deep space black */
--color-bg-secondary: #161b22;    /* Card backgrounds */
--color-bg-tertiary: #21262d;     /* Elevated surfaces */

/* Accent Colors - Universe Gradients */
--color-accent-primary: #58a6ff;   /* Copilot blue */
--color-accent-secondary: #8b5cf6; /* Purple accent */
--color-accent-tertiary: #f778ba;  /* Pink highlight */
--color-gradient-start: #8b5cf6;
--color-gradient-end: #58a6ff;

/* Text Colors */
--color-text-primary: #f0f6fc;
--color-text-secondary: #8b949e;
--color-text-muted: #6e7681;

/* Status Colors */
--color-success: #3fb950;
--color-warning: #d29922;
--color-danger: #f85149;
```

### Typography
- **Primary Font**: Inter, system-ui, sans-serif
- **Monospace**: 'JetBrains Mono', 'Fira Code', monospace
- **Headings**: Bold, gradient text effects

### Components Style
- Glassmorphism cards with subtle borders
- Smooth hover animations
- Gradient buttons and accents
- Animated progress indicators

---

## Site Structure

### Pages

#### 1. Home Page (`/`)
- Hero section with animated Copilot logo
- Workshop overview cards
- Learning path selection
- Prerequisites checklist

#### 2. Start Coding Path (`/start-coding`)
Steps included:
1. Project Setup
2. Code Completion
3. Copilot Chat
4. Copilot Edit
5. Agent Mode
6. End-to-End App Development
7. Plan Mode
8. Add Functionality
9. Add Unit Tests
10. Add Documentation
11. Custom Agents (Optional)

#### 3. Pro Features Path (`/pro-features`)
Steps included:
1. Create Repo with Coding Agent
2. Plan & Design Generation
3. Develop with Coding Agent
4. Copilot Instructions
5. PR & Code Review
6. Copilot Spaces
7. Agent Mission Control

---

## Vuex Store Structure

```javascript
store/
├── index.js           // Main store
├── modules/
│   ├── workshop.js    // Workshop progress & state
│   ├── theme.js       // Theme preferences
│   └── user.js        // User preferences
```

### State Structure
```javascript
{
  workshop: {
    currentPath: 'start-coding' | 'pro-features',
    currentStep: 1,
    completedSteps: [],
    totalSteps: { startCoding: 11, proFeatures: 7 }
  },
  theme: {
    isDark: true,
    accentColor: 'purple'
  },
  user: {
    hasCompletedSetup: false,
    preferences: {}
  }
}
```

---

## Component Architecture

```
src/
├── App.vue
├── main.js
├── router/
│   └── index.js
├── store/
│   ├── index.js
│   └── modules/
│       ├── workshop.js
│       └── theme.js
├── views/
│   ├── HomePage.vue
│   ├── StartCodingPath.vue
│   └── ProFeaturesPath.vue
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── AppSidebar.vue
│   ├── common/
│   │   ├── StepCard.vue
│   │   ├── CodeBlock.vue
│   │   ├── ProgressBar.vue
│   │   ├── Button.vue
│   │   └── Badge.vue
│   ├── workshop/
│   │   ├── StepNavigation.vue
│   │   ├── StepContent.vue
│   │   └── CompletionBadge.vue
│   └── home/
│       ├── HeroSection.vue
│       ├── PathCard.vue
│       └── PrerequisitesList.vue
├── assets/
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── animations.css
│   └── images/
└── data/
    ├── startCodingSteps.js
    └── proFeaturesSteps.js
```

---

## Features

### Core Features
- [x] Responsive multi-step workshop interface
- [x] Progress tracking with localStorage persistence
- [x] Code syntax highlighting
- [x] Copy-to-clipboard functionality
- [x] Step navigation (prev/next)
- [x] Sidebar with step overview
- [x] Completion badges

### Interactive Elements
- [x] Animated transitions between steps
- [x] Hover effects on cards
- [x] Progress bar animations
- [x] Toast notifications for completions

### Accessibility
- [x] Keyboard navigation
- [x] ARIA labels
- [x] High contrast support
- [x] Screen reader friendly

---

## Development Phases

### Phase 1: Project Setup (Day 1)
- [ ] Initialize Vue 3 + Vite project
- [ ] Configure Vuex store
- [ ] Set up Vue Router
- [ ] Create base CSS variables and theme

### Phase 2: Core Components (Day 1-2)
- [ ] Build layout components (Header, Footer, Sidebar)
- [ ] Create common components (Button, Card, Badge)
- [ ] Implement StepCard and CodeBlock

### Phase 3: Views & Data (Day 2)
- [ ] Create Home page
- [ ] Build Start Coding path view
- [ ] Build Pro Features path view
- [ ] Add workshop step data

### Phase 4: State Management (Day 2-3)
- [ ] Implement Vuex modules
- [ ] Add progress persistence
- [ ] Connect components to store

### Phase 5: Polish & Deploy (Day 3)
- [ ] Add animations and transitions
- [ ] Test responsiveness
- [ ] Deploy to GitHub Pages
- [ ] Create PR with documentation

---

## Repository Structure

```
copilot-workshop-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   └── (as described above)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── PLANNING.md
```

---

## API/Data Models

### Step Interface
```javascript
{
  id: number,
  title: string,
  duration: string,        // e.g., "15 minutes"
  description: string,
  content: string,         // Markdown content
  codeExamples: [{
    language: string,
    code: string,
    filename?: string
  }],
  tips: string[],
  notes: string[],
  images: [{
    src: string,
    alt: string,
    caption: string
  }]
}
```

---

## Deployment

### GitHub Pages Deployment
1. Build the project: `npm run build`
2. Deploy using GitHub Actions
3. Configure custom domain (optional)

### GitHub Actions Workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Success Metrics

- [ ] All workshop steps accessible and readable
- [ ] Progress persists across sessions
- [ ] Responsive on mobile, tablet, desktop
- [ ] Lighthouse score > 90 for all categories
- [ ] Zero accessibility errors

---

## Next Steps

1. ✅ Planning document created
2. ⬜ Initialize Vue 3 project
3. ⬜ Build component library
4. ⬜ Implement workshop content
5. ⬜ Deploy and create PR
