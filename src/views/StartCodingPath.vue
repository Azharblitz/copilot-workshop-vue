<template>
  <div class="workshop-path">
    <div class="path-header">
      <div class="path-info">
        <router-link to="/" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 12L6 8l4-4"/>
          </svg>
          Back to Home
        </router-link>
        <h1 class="path-title">Start Coding with AI</h1>
        <p class="path-description">
          Learn the fundamentals of GitHub Copilot through hands-on exercises.
        </p>
      </div>
      <div class="path-progress">
        <ProgressBar :percentage="progressPercentage" />
        <span class="progress-label">{{ completedCount }} of {{ totalSteps }} completed</span>
      </div>
    </div>

    <div class="steps-content">
      <transition name="slide" mode="out-in">
        <StepCard
          :key="currentStepData.id"
          :step-number="currentStepData.id"
          :title="currentStepData.title"
          :duration="currentStepData.duration"
          :is-completed="isCurrentStepCompleted"
          :is-active="true"
          @toggle-complete="toggleCurrentStepComplete"
        >
          <div v-html="currentStepData.content"></div>
          
          <div v-if="currentStepData.codeExamples && currentStepData.codeExamples.length > 0">
            <CodeBlock
              v-for="(example, index) in currentStepData.codeExamples"
              :key="index"
              :code="example.code"
              :language="example.language"
              :filename="example.filename"
            />
          </div>
          
          <TipBox
            v-for="(tip, index) in currentStepData.tips"
            :key="'tip-' + index"
            variant="tip"
          >
            {{ tip }}
          </TipBox>
        </StepCard>
      </transition>

      <div class="step-navigation">
        <button 
          class="nav-btn prev-btn" 
          :disabled="currentStep === 1"
          @click="previousStep"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 12L6 8l4-4"/>
          </svg>
          Previous
        </button>
        
        <div class="step-indicator">
          Step {{ currentStep }} of {{ totalSteps }}
        </div>
        
        <button 
          class="nav-btn next-btn" 
          :disabled="currentStep === totalSteps"
          @click="nextStep"
        >
          Next
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 12l4-4-4-4"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StepCard from '../components/common/StepCard.vue'
import CodeBlock from '../components/common/CodeBlock.vue'
import TipBox from '../components/common/TipBox.vue'
import ProgressBar from '../components/common/ProgressBar.vue'
import { startCodingSteps } from '../data/startCodingSteps'

export default {
  name: 'StartCodingPath',
  components: {
    StepCard,
    CodeBlock,
    TipBox,
    ProgressBar
  },
  data() {
    return {
      steps: startCodingSteps,
      pathName: 'start-coding'
    }
  },
  computed: {
    ...mapGetters('workshop', ['currentStep', 'isStepCompleted', 'completedSteps', 'progressPercentage']),
    totalSteps() {
      return this.steps.length
    },
    currentStepData() {
      return this.steps.find(step => step.id === this.currentStep) || this.steps[0]
    },
    isCurrentStepCompleted() {
      return this.isStepCompleted(this.pathName, this.currentStep)
    },
    completedCount() {
      return this.completedSteps(this.pathName).length
    },
    progressPercentageValue() {
      return this.progressPercentage(this.pathName)
    }
  },
  created() {
    this.$store.dispatch('workshop/setCurrentPath', this.pathName)
  },
  methods: {
    ...mapActions('workshop', ['setCurrentStep', 'toggleStepCompletion']),
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.setCurrentStep(this.currentStep + 1)
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.setCurrentStep(this.currentStep - 1)
      }
    },
    toggleCurrentStepComplete() {
      this.toggleStepCompletion({
        path: this.pathName,
        step: this.currentStep
      })
    }
  }
}
</script>

<style scoped>
.workshop-path {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding-left: var(--sidebar-width);
}

.path-header {
  margin-bottom: var(--spacing-8);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-text-primary);
}

.path-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-2);
}

.path-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
}

.path-progress {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.progress-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.steps-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.step-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-6);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
}

.nav-btn {
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

.nav-btn:hover:not(:disabled) {
  background: var(--color-border-primary);
  color: var(--color-text-primary);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.next-btn {
  background: var(--gradient-primary);
  border: none;
  color: white;
}

.next-btn:hover:not(:disabled) {
  opacity: 0.9;
  background: var(--gradient-primary);
}

.step-indicator {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .workshop-path {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .step-navigation {
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .nav-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
