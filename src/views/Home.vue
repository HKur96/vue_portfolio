<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const skills = ['Flutter', 'Dart', 'Firebase', 'Kotlin', 'Swift', 'REST APIs']
</script>

<template>
  <div class="min-h-screen pt-16">
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20"></div>

      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8" data-aos="zoom-in" data-aos-duration="1000">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div class="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-linear-to-br from-primary to-accent p-1 shadow-glow-lg">
              <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <svg class="w-20 h-20 md:w-24 md:h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <h1
          class="text-5xl md:text-7xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, I'm <span class="gradient-text">Hari</span>
        </h1>

        <h2
          class="text-2xl md:text-4xl font-semibold text-gray-300 mb-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Flutter Developer
        </h2>

        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A developer who
        </p>

        <p
          class="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Judges a <span class="gradient-text">bug</span> by its <span class="gradient-text">cover</span>...
        </p>

        <p
          class="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Because the cover does not impress you what else can?
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="#"
            class="btn-primary w-full sm:w-auto"
          >
            Download CV
          </a>
          <button
            @click="router.push('/projects')"
            class="btn-secondary w-full sm:w-auto"
          >
            View Projects
          </button>
        </div>

        <div
          class="mt-16 flex flex-wrap gap-3 justify-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-4 py-2 rounded-full glass-card text-sm font-medium hover:shadow-glow transition-all duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
