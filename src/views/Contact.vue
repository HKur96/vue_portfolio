<script setup lang="ts">

const contactInfo = [
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "ibrhaleememon30@gmail.com",
    href: null,
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "+1 234 567 8900",
    href: null,
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
];
</script>

<template >
  <div ref="contactTarget" id="contact" class="min-h-screen pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Get in <span class="gradient-text">Touch</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <component
              :is="info.href ? 'a' : 'div'"
              :href="info.href"
              :class="[
                'glass-card p-6 h-full transition-all duration-300',
                info.href && 'hover:scale-105 cursor-pointer',
              ]"
            >
              <div
                class="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-glow"
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
                    :d="info.icon"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ info.label }}</h3>
              <p class="text-gray-400 text-sm">{{ info.value }}</p>
            </component>
          </div>
        </div>

        <div
          class="glass-card p-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 class="text-2xl font-bold mb-6 text-center">
            Have a project in mind?
            <span class="gradient-text">Let's connect!</span>
          </h2>
          <p class="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Whether you have a question, want to discuss a project, or just want
            to say hi, I'd love to hear from you. Feel free to reach out through
            email or connect with me on social media.
          </p>

          <div class="flex justify-center">
            <a
              href="mailto:ibrhaleememon30@gmail.com"
              class="btn-primary inline-flex items-center gap-2"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
