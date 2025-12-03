import { createStore } from 'vuex'
import workshop from './modules/workshop'
import theme from './modules/theme'

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('copilot-workshop-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      workshop: {
        completedSteps: state.workshop.completedSteps
      }
    })
    localStorage.setItem('copilot-workshop-state', serializedState)
  } catch (err) {
    console.error('Could not save state', err)
  }
}

const persistedState = loadState()

const store = createStore({
  modules: {
    workshop,
    theme
  },
  plugins: [
    (store) => {
      // Initialize with persisted state
      if (persistedState?.workshop?.completedSteps) {
        store.commit('workshop/SET_COMPLETED_STEPS', persistedState.workshop.completedSteps)
      }
      
      // Subscribe to store changes
      store.subscribe((mutation, state) => {
        if (mutation.type.startsWith('workshop/')) {
          saveState(state)
        }
      })
    }
  ]
})

export default store
