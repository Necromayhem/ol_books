<script setup>
import { ref } from 'vue'
import DropdownMenu from './DropdownMenu.vue'

const props = defineProps({
	bgColor: {
		type: String,
	},
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
	isMenuOpen.value = false
}
</script>

<template>
	<div class="nav-container">
		<nav class="menu" :style="{ 'background-color': bgColor }">
			<div class="title">
				<router-link to="/"
					><h1>
						olympians<br />
						books
					</h1></router-link
				>
			</div>
			<div class="arrow" @click="toggleMenu">
				<img src="/images/header/arrow-down.svg" alt="arrow-down" />
			</div>
			<div class="shopping">
				<router-link to="/cart">
					<img src="/images/header/shopping-cart.svg" alt="shopping-cart" />
				</router-link>
			</div>
		</nav>
		<DropdownMenu :isOpen="isMenuOpen" @close="closeMenu" />
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.nav-container {
	position: relative;
}

.menu {
	display: flex;
	width: 100%;
	max-width: 1440px;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	padding-left: 70px;
	padding-right: 74px;
	position: relative;
	z-index: 1001;

	.title {
		@include title;
	}

	.arrow {
		width: 64px;
		height: 18px;
		margin-right: 140px;
		cursor: pointer;
	}

	.shopping {
		width: 55px;
		height: 64px;
	}
}

@media (max-width: 1120px) {
	.title {
		font-size: 80px;
	}

	.menu {
		padding-left: 34px;
		padding-right: 36px;
	}

	.arrow {
		display: grid;
		place-items: center;
		width: 64px;
		height: 18px;
		cursor: pointer;
		margin-right: 0 !important;
	}
}

@media (max-width: 1120px) {
	.title h1 {
		font-size: 14px;
	}

	.arrow img {
		width: 32px;
		height: 10px;
	}

	.shopping {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 28px;
			height: 32px;
			margin: 0 auto;
		}
	}
}

@media (max-width: 768px) {
	.menu {
		height: 50px;
	}
}

@media (max-width: 590px) {
	.title h1 {
		font-size: 10px;
	}

	.arrow img {
		width: 40px;
		height: 12px;
	}

	.shopping {
		img {
			width: 35px;
			height: 40px;
			margin: 0 auto;
		}
	}
}
</style>
