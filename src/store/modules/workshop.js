const state = {
  currentPath: null, // 'start-coding' | 'pro-features'
  currentStep: 1,
  completedSteps: {
    'start-coding': [],
    'pro-features': []
  },
  totalSteps: {
    'start-coding': 11,
    'pro-features': 7
  }
}

const getters = {
  currentPath: (state) => state.currentPath,
  currentStep: (state) => state.currentStep,
  completedSteps: (state) => (path) => state.completedSteps[path] || [],
  totalSteps: (state) => (path) => state.totalSteps[path] || 0,
  isStepCompleted: (state) => (path, step) => {
    return state.completedSteps[path]?.includes(step) || false
  },
  progressPercentage: (state) => (path) => {
    const completed = state.completedSteps[path]?.length || 0
    const total = state.totalSteps[path] || 1
    return Math.round((completed / total) * 100)
  },
  allStepsCompleted: (state) => (path) => {
    const completed = state.completedSteps[path]?.length || 0
    const total = state.totalSteps[path] || 0
    return completed === total && total > 0
  }
}

const mutations = {
  SET_CURRENT_PATH(state, path) {
    state.currentPath = path
  },
  SET_CURRENT_STEP(state, step) {
    state.currentStep = step
  },
  COMPLETE_STEP(state, { path, step }) {
    if (!state.completedSteps[path].includes(step)) {
      state.completedSteps[path].push(step)
    }
  },
  UNCOMPLETE_STEP(state, { path, step }) {
    const index = state.completedSteps[path].indexOf(step)
    if (index > -1) {
      state.completedSteps[path].splice(index, 1)
    }
  },
  SET_COMPLETED_STEPS(state, completedSteps) {
    state.completedSteps = completedSteps
  },
  RESET_PROGRESS(state, path) {
    if (path) {
      state.completedSteps[path] = []
    } else {
      state.completedSteps = {
        'start-coding': [],
        'pro-features': []
      }
    }
  }
}

const actions = {
  setCurrentPath({ commit }, path) {
    commit('SET_CURRENT_PATH', path)
  },
  setCurrentStep({ commit }, step) {
    commit('SET_CURRENT_STEP', step)
  },
  completeStep({ commit }, payload) {
    commit('COMPLETE_STEP', payload)
  },
  uncompleteStep({ commit }, payload) {
    commit('UNCOMPLETE_STEP', payload)
  },
  toggleStepCompletion({ state, commit }, { path, step }) {
    if (state.completedSteps[path]?.includes(step)) {
      commit('UNCOMPLETE_STEP', { path, step })
    } else {
      commit('COMPLETE_STEP', { path, step })
    }
  },
  resetProgress({ commit }, path) {
    commit('RESET_PROGRESS', path)
  },
  nextStep({ state, commit }) {
    const total = state.totalSteps[state.currentPath] || 0
    if (state.currentStep < total) {
      commit('SET_CURRENT_STEP', state.currentStep + 1)
    }
  },
  previousStep({ state, commit }) {
    if (state.currentStep > 1) {
      commit('SET_CURRENT_STEP', state.currentStep - 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
