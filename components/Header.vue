<template>
<header>
	<nav class="navbar" id="nav">
        <NuxtLink to="/" class="logo">Nuxt Base</NuxtLink>
		<nav class="menu">
			<NuxtLink to="#">about</NuxtLink>
			<NuxtLink to="#">skills</NuxtLink>
			<NuxtLink to="#">blog</NuxtLink>
			<NuxtLink to="#">contact</NuxtLink>
		</nav>
		<div class="open" bind:this={openButton}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</nav>
	<nav class="sp-nav"></nav>
	<div class="circle"></div>
</header>
</template>