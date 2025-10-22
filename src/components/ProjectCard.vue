<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

defineProps<{
  project: Project;
  index: number;
}>();
</script>

<template>
  <div
    class="relative flex flex-col lg:flex-row items-center gap-12 py-16"
    :class="index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <!-- Image Section -->
    <div
      class="flex-1 relative w-full max-w-lg rounded-2xl overflow-hidden bg-slate-800/30 shadow-[0_0_40px_rgba(139,92,246,0.15)] border border-white/10 backdrop-blur-sm transition-transform duration-700 ease-out hover:scale-[1.02]"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="w-lg h-lg object-cover rounded-2xl"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-[#0a0018]/70 via-transparent to-transparent opacity-80"
      ></div>
    </div>

    <!-- Text Section -->
    <div
      class="flex-1 max-w-xl space-y-4 bg-linear-to-br from-[#1c1233]/60 via-[#1a1030]/40 to-[#0e081b]/60 p-6 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-md"
      :class="index % 2 === 0 ? 'lg:-ml-24' : 'lg:-mr-24'"
    >
      <p class="text-sm font-semibold text-purple-400 tracking-wide">
        Featured Project
      </p>

      <h3 class="text-3xl font-bold text-white leading-tight">
        {{ project.title }}
      </h3>

      <p class="text-gray-300 leading-relaxed text-base">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 pt-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex gap-4 pt-4">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-2 rounded-lg text-sm font-medium text-white border border-purple-400/40 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
        >
          GitHub
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-r from-[#8b5cf6] to-[#3b82f6] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
        >
          Live Demo
        </a>
      </div>
    </div>

    <!-- Glow Effects -->
    <div
      class="absolute -z-10 w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full"
      :class="index % 2 === 0 ? 'top-10 left-32' : 'top-10 right-32'"
    ></div>
  </div>
</template>
