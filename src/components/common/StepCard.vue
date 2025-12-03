<template>
  <div class="step-card" :class="{ 'is-completed': isCompleted, 'is-active': isActive }">
    <div class="step-header">
      <div class="step-number-wrapper">
        <span class="step-number" v-if="!isCompleted">{{ stepNumber }}</span>
        <svg v-else class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 10L8.5 13.5L15 6.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="step-info">
        <h3 class="step-title">{{ title }}</h3>
        <div class="step-meta">
          <span class="step-duration">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="7" cy="7" r="5.5"/>
              <path d="M7 4v3l2 2" stroke-linecap="round"/>
            </svg>
            {{ duration }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="step-content">
      <slot></slot>
    </div>
    
    <div class="step-actions">
      <button 
        class="complete-btn" 
        :class="{ 'is-completed': isCompleted }"
        @click="toggleComplete"
      >
        <svg v-if="isCompleted" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 8L7 11L12 5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ isCompleted ? 'Completed' : 'Mark as Complete' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCard',
  props: {
    stepNumber: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      default: '15 minutes'
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-complete'],
  methods: {
    toggleComplete() {
      this.$emit('toggle-complete')
    }
  }
}
</script>

<style scoped>
.step-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  transition: all var(--transition-base);
}

.step-card:hover {
  border-color: var(--color-border-accent);
}

.step-card.is-active {
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 0 1px var(--color-accent-primary);
}

.step-card.is-completed {
  border-color: var(--color-success);
}

.step-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
}

.step-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.step-card.is-completed .step-number-wrapper {
  background: var(--color-success);
}

.step-number {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: white;
}

.check-icon {
  color: white;
}

.step-info {
  flex: 1;
}

.step-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.step-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.step-duration {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.step-content {
  margin-bottom: var(--spacing-6);
}

.step-content :deep(p) {
  margin-bottom: var(--spacing-4);
}

.step-content :deep(ul),
.step-content :deep(ol) {
  margin-bottom: var(--spacing-4);
}

.step-content :deep(h4) {
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-3);
}

.step-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border-primary);
}

.complete-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-5);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.complete-btn:hover {
  background: var(--color-border-primary);
  color: var(--color-text-primary);
}

.complete-btn.is-completed {
  background: rgba(63, 185, 80, 0.15);
  border-color: var(--color-success);
  color: var(--color-success);
}
</style>
