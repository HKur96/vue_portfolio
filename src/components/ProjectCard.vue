<script setup lang="ts">
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="glass-card p-6 group">
    <div class="relative overflow-hidden rounded-lg mb-4 aspect-video bg-slate-800/50">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
    </div>

    <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
      {{ project.title }}
    </h3>

    <p class="text-gray-400 text-sm mb-4 line-clamp-3">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex gap-3">
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-center border-2 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
      >
        GitHub
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-center bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
      >
        Live Demo
      </a>
    </div>
  </div>
</template>
