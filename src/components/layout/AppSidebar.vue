<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-overlay" @click="$emit('close')"></div>
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3 class="sidebar-title">{{ pathTitle }}</h3>
        <div class="progress-info">
          <span class="progress-text">{{ completedCount }} / {{ totalSteps }} completed</span>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <button
          v-for="step in steps"
          :key="step.id"
          class="nav-item"
          :class="{ 
            'is-active': currentStep === step.id,
            'is-completed': isStepCompleted(step.id)
          }"
          @click="goToStep(step.id)"
        >
          <span class="step-indicator">
            <svg v-if="isStepCompleted(step.id)" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7L6 10L11 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-else>{{ step.id }}</span>
          </span>
          <span class="step-title">{{ step.title }}</span>
          <span class="step-duration">{{ step.duration }}</span>
        </button>
      </nav>
      
      <div class="sidebar-footer">
        <button class="reset-btn" @click="resetProgress">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 8a6 6 0 1 1 1.5 4" stroke-linecap="round"/>
            <path d="M2 4v4h4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Reset Progress
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { startCodingSteps } from '../../data/startCodingSteps'
import { proFeaturesSteps } from '../../data/proFeaturesSteps'

export default {
  name: 'AppSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  computed: {
    ...mapGetters('workshop', ['currentStep', 'progressPercentage', 'isStepCompleted', 'completedSteps', 'totalSteps']),
    currentPath() {
      return this.$route.name === 'StartCoding' ? 'start-coding' : 'pro-features'
    },
    pathTitle() {
      return this.currentPath === 'start-coding' ? 'Start Coding with AI' : 'Copilot Pro Features'
    },
    steps() {
      return this.currentPath === 'start-coding' ? startCodingSteps : proFeaturesSteps
    },
    completedCount() {
      return this.completedSteps(this.currentPath).length
    },
    totalStepsCount() {
      return this.totalSteps(this.currentPath)
    },
    progressPercentageValue() {
      return this.progressPercentage(this.currentPath)
    }
  },
  methods: {
    ...mapActions('workshop', ['setCurrentStep', 'resetProgress']),
    goToStep(stepId) {
      this.setCurrentStep(stepId)
      this.$emit('close')
    },
    resetProgress() {
      if (confirm('Are you sure you want to reset your progress?')) {
        this.$store.dispatch('workshop/resetProgress', this.currentPath)
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  z-index: 50;
}

.sidebar-overlay {
  display: none;
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border-primary);
  overflow-y: auto;
}

.sidebar-header {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--color-border-primary);
}

.sidebar-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  color: var(--color-text-primary);
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.progress-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.progress-bar {
  height: 6px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}

.sidebar-nav {
  flex: 1;
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-fast);
  color: var(--color-text-secondary);
}

.nav-item:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.nav-item.is-active {
  background: rgba(88, 166, 255, 0.1);
  color: var(--color-accent-primary);
}

.nav-item.is-completed .step-indicator {
  background: var(--color-success);
  color: white;
}

.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  flex-shrink: 0;
}

.step-title {
  flex: 1;
  font-size: var(--font-size-sm);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-duration {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.sidebar-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-border-primary);
}

.reset-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  padding: var(--spacing-3);
  background: transparent;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.reset-btn:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform var(--transition-base);
  }
  
  .sidebar.is-open {
    transform: translateX(0);
  }
  
  .sidebar.is-open .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}
</style>
