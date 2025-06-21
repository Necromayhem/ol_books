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
	width: 100%;
	max-width: 1440px;
	height: 120px;
	background-color: #1596c1;
	margin: 0 auto;
	margin-top: 140px;
}

.container {
	width: 100%;
	max-width: 1300px;
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
	width: fit-content;
	height: 37px;
	margin-right: 20px;
	cursor: pointer;
	position: relative;
	display: inline-block;

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
	width: 100%;
	max-width: 200px;
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

@media (max-width: 1400px) {
	.container {
		padding-right: 34px;
		padding-left: 34px;
	}
}

@media (max-width: 950px) {
	.container {
		justify-content: space-between;
	}

	.logo {
		width: 160px;
		height: 60px;
		font-size: 20px;
	}

	.phone {
		width: auto;
		height: 27px;
		font-size: 18px;
		padding: 0;
	}

	.main,
	.catalog,
	.cart {
		width: 100px;
		height: 36px;
		font-size: 18px;
	}
}

@media (max-width: 655px) {
	.footer {
		height: 210px;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto;
		align-items: start;
		height: 210px;
		padding: 15px;
	}

	.logo {
		grid-column: 1;
		grid-row: 1;
		width: 100%;
		height: auto;
		margin: 0;
		transform: translateY(30px);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.phone {
		grid-column: 1;
		grid-row: 3;
		width: 145px;
		height: auto;
		margin: 0;
		padding: 0;
		display: inline-block;
		justify-content: flex-start;
		align-items: center;

		&::after {
			left: 0;
			right: auto;
			width: 0;
		}

		&:hover::after {
			width: 100%;
		}
	}

	.main,
	.catalog,
	.cart {
		width: 100%;
		height: auto;
		margin: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		text-align: right;

		a {
			display: inline-block;
			width: auto;

			&::after {
				left: 0;
				right: auto;
				width: 0;
			}

			&:hover::after {
				width: 100%;
			}
		}
	}

	.main {
		grid-column: 2;
		grid-row: 1;
	}

	.catalog {
		grid-column: 2;
		grid-row: 2;
		transform: translateY(-10px);
	}

	.cart {
		grid-column: 2;
		grid-row: 3;
		transform: translateY(-5px);
	}
}
</style>
