<script setup>
import { useCartStore } from '@/stores/cartStore'

const props = defineProps({
	book: {
		type: Object,
		required: true,
	},
})

const cartStore = useCartStore()

const addToCart = () => {
	cartStore.addItem(props.book)
}
</script>

<template>
	<div class="book-card">
		<img :src="book.image" :alt="book.title" />
		<h3 class="book-title">{{ book.author }}, "{{ book.title }}"</h3>
		<span class="book-genre">{{ book.genre }}</span>
		<div class="add-to-cart">
			<div class="book-price">{{ book.price }} р.</div>
			<button class="buy-btn" @click="addToCart">Купить</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.book-card {
	width: 420px;
	height: 650px;
	border: 3px solid black;
	flex-shrink: 0;
	transition: opacity 0.3s ease;

	img {
		width: 200px;
		height: 301px;
		margin-top: 25px;
		margin: 25px auto 0px auto;
	}
}

.book-title {
	@include main_text;
	width: 370px;
	height: 75px;
	margin-top: 29px;
	margin-left: 25px;
	margin-right: 25px;
	padding-right: 4px;
	text-align: center;
}

.book-genre {
	@include sub_text;
	display: flex;
	margin: 0 auto;
	width: 223px;
	height: 100px;
	align-items: center;
	justify-content: center;
}

.add-to-cart {
	width: 367px;
	height: 75px;
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 19px;
}

.book-price {
	@include price;
	width: 174px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.buy-btn {
	@include buy_btn;
	width: 174px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid black;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:active {
		background-color: #1596c1;
		color: black;
	}
}
</style>
