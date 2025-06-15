<script setup>
import Footer from '@/components/Footer.vue'
import TopNav from '@/components/TopNav.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const addToCart = item => {
	cartStore.addItem(item)
}

const deleteItem = itemId => {
	cartStore.deleteItem(itemId)
}

const removeFromCart = item => {
	cartStore.removeItem(item)
}
</script>

<template>
	<div class="page-wrapper">
		<TopNav bgColor="#1596c1" />
		<main class="content">
			<div class="title">
				<h2>Корзина</h2>
			</div>
			<div v-if="cartStore.items.length === 0" class="empty_cart">
				<span
					>Ваша корзина пока пуста. Отыщите в библиотеке необходимые
					фолианты.</span
				>
			</div>
			<div v-else>
				<div class="info">
					<div class="item">Название товара</div>
					<div class="price">Цена за шт.</div>
					<div class="quantity">Количество</div>
					<div class="total-price">Общая цена</div>
				</div>
				<div class="cart-wrapper">
					<div class="cart-list">
						<div
							class="cart-item"
							v-for="item in cartStore.items"
							:key="item.id"
						>
							<div class="title-list">
								<img :src="item.image" alt="book.jpg" />
								<div>{{ item.author }}, “{{ item.title }}”</div>
							</div>
							<div class="price-list">
								<div>{{ item.price }} р.</div>
							</div>
							<div class="quantity-list">
								<button class="btn_remove" @click="deleteItem(item.id)">
									<img src="/src/assets/images/cart/minus.svg" alt="" />
								</button>
								<span>{{ item.quantity }} шт.</span>
								<button class="btn_add" @click="addToCart(item)">
									<img src="/src/assets/images/cart/plus.svg" alt="" />
								</button>
							</div>
							<div class="total-price-list">
								<div>{{ item.price * item.quantity }} р.</div>
							</div>
							<button class="remove-list" @click="removeFromCart(item.id)">
								<img src="/src/assets/images/cart/remove.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
				<div class="total">
					<span class="for_payment">Итого к оплате</span>
					<span class="pay">{{ cartStore.totalPrice }} р.</span>
				</div>
				<div class="order"><button>Оформить заказ</button></div>
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
	margin-top: 20px;
	width: 100%;
	max-width: 1300px;
	height: 220px;
	display: flex;
	justify-content: space-between;
	padding-left: 55px;
	padding-right: 29px;
	border: 3px solid black;

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
		flex-wrap: wrap;
		width: 310px;
		height: 220px;
		text-align: left;
		align-items: center;
	}

	.price-list div {
		margin-right: 20px;
		display: flex;
		width: 200px;
		height: 75px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.quantity-list {
		margin-right: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 200px;

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
		width: 200px;
		height: 75px;
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

.total {
	margin-top: 20px;
	color: black;
	font-family: 'Forum', sans-serif;
	font-size: 42px;
	line-height: 1.5;
	letter-spacing: 0.07em;
	display: flex;
	justify-content: space-between;
	padding-left: 100px;
	padding-right: 110px;
	.for_payment {
		text-transform: uppercase;
	}
}

.order {
	margin-top: 20px;
	margin-bottom: 140px;
	display: flex;
	width: 100%;
	max-width: 1300px;
	justify-content: center;
	button {
		width: 640px;
		height: 100px;
		font-family: 'Forum', sans-serif;
		font-size: 42px;
		line-height: 1.5;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		border: 3px solid black;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;

		&:active {
			background-color: #1596c1;
			color: black;
		}
	}
}

.empty_cart {
	@include main_text;
	color: black;
	width: 100%;
	max-width: 1300px;
	height: 100px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}

.footer {
	margin-top: auto;
}
</style>
