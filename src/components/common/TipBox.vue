<template>
  <div class="tip-box" :class="variant">
    <div class="tip-icon">
      <svg v-if="variant === 'tip'" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 0 0-3 11.2V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.8A6 6 0 0 0 10 2z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M8 18h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <svg v-else-if="variant === 'note'" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
        <path d="M10 6v5M10 13v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <svg v-else-if="variant === 'warning'" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 18h16L10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M10 8v4M10 14v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="tip-content">
      <span class="tip-label">{{ label }}</span>
      <p class="tip-text"><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipBox',
  props: {
    variant: {
      type: String,
      default: 'tip',
      validator: (value) => ['tip', 'note', 'warning'].includes(value)
    }
  },
  computed: {
    label() {
      const labels = {
        tip: 'Tip',
        note: 'Note',
        warning: 'Warning'
      }
      return labels[this.variant]
    }
  }
}
</script>

<style scoped>
.tip-box {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin: var(--spacing-4) 0;
}

.tip-box.tip {
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid rgba(88, 166, 255, 0.3);
}

.tip-box.tip .tip-icon {
  color: var(--color-accent-primary);
}

.tip-box.tip .tip-label {
  color: var(--color-accent-primary);
}

.tip-box.note {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.tip-box.note .tip-icon {
  color: var(--color-accent-secondary);
}

.tip-box.note .tip-label {
  color: var(--color-accent-secondary);
}

.tip-box.warning {
  background: rgba(210, 153, 34, 0.1);
  border: 1px solid rgba(210, 153, 34, 0.3);
}

.tip-box.warning .tip-icon {
  color: var(--color-warning);
}

.tip-box.warning .tip-label {
  color: var(--color-warning);
}

.tip-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.tip-content {
  flex: 1;
}

.tip-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-1);
}

.tip-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}
</style>
