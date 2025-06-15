<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
})

const emit = defineEmits(['close'])

const route = useRoute()
const router = useRouter()
const dropdownRef = ref(null)

onClickOutside(dropdownRef, () => {
	if (props.isOpen) {
		emit('close')
	}
})

watch(route, () => {
	emit('close')
})

const handleNavigation = path => {
	if (route.path !== path) {
		router.push(path)
	}
	emit('close')
}
</script>

<template>
	<transition name="slide">
		<div v-if="isOpen" ref="dropdownRef" class="dropdown">
			<div class="dropdown-content">
				<img
					src="/public/images/header/arrow_up.svg"
					alt=""
					@click="emit('close')"
					style="cursor: pointer"
				/>
				<a @click="handleNavigation('/')">Главная</a>
				<a @click="handleNavigation('/catalog')">Каталог</a>
				<a @click="handleNavigation('/cart')">Корзина</a>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.dropdown {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	max-width: 420px;
	width: 100%;
	height: 460px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1001;
	background-color: white;
	margin: 0 auto;
}

.dropdown-content {
	@include price;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 56px;
	color: black;

	img {
		width: 64px;
		height: 19px;
	}

	a {
		cursor: pointer;
		position: relative;
		text-decoration: none;
		transition: all 0.3s ease;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -5px;
			width: 0;
			height: 2px;
			background-color: black;
			transition:
				width 0.3s ease,
				background-color 0.3s ease;
		}

		&:hover::after {
			width: 100%;
		}

		&:active {
			color: #1596c1; /* Синий цвет текста при нажатии */
		}

		&:active::after {
			width: 100%;
			background-color: #1596c1; /* Синий цвет подчёркивания при нажатии */
		}
	}
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
