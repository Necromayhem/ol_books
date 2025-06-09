<script setup>
import Footer from '@/components/Footer.vue'
import TopNav from '@/components/TopNav.vue'
</script>

<template>
	<section class="cart">
		<TopNav bgColor="#1596c1" />
		<Footer />
	</section>
</template>

<style lang="scss">
@use '/src/assets/style/main.scss' as *;

.cart {
	width: 1440px;
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	color: white;
}
sdsd .top-nav {
	background: #1596c1;
}
</style>
