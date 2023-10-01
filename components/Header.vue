<template>
<header>
	<nav class="navbar" id="nav">
	<NuxtLink to="/" class="logo">Nuxt Base</NuxtLink>
	<nav class="menu">
		<NuxtLink to="/about">about</NuxtLink>
		<NuxtLink to="/skills">skills</NuxtLink>
		<NuxtLink to="/blog">blog</NuxtLink>
		<NuxtLink to="#contact">contact</NuxtLink>
	</nav>
	<div :class="['open', { 'active': isOpen }]" @click="toggleNav">
		<span></span>
		<span></span>
		<span></span>
	</div>
	</nav>
	<nav :class="['sp-nav', { panelactive: isOpen }]"></nav>
	<div :class="['circle', { circleactive: isOpen }]"></div>
</header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isOpen = ref(false);

const toggleNav = () => {
	isOpen.value = !isOpen.value;
};

onMounted(() => {

	const logoLink = document.querySelector('.logo');

	logoLink.addEventListener('click', (event) => {
		window.location.reload();
		event.preventDefault();
	});

	const navLinks = document.querySelectorAll('.menu a');

	const spNav = document.querySelector('.sp-nav');
	if (spNav) {
		navLinks.forEach((link) => {
		const linkCopy = link.cloneNode(true);
		spNav.appendChild(linkCopy);
		});
	}

	const spNavLinks = document.querySelectorAll('.sp-nav a');
	spNavLinks.forEach((link) => {
		link.addEventListener('click', () => {
		isOpen.value = false;
		});
	});
});
</script>
