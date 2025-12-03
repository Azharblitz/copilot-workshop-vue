<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <button 
          v-if="showMenuButton" 
          class="menu-btn" 
          @click="$emit('toggle-sidebar')"
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#8b5cf6"/>
                  <stop offset="100%" style="stop-color:#58a6ff"/>
                </linearGradient>
              </defs>
              <circle cx="16" cy="16" r="14" fill="url(#logoGrad)"/>
              <path d="M10 16 L14 20 L22 12" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="logo-text">GitHub Copilot <span class="gradient-text">Workshop</span></span>
        </router-link>
      </div>
      
      <nav class="header-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/start-coding" class="nav-link">Start Coding</router-link>
        <router-link to="/pro-features" class="nav-link">Pro Features</router-link>
      </nav>
      
      <div class="header-right">
        <a 
          href="https://github.com/github/copilot-docs" 
          target="_blank" 
          rel="noopener noreferrer"
          class="github-link"
          aria-label="GitHub Documentation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  emits: ['toggle-sidebar'],
  computed: {
    showMenuButton() {
      const routeName = this.$route.name
      return routeName === 'StartCoding' || routeName === 'ProFeatures'
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-primary);
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-6);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.menu-btn:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  text-decoration: none;
  color: var(--color-text-primary);
}

.logo-icon {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: var(--font-size-lg);
  font-weight: 700;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.nav-link {
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.nav-link.router-link-active {
  color: var(--color-accent-primary);
  background: rgba(88, 166, 255, 0.1);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.github-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }
  
  .header-nav {
    display: none;
  }
  
  .logo-text {
    font-size: var(--font-size-base);
  }
  
  .header-content {
    padding: 0 var(--spacing-4);
  }
}
</style>
