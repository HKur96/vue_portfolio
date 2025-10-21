<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoadingSplash from './components/LoadingSplash.vue'

const showSplash = ref(true)

const handleSplashComplete = () => {
  showSplash.value = false
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 dark:bg-slate-950">
    <LoadingSplash v-if="showSplash" @complete="handleSplashComplete" />

    <template v-if="!showSplash">
      <div class="fixed inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 -z-10"></div>

      <Navbar />

      <Transition name="page-transition" mode="out-in">
        <RouterView />
      </Transition>

      <Footer />
    </template>
  </div>
</template>
