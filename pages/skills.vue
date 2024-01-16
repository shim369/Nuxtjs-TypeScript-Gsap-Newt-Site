<template>
    <main class="under-main">
        <section class="skills">
            <div class="bg"></div>
            <h1>skills</h1>
            <h2 data-aos="fade-up">My Journey in Tech</h2>

            <p class="read-text" data-aos="fade-up">When I first set foot in the world of programming, my starting point was
                JavaScript. Over the years, my technical prowess has evolved exponentially, mastering a vast array of
                frameworks and languages.</p>

            <div class="flex-box" data-aos="fade-up">
                <div class="flex-item" v-for="skill in skills" :key="skill.title">
                    <h2>{{ skill.title }}</h2>
                    <p>{{ skill.description }}</p>
                </div>
            </div>

            <p data-aos="fade-up">These are but a glimpse of the skills I possess. In a world that continually evolves with
                technology, I consistently strive to keep abreast of the latest trends and techniques, ensuring that I
                deliver the best results in every project.</p>

            <Cta />
        </section>
    </main>
</template>
<script setup lang="ts">
useHead({
    title: 'Skills | Nuxt Base',
    meta: [
        { name: 'description', content: 'Nuxt Base is a website by Nuxt 3' }
    ]
})

const skills = ref([
    {
        title: 'Static Site Generation with Astro',
        description: 'I\'ve honed my skills in Astro to craft fast, SEO-optimized websites. This framework excels in static site generation, and I know how to maximize its potential.'
    },
    {
        title: 'Next.js Efficient Server-Side Rendering',
        description: 'With Next.js, I deliver efficient server-side rendering, providing a seamless browsing experience for users.'
    },
    {
        title: 'Nuxt.js Powerful Server-Side Rendering',
        description: 'Using Nuxt.js, I ensure powerful server-side rendering, resulting in a smooth and uninterrupted browsing experience for users.'
    },
    {
        title: 'Back-End Development with Python and Django',
        description: 'Building efficient and secure back-end systems is one of my core skills. I develop robust systems using Python and Django.'
    },
    {
        title: 'Newt Blog and Contact Features',
        description: 'Newt serves as the backbone of our website, enabling the seamless integration of blog and contact features. This simplifies content management and streamlines website development.'
    },
    {
        title: 'UI/UX Design and Prototyping with Figma',
        description: 'Figma plays a crucial role in the design process. I excel in system development, UI/UX design, and creating prototypes for client and team feedback.'
    }
]);
</script>