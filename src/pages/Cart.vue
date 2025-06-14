<script setup>
import Footer from '@/components/Footer.vue'
import TopNav from '@/components/TopNav.vue'
</script>

<template>
	<div class="page-wrapper">
		<TopNav bgColor="#1596c1" />
		<main class="content">
			<div class="title">
				<h2>Корзина</h2>
			</div>
			<div class="info">
				<div class="item">Название товара</div>
				<div class="price">Цена за шт.</div>
				<div class="quantity">Количество</div>
				<div class="total-price">Общая цена</div>
			</div>
			<div class="cart-wrapper">
				<div class="cart-list">
					<div class="cart-item">
						<div class="title-list">
							<img src="" alt="book.jpg" />
							<div>{{ 1312321323123213213 }}, {{ 12312321311111111111 }}</div>
						</div>
						<div class="price-list">
							<div>{{ 147 }} р.</div>
						</div>
						<div class="quantity-list">
							<button class="btn_remove">
								<img src="/public/images/cart/minus.svg" alt="" />
							</button>
							<span>{{ 3 }} шт.</span>
							<button class="btn_add">
								<img src="/public/images/cart/plus.svg" alt="" />
							</button>
						</div>
						<div class="total-price-list">
							<div>{{ 174 }} р.</div>
						</div>
						<button class="remove-list">
							<img src="/public/images/cart/remove.svg" alt="" />
						</button>
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
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
	width: 1300px;
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	flex: 1;
}

.title {
	margin: 0 auto;
	margin-top: 140px;
	width: 860px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	h2 {
		@include title_1;
		color: black;
	}
}

.info {
	@include main_text;
	width: 100%;
	max-width: 1300px;
	color: black;
	display: flex;
	gap: 20px;
	margin: 0 auto;
	margin-top: 20px;
	padding-right: 110px;
	.item,
	.price,
	.quantity,
	.total-price {
		max-width: 200px;
		width: 100%;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.item {
		max-width: 530px;
	}
}

.cart-wrapper {
	width: 100%;
	max-width: 1300px;
}

.cart-list {
	color: black;
}

.cart-item {
	width: 100%;
	max-width: 1300px;
	height: 220px;
	display: flex;
	justify-content: space-between;
	padding-left: 55px;
	padding-right: 29px;

	.title-list,
	.price-list,
	.quantity-list,
	.total-price-list {
		@include main_text;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.title-list img {
		width: 90px;
		height: 135px;
		margin-right: 75px;
	}

	.title-list div {
		margin-right: 20px;
		display: flex;
		max-width: 310px;
		max-height: 220px;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.price-list div {
		margin-right: 20px;
		display: flex;
		max-width: 200px;
		max-height: 75px;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.quantity-list {
		margin-right: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between; // Добавляем сюда
		max-width: 200px;
		width: 100%;

		button {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		span {
			flex-grow: 1;
			text-align: center;
		}
	}

	.total-price-list div {
		margin-right: 49px;
		display: flex;
		max-width: 200px;
		max-height: 75px;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
}

.btn_remove img {
	width: 32px;
	height: 5px;
}

.btn_add img {
	width: 32px;
	height: 32px;
}

.remove-list img {
	width: 32px;
	height: 32px;
}

.footer {
	margin-top: auto;
}
</style>
