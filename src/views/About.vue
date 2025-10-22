<script setup lang="ts">
import ExperienceCard from '../components/ExperienceCard.vue'

const skills = [
  { name: 'Flutter', level: 95 },
  { name: 'Dart', level: 95 },
  { name: 'Firebase', level: 90 },
  { name: 'Kotlin', level: 85 },
  { name: 'Swift', level: 80 },
  { name: 'REST APIs', level: 90 },
  { name: 'State Management', level: 92 },
  { name: 'UI/UX Design', level: 88 }
]

const experiences = [
  {
    role: 'Senior Flutter Developer',
    company: 'Tech Innovation Inc.',
    period: '2022 - Present',
    description: 'Leading mobile app development projects using Flutter, implementing complex UI/UX designs and managing state with Riverpod.'
  },
  {
    role: 'Flutter Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple Flutter applications, integrated Firebase services, and collaborated with cross-functional teams.'
  },
  {
    role: 'Mobile App Developer',
    company: 'StartUp Ventures',
    period: '2019 - 2020',
    description: 'Built native Android and iOS applications, later transitioned to Flutter development for cross-platform solutions.'
  }
]
</script>

<template >
  <div ref="aboutTarget" id="about" class="min-h-screen pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          About <span class="gradient-text">Me</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate Flutter developer crafting beautiful and performant mobile applications
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <div data-aos="fade-right">
          <div class="glass-card p-8">
            <h2 class="text-2xl font-bold mb-6 gradient-text">My Story</h2>
            <div class="space-y-4 text-gray-300">
              <p>
                I'm a passionate Flutter developer with over 5 years of experience in building cross-platform mobile applications. My journey in mobile development started with native Android development, but I fell in love with Flutter's expressive UI framework and hot reload feature.
              </p>
              <p>
                I specialize in creating beautiful, performant, and scalable mobile applications. From concept to deployment, I ensure every app I build provides an exceptional user experience while maintaining clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new UI/UX trends, contributing to open-source projects, or writing technical articles to share my knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div class="glass-card p-8">
            <h2 class="text-2xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
            <div class="space-y-4">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="group"
              >
                <div class="flex justify-between mb-2">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-primary font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-12" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Work <span class="gradient-text">Experience</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <ExperienceCard :experience="exp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
