<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar">
      <div 
        class="progress-fill" 
        :style="{ width: percentage + '%' }"
        :class="progressClass"
      ></div>
    </div>
    <span v-if="showLabel" class="progress-label">{{ percentage }}%</span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percentage: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    variant: {
      type: String,
      default: 'gradient',
      validator: (value) => ['gradient', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  computed: {
    progressClass() {
      return [
        `variant-${this.variant}`,
        `size-${this.size}`
      ]
    }
  }
}
</script>

<style scoped>
.progress-bar-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}

.progress-fill.variant-gradient {
  background: var(--gradient-primary);
}

.progress-fill.variant-success {
  background: var(--color-success);
}

.progress-fill.variant-warning {
  background: var(--color-warning);
}

.progress-fill.variant-danger {
  background: var(--color-danger);
}

.progress-fill.size-sm {
  height: 4px;
}

.progress-fill.size-md {
  height: 8px;
}

.progress-fill.size-lg {
  height: 12px;
}

.progress-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  min-width: 45px;
  text-align: right;
}
</style>
