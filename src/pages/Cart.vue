<script setup>
import TopNav from '@/components/TopNav.vue'
</script>

<template>
	<section class="cart">
		<TopNav />
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
</style>
