<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="footer-logo">GitHub Copilot Workshop</span>
        <span class="footer-separator">•</span>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p class="footer-text">Built with ❤️ for developers</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border-primary);
  padding: var(--spacing-6);
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.footer-logo {
  font-weight: 600;
  color: var(--color-text-primary);
}

.footer-separator {
  color: var(--color-text-muted);
}

.footer-brand a {
  color: var(--color-text-link);
}

.footer-brand a:hover {
  text-decoration: underline;
}

.footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}
</style>
