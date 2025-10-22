<script setup lang="ts">
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";

// const router = useRouter();
const route = useRoute();
const mobileMenuOpen = ref(false);
const homeTarget = ref<HTMLElement | null>(null);
const aboutTarget = ref<HTMLElement | null>(null);
const projectsTarget = ref<HTMLElement | null>(null);
const contactTarget = ref<HTMLElement | null>(null);

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const isActive = (path: string) => route.path === path;

const scrollToTarget = (section: string) => {
  let target: HTMLElement | null = null;

  // Choose the correct target based on the button clicked
  if (section === "Home") {
    target = homeTarget.value;
  } else if (section === "About") {
    target = aboutTarget.value;
  } else if (section === "Projects") {
    target = projectsTarget.value;
  } else if (section === "Contact") {
    target = contactTarget.value;
  }

  if (!target) return;

  // Scroll into view if the target exists
  target?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div
          class="flex items-center cursor-pointer"
          @click="scrollToTarget('Home')"
        >
          <div
            class="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <span class="ml-3 text-xl font-bold gradient-text"
            >Hari Kurniawan</span
          >
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="scrollToTarget(item.name)"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              isActive(item.path)
                ? 'bg-primary/20 text-primary shadow-glow'
                : 'text-gray-300 hover:text-white hover:bg-white/5',
            ]"
          >
            {{ item.name }}
          </button>
          <ThemeToggle />
        </div>

        <div class="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="scrollToTarget(item.name)"
            :class="[
              'block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300',
              isActive(item.path)
                ? 'bg-primary/20 text-primary shadow-glow'
                : 'text-gray-300 hover:text-white hover:bg-white/5',
            ]"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </transition>
  </nav>

  <!-- Sections with their refs -->
  <div ref="homeTarget" id="home">
    <Home />
  </div>
  <div ref="aboutTarget" id="about">
    <About />
  </div>
  <div ref="projectsTarget" id="projects">
    <Projects />
  </div>
  <div ref="contactTarget" id="contact">
    <Contact />
  </div>
</template>
