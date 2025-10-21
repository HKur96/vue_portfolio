<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'E-Commerce App',
    description: 'A full-featured e-commerce mobile application with product catalog, cart management, payment integration, and order tracking. Built with Flutter and Firebase.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Firebase', 'Stripe', 'BLoC'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking app with workout plans, nutrition tracking, progress charts, and social features. Integrated with health APIs.',
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Health APIs', 'Charts', 'Provider'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management',
    description: 'A beautiful and intuitive task management app with categories, priorities, reminders, and team collaboration features. Supports offline mode.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'SQLite', 'Notifications', 'Riverpod'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Social Media App',
    description: 'A modern social media platform with real-time messaging, stories, posts, likes, comments, and user profiles. Built with scalability in mind.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Firebase', 'Real-time', 'GetX'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Weather App',
    description: 'A sleek weather application with real-time weather data, 7-day forecasts, location-based services, and beautiful animated weather icons.',
    image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'REST API', 'Animations', 'Provider'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'News Reader',
    description: 'A news aggregator app with personalized feeds, bookmarks, offline reading, and support for multiple languages and sources.',
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'News API', 'Hive', 'BLoC'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]
</script>

<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of mobile applications I've built with passion and precision
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="(index % 3) * 100"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <div class="mt-16 text-center" data-aos="fade-up">
        <p class="text-gray-400 mb-6">
          Want to see more? Check out my GitHub profile for additional projects and contributions.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-block"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  </div>
</template>
