<script setup>
import Footer from '@/components/Footer.vue'
import TopNav from '@/components/TopNav.vue'
</script>

<template>
	<div class="page-wrapper">
		<TopNav bgColor="#1596c1" />
		<main class="content"></main>
		<Footer />
	</div>
</template>

<style lang="scss">
@use '/src/assets/style/main.scss' as *;

.page-wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	width: 1440px;
	max-width: 100%;
	margin: 0 auto;
	color: white;
}

.top-nav {
	background: #1596c1;
}

.content {
	flex: 1;
}

.footer {
	margin-top: auto;
}
</style>
