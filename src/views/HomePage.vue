<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge badge-purple">GitHub Universe 2025</span>
        </div>
        <h1 class="hero-title">
          <span class="gradient-text">GitHub Copilot</span> Workshop
        </h1>
        <p class="hero-subtitle">
          Master AI-powered coding with GitHub Copilot. Learn how to leverage your AI pair 
          programmer through hands-on exercises and real-world examples.
        </p>
        <div class="hero-actions">
          <router-link to="/start-coding" class="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,10 5,17" fill="currentColor"/>
            </svg>
            Start Learning
          </router-link>
          <a href="https://docs.github.com/copilot" target="_blank" class="btn btn-secondary btn-lg">
            View Docs
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="copilot-logo animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8b5cf6"/>
                <stop offset="50%" style="stop-color:#58a6ff"/>
                <stop offset="100%" style="stop-color:#f778ba"/>
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="55" stroke="url(#heroGrad)" stroke-width="3" fill="none"/>
            <circle cx="60" cy="60" r="45" fill="url(#heroGrad)" opacity="0.1"/>
            <path d="M40 60 L55 75 L80 45" stroke="url(#heroGrad)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">About the Workshop</h2>
        <p class="section-subtitle">Everything you need to get started with GitHub Copilot</p>
        
        <div class="goals-grid">
          <div class="goal-card">
            <div class="goal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Today's Goals</h3>
            <ul>
              <li>Understand the various features of GitHub Copilot</li>
              <li>Develop a complete application using agent mode</li>
              <li>Learn how to use Copilot across the GitHub platform</li>
              <li>Master advanced Copilot features for professional development</li>
            </ul>
          </div>
          
          <div class="goal-card">
            <div class="goal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Prerequisites</h3>
            <ul>
              <li>Visual Studio Code is installed on your machine</li>
              <li>GitHub Copilot license is available and activated</li>
              <li>GitHub account is set up and ready to use</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Paths Section -->
    <section class="paths-section">
      <div class="container">
        <h2 class="section-title">Choose Your Learning Path</h2>
        <p class="section-subtitle">Select the path that best matches your learning goals</p>
        
        <div class="paths-grid">
          <router-link to="/start-coding" class="path-card hover-lift">
            <div class="path-header">
              <div class="path-icon path-icon-blue">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 8l-6 8 6 8"/>
                  <path d="M22 8l6 8-6 8"/>
                  <line x1="17" y1="6" x2="15" y2="26"/>
                </svg>
              </div>
              <span class="path-badge">11 Steps</span>
            </div>
            <h3 class="path-title">Start Coding with AI</h3>
            <p class="path-description">
              Learn the fundamentals of GitHub Copilot. Perfect for beginners who want 
              to understand code completion, chat, and agent mode.
            </p>
            <div class="path-topics">
              <span class="topic-tag">Code Completion</span>
              <span class="topic-tag">Copilot Chat</span>
              <span class="topic-tag">Agent Mode</span>
            </div>
            <div class="path-cta">
              Start Path
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </router-link>
          
          <router-link to="/pro-features" class="path-card hover-lift">
            <div class="path-header">
              <div class="path-icon path-icon-purple">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
                </svg>
              </div>
              <span class="path-badge">7 Steps</span>
            </div>
            <h3 class="path-title">Copilot Pro Features</h3>
            <p class="path-description">
              Explore advanced Copilot capabilities. Learn about the Coding Agent, 
              custom agents, PR reviews, and enterprise features.
            </p>
            <div class="path-topics">
              <span class="topic-tag">Coding Agent</span>
              <span class="topic-tag">Custom Agents</span>
              <span class="topic-tag">PR Review</span>
            </div>
            <div class="path-cta">
              Start Path
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="resources-section">
      <div class="container">
        <h2 class="section-title">Additional Resources</h2>
        <p class="section-subtitle">Continue your learning journey</p>
        
        <div class="resources-grid">
          <a href="https://docs.github.com/copilot" target="_blank" class="resource-card">
            <div class="resource-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
            </div>
            <h4>Documentation</h4>
            <p>Explore the official GitHub Copilot documentation for detailed guides and reference materials.</p>
          </a>
          
          <a href="https://docs.github.com/copilot/using-github-copilot/best-practices-for-using-github-copilot" target="_blank" class="resource-card">
            <div class="resource-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h4>Best Practices</h4>
            <p>Learn tips and best practices for getting the most out of GitHub Copilot in your workflow.</p>
          </a>
          
          <a href="https://github.com/github/awesome-copilot" target="_blank" class="resource-card">
            <div class="resource-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15,8.5 22,9.3 17,14 18.2,21 12,17.8 5.8,21 7,14 2,9.3 9,8.5"/>
              </svg>
            </div>
            <h4>Awesome Copilot</h4>
            <p>Discover a curated collection of examples, tools, and community resources for Copilot.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - var(--header-height) - 100px);
  padding: var(--spacing-16) var(--spacing-8);
  max-width: 1280px;
  margin: 0 auto;
  gap: var(--spacing-12);
}

.hero-bg {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-badge {
  margin-bottom: var(--spacing-4);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-6);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-8);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.btn-lg {
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--font-size-base);
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.copilot-logo {
  filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.4));
}

/* About Section */
.about-section {
  padding: var(--spacing-16) var(--spacing-8);
  background: var(--color-bg-secondary);
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-2);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-12);
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
  max-width: 900px;
  margin: 0 auto;
}

.goal-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

.goal-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
  color: white;
}

.goal-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-4);
}

.goal-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.goal-card li {
  position: relative;
  padding-left: var(--spacing-6);
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
}

.goal-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--color-success);
  border-radius: 50%;
}

/* Paths Section */
.paths-section {
  padding: var(--spacing-16) var(--spacing-8);
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-6);
  max-width: 900px;
  margin: 0 auto;
}

.path-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.path-card:hover {
  border-color: var(--color-border-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.path-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--spacing-4);
}

.path-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
}

.path-icon-blue {
  background: rgba(88, 166, 255, 0.15);
  color: var(--color-accent-primary);
}

.path-icon-purple {
  background: rgba(139, 92, 246, 0.15);
  color: var(--color-accent-secondary);
}

.path-badge {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-bg-tertiary);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
}

.path-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2);
}

.path-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
  flex: 1;
}

.path-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.topic-tag {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  background: var(--color-bg-tertiary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-md);
}

.path-cta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-accent-primary);
}

/* Resources Section */
.resources-section {
  padding: var(--spacing-16) var(--spacing-8);
  background: var(--color-bg-secondary);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
  max-width: 1000px;
  margin: 0 auto;
}

.resource-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.resource-card:hover {
  border-color: var(--color-border-accent);
  transform: translateY(-2px);
}

.resource-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
  color: var(--color-accent-primary);
}

.resource-card h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
}

.resource-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-8) var(--spacing-4);
    min-height: auto;
  }
  
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-base);
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    order: -1;
    margin-bottom: var(--spacing-8);
  }
  
  .copilot-logo svg {
    width: 80px;
    height: 80px;
  }
  
  .paths-grid {
    grid-template-columns: 1fr;
  }
  
  .goals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
