<script setup></script>

<template>
	<section class="footer">
		<div class="container">
			<div class="logo">
				OLYMPIANS<br />
				BOOKS
			</div>
			<div class="phone">+30922040281</div>
			<div class="main">Главная</div>
			<div class="catalog">Каталог</div>
			<div class="cart">Корзина</div>
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
	width: 310px;
	height: 37px;
	margin-right: 20px;
}

.main {
	@include main_text;
	color: #ffffff;
	width: 200px;
	height: 37px;
	margin-right: 20px;
	text-align: center;
}

.catalog {
	@include main_text;
	color: #ffffff;
	width: 200px;
	height: 37px;
	margin-right: 20px;
	text-align: center;
}

.cart {
	@include main_text;
	color: #ffffff;
	width: 200px;
	height: 37px;
	text-align: center;
}
</style>
