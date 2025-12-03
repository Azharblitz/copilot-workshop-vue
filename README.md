# GitHub Copilot Workshop

[![Deploy to GitHub Pages](https://github.com/yourusername/copilot-workshop-vue/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/copilot-workshop-vue/actions/workflows/deploy.yml)

A modern, interactive workshop site for learning GitHub Copilot features. Built with Vue 3, Vuex, and designed with the GitHub Universe 2025 theme.

![Workshop Preview](./docs/preview.png)

## 🚀 Features

- **Two Learning Paths**: 
  - Start Coding with AI (11 steps)
  - Copilot Pro Features (7 steps)
- **Progress Tracking**: Your progress is saved locally and persists across sessions
- **Syntax Highlighted Code**: Beautiful code examples with copy functionality
- **Responsive Design**: Works on desktop, tablet, and mobile
- **GitHub Universe 2025 Theme**: Modern dark theme with gradient accents

## 🛠️ Tech Stack

- **Framework**: Vue 3 with Options API
- **State Management**: Vuex 4
- **Routing**: Vue Router 4
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables
- **Syntax Highlighting**: highlight.js

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/copilot-workshop-vue.git
   cd copilot-workshop-vue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── animations.css    # Keyframe animations
│       ├── main.css          # Global styles
│       └── variables.css     # CSS custom properties
├── components/
│   ├── common/
│   │   ├── CodeBlock.vue     # Syntax highlighted code
│   │   ├── ProgressBar.vue   # Progress indicator
│   │   ├── StepCard.vue      # Workshop step container
│   │   └── TipBox.vue        # Tip/Note/Warning boxes
│   └── layout/
│       ├── AppFooter.vue     # Site footer
│       ├── AppHeader.vue     # Navigation header
│       └── AppSidebar.vue    # Step navigation sidebar
├── data/
│   ├── proFeaturesSteps.js   # Pro Features path content
│   └── startCodingSteps.js   # Start Coding path content
├── router/
│   └── index.js              # Vue Router configuration
├── store/
│   ├── index.js              # Vuex store setup
│   └── modules/
│       ├── theme.js          # Theme preferences
│       └── workshop.js       # Workshop progress state
├── views/
│   ├── HomePage.vue          # Landing page
│   ├── ProFeaturesPath.vue   # Pro Features workshop
│   └── StartCodingPath.vue   # Start Coding workshop
├── App.vue                   # Root component
└── main.js                   # Application entry point
```

## 🎨 Customization

### Theme Colors

Edit `src/assets/styles/variables.css` to customize the color scheme:

```css
:root {
  --color-accent-primary: #58a6ff;   /* Copilot blue */
  --color-accent-secondary: #8b5cf6; /* Purple accent */
  --color-accent-tertiary: #f778ba;  /* Pink highlight */
}
```

### Workshop Content

Edit the step data in `src/data/`:
- `startCodingSteps.js` - Start Coding path content
- `proFeaturesSteps.js` - Pro Features path content

## 🚀 Deployment

### GitHub Pages

The project includes a GitHub Actions workflow for automatic deployment:

1. Push to the `main` branch
2. GitHub Actions builds and deploys to GitHub Pages
3. Access at `https://yourusername.github.io/copilot-workshop-vue/`

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📚 Workshop Content

### Start Coding with AI Path
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

### Copilot Pro Features Path
1. Create Repo with Coding Agent
2. Plan & Design Generation
3. Develop with Coding Agent
4. Copilot Instructions
5. PR & Code Review
6. Copilot Spaces
7. Agent Mission Control

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub Copilot](https://github.com/features/copilot) for the inspiration
- [GitHub Universe](https://githubuniverse.com/) for the design theme
- [Vue.js](https://vuejs.org/) for the amazing framework

---

Built with ❤️ for developers
