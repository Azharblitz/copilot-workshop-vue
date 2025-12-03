const state = {
  isDark: true,
  accentColor: 'purple' // 'purple' | 'blue' | 'pink'
}

const getters = {
  isDark: (state) => state.isDark,
  accentColor: (state) => state.accentColor
}

const mutations = {
  SET_DARK_MODE(state, isDark) {
    state.isDark = isDark
  },
  SET_ACCENT_COLOR(state, color) {
    state.accentColor = color
  }
}

const actions = {
  toggleDarkMode({ state, commit }) {
    commit('SET_DARK_MODE', !state.isDark)
  },
  setAccentColor({ commit }, color) {
    commit('SET_ACCENT_COLOR', color)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
