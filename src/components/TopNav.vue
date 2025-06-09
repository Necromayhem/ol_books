<script setup>
const props = defineProps({
	bgColor: {
		type: String,
	},
})
</script>

<template>
	<nav class="menu" :style="{ 'background-color': bgColor }">
		<div class="title">
			<h1>
				olympians<br />
				books
			</h1>
		</div>
		<div class="arrow">
			<img src="/images/header/arrow-down.svg" alt="arrow-down" />
		</div>
		<div class="shopping">
			<img src="/images/header/shopping-cart.svg" alt="shopping-cart" />
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.menu {
	display: flex;
	width: 1440px;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	padding-left: 70px;
	padding-right: 74px;

	.title {
		@include title;
	}

	.arrow {
		width: 64px;
		height: 18px;
		margin-right: 140px;
	}

	.shopping {
		width: 55px;
		height: 64px;
	}
}
</style>
