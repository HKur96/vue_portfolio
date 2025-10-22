<script setup lang="ts">
interface Experience {
  role: string
  company: string
  period: string
  description: string
  icon?: string
}

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <div class="glass-card p-6 hover:scale-105 transition-all duration-300">
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-glow shrink-0">
        <svg v-if="!experience.icon" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <div class="flex-1">
        <h3 class="text-lg font-bold text-white mb-1">
          {{ experience.role }}
        </h3>
        <p class="text-primary font-medium text-sm mb-1">
          {{ experience.company }}
        </p>
        <p class="text-gray-400 text-xs mb-3">
          {{ experience.period }}
        </p>
        <p class="text-gray-300 text-sm">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </div>
</template>
