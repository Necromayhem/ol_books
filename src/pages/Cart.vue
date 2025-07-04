<script setup>
import Footer from '@/components/Footer.vue'
import TopNav from '@/components/TopNav.vue'
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'

const cartStore = useCartStore()
const isOrderPlaced = ref(false)
const deletingItemId = ref(null)

const addToCart = item => {
	cartStore.addItem(item)
}

const deleteItem = itemId => {
	cartStore.deleteItem(itemId)
}

const removeFromCart = async itemId => {
	deletingItemId.value = itemId
	await new Promise(resolve => setTimeout(resolve, 300))
	cartStore.removeItem(itemId)
	deletingItemId.value = null
}

const placeOrder = () => {
	if (cartStore.items.length > 0) {
		isOrderPlaced.value = true
		cartStore.clearCart()
	}
}
</script>

<template>
	<div class="page-wrapper">
		<TopNav bgColor="#1596c1" />
		<main class="content">
			<div class="title">
				<h2>Корзина</h2>
			</div>

			<div v-if="isOrderPlaced" class="order-message">
				Благодарим за покупку!<br />
				Ваши ценные манускрипты прибудут в ближайшее время. Возвращайтесь еще!
			</div>

			<template v-else>
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
							<TransitionGroup name="item">
								<div
									class="cart-item"
									v-for="item in cartStore.items"
									:key="item.id"
									:class="{ 'deleting-item': deletingItemId === item.id }"
								>
									<div class="title-list">
										<img :src="item.image" alt="book.jpg" />
										<div>{{ item.author }}, "{{ item.title }}"</div>
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
							</TransitionGroup>
						</div>
					</div>
					<div class="total">
						<span class="for_payment">Итого к оплате</span>
						<span class="pay">{{ cartStore.totalPrice }} р.</span>
					</div>
					<div class="order">
						<button @click="placeOrder">Оформить заказ</button>
					</div>
				</div>
			</template>
		</main>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.page-wrapper {
	min-height: 100vh;
	max-height: 1680px;
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
	width: 100%;
	max-width: 860px;
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

.order-message {
	@include main_text;
	color: black;
	width: 100%;
	max-width: 1300px;
	height: 200px;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	animation: fadeIn 0.5s ease-in-out;
	font-size: 24px;
	line-height: 1.5;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.item-move,
.item-enter-active,
.item-leave-active {
	transition: all 0.3s ease;
}

.item-enter-from,
.item-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}

.item-leave-active {
	position: absolute;
	width: calc(100% - 84px);
}

.deleting-item {
	background-color: rgba(255, 0, 0, 0.1);
	transition: background-color 0.3s ease;
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

@media (max-width: 1130px) {
	.page-wrapper {
		max-height: 1240px;
	}

	.cart-item {
		height: 190px;
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.price-list {
		display: none !important;
	}

	.price {
		display: none !important;
	}

	.quantity {
		display: none !important;
	}

	.quantity-list {
		transform: translate(-240px, 50px);
		width: 200px;

		span {
			display: none;
		}
	}

	.btn_add {
		transform: translateX(100px);
	}

	.title-list div {
		width: 310px !important;
		height: 70px !important;
		font-size: 18px;
		margin-bottom: 95px;
		margin-top: 25px;
	}

	.title-list img {
		width: 90px !important;
		height: 135px !important;
		margin-right: 25px !important;
	}

	.total {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
		margin-top: 20px;
		padding-right: 120px;
		padding-left: 60px;
	}

	.for_payment {
		width: 280px;
		height: 50px;
		font-size: 24px;
		text-align: center;
	}

	.pay {
		width: 160px;
		height: 50px;
		font-size: 24px;
		text-align: center;
	}

	.order button {
		width: 340px;
		height: 50px;
		font-size: 24px;
	}

	.item {
		width: 400px;
		height: 50px !important;
		font-size: 18px;
		transform: translateX(10px);
	}

	.total-price {
		width: 160px;
		height: 50px !important;
		font-size: 18px;
		transform: translateX(45px);
	}

	.total-price-list {
		width: 160px;
		height: 50px;
		font-size: 18px !important;
		margin-top: 70px;
		transform: translateX(-30px);
	}

	.info {
		margin-top: 20px;
		margin-bottom: 20px;
		max-width: 700px;
	}

	.title {
		width: 460px;
		height: 50px;

		h2 {
			font-size: 48px;
		}
	}

	.remove-list img {
		width: 32px !important;
		height: 32px !important;
		min-width: 32px;
		flex-shrink: 0;
	}
}

@media (max-width: 768px) {
	.page-wrapper {
		max-height: 1680px;
	}
}

@media (max-width: 700px) {
	.page-wrapper {
		max-height: 1680px;
	}

	.title {
		margin-top: 90px;
		margin-bottom: 40px;
		width: 100%;
		max-width: 290px !important;
		height: 50px !important;
		h2 {
			font-size: 48px !important;
		}
	}

	.title-list {
		flex-wrap: wrap;
		margin-top: 33px;
	}

	.title-list img {
		width: 90px;
		height: 135px;
		justify-content: center;
		margin-right: 0 !important;
	}

	.title-list div {
		min-width: 240px !important;
		min-height: 80px !important;
		font-size: 18px !important;
		margin: 12px auto 0 12px !important;
		display: flex !important;
		flex-direction: column;
		align-items: center !important;
		justify-content: flex-start !important;
		text-align: center !important;
	}

	.cart-item {
		flex-direction: column;
		width: 290px;
		height: 410px;
		margin-top: 10px;
		padding-right: 0;
		padding-left: 0;
	}

	.quantity-list {
		margin: 0 auto;
		margin-left: 55px;
		transform: none;
		font-size: 18px !important;

		span {
			display: inline-block;
		}
	}

	.total-price-list {
		margin: 0 auto;

		div {
			margin: 0 auto !important;
			margin-top: 10px !important;
			font-size: 18px !important;
			transform: translateX(10px);
			width: 140px !important;
			height: 50px !important;
		}
	}

	.remove-list img {
		transform: translate(240px, -350px);
	}

	.btn_add {
		transform: none;
	}

	.item {
		transform: none;
	}

	.total-price {
		transform: none;
	}

	.total-price-list {
		transform: none;
	}

	.info {
		display: none;
	}

	.total {
		flex-direction: column;
		margin: 0 auto;
		padding-right: 0;
		padding-left: 0;
	}

	.for_payment {
		margin: 0 auto;
		margin-top: 10px;
		width: 290px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.pay {
		margin: 0 auto;
		width: 190px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.order {
		margin-bottom: 40px;
	}

	.order button {
		width: 100%;
		max-width: 290px;
	}
}
</style>
