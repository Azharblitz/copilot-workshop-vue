<template>
  <div id="app" :class="{ 'sidebar-open': isSidebarOpen }">
    <AppHeader @toggle-sidebar="toggleSidebar" />
    <div class="app-layout">
      <AppSidebar 
        v-if="showSidebar" 
        :is-open="isSidebarOpen" 
        @close="closeSidebar" 
      />
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <AppFooter v-if="!showSidebar" />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    showSidebar() {
      const routeName = this.$route.name
      return routeName === 'StartCoding' || routeName === 'ProFeatures'
    }
  },
  watch: {
    '$route'() {
      this.closeSidebar()
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    }
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout {
  display: flex;
  flex: 1;
  padding-top: var(--header-height);
}

.main-content {
  flex: 1;
  min-height: calc(100vh - var(--header-height));
  padding: var(--spacing-8);
  max-width: 100%;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .main-content {
    padding: var(--spacing-4);
  }
}
</style>
