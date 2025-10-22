<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  complete: []
}>()

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
    setTimeout(() => {
      emit('complete')
    }, 500)
  }, 2000)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-500"
    leave-to-class="opacity-0 scale-110"
  >
    <div
      v-if="!loaded"
      class="fixed inset-0 z-9999 flex items-center justify-center bg-slate-900"
    >
      <div class="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20"></div>

      <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

      <div class="relative text-center">
        <div class="relative inline-block mb-8">
          <div class="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div class="relative w-32 h-32 rounded-full bg-linear-to-br from-primary to-accent p-1 shadow-glow-lg animate-spin" style="animation-duration: 3s;">
            <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <svg class="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold gradient-text animate-pulse">Loading...</h2>
      </div>
    </div>
  </Transition>
</template>
