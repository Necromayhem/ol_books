<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
	<section class="footer">
		<div class="container">
			<router-link to="/">
				<div class="logo">
					OLYMPIANS<br />
					BOOKS
				</div>
			</router-link>
			<div class="phone">+30922040281</div>
			<div class="main">
				<router-link to="/" :class="{ active: route.path === '/' }"
					>Главная</router-link
				>
			</div>
			<div class="catalog">
				<router-link
					to="/catalog"
					:class="{ active: route.path === '/catalog' }"
					>Каталог</router-link
				>
			</div>
			<div class="cart">
				<router-link to="/cart" :class="{ active: route.path === '/cart' }"
					>Корзина</router-link
				>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.footer {
	width: 1440px;
	height: 120px;
	background-color: #1596c1;
	margin: 0 auto;
	margin-top: 140px;
}

.container {
	width: 1300px;
	height: 120px;
	display: flex;
	align-items: center;
	margin: 0 auto;
}

.logo {
	@include logo_big;
	width: 310px;
	height: 92px;
	margin-right: 20px;
}

.phone {
	@include main_text;
	color: #ffffff;
	width: fit-content; /* Подстраивается под текст */
	height: 37px;
	margin-right: 20px;
	cursor: pointer;
	position: relative;
	display: inline-block; /* Чтобы подчёркивание было по ширине текста */

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -5px;
		width: 0;
		height: 2px;
		background-color: white;
		transition:
			width 0.3s ease,
			background-color 0.3s ease;
	}

	&:hover {
		color: white;
	}

	&:hover::after {
		width: 100%;
	}

	&:active {
		color: black;
	}

	&:active::after {
		width: 100%;
		background-color: black;
	}
}

.main,
.catalog,
.cart {
	@include main_text;
	color: #ffffff;
	width: 200px;
	height: 37px;
	margin-right: 20px;
	text-align: center;

	a {
		color: inherit;
		text-decoration: none;
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		line-height: 37px;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -5px;
			width: 0;
			height: 2px;
			background-color: white;
			transition:
				width 0.3s ease,
				background-color 0.3s ease;
		}

		&:hover {
			color: white;
		}

		&:hover::after {
			width: 100%;
		}

		&:active {
			color: black;
		}

		&:active::after {
			width: 100%;
			background-color: black;
		}
	}
}
</style>
