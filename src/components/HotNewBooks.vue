<script setup>
import { ref, computed } from 'vue'

const books = [
	{
		id: 1,
		title: 'Двадцать тысяч лье под водой',
		author: 'Ж. Верн',
		genre: 'Приключения',
		price: 168,
		image: 'books/20_000lie.jpg',
	},
	{
		id: 2,
		title: 'Легенды и мифы Древней Греции',
		author: 'Н. Кун',
		genre: 'Эпос и фольклор',
		price: 174,
		image: 'books/master_and_marg.jpg',
	},
	{
		id: 3,
		title: 'Гомер',
		author: 'Гомер',
		genre: 'Эпос и фольклор',
		price: 155,
		image: '/books/iliada.jpg',
	},
]
</script>

<template>
	<section class="new-books">
		<div class="container">
			<div class="title">
				<h2>Горячие новинки</h2>
			</div>
			<div class="carousel-wrapper">
				<div class="carousel">
					<div class="book-card" v-for="book in books" :key="book.id">
						<img :src="book.image" alt="book.title" />
						<h3 class="book-title">{{ book.author }}, "{{ book.title }}"</h3>
						<span class="book-genre">{{ book.genre }}</span>
						<div class="add-to-cart">
							<div class="book-price">{{ book.price }} р.</div>
							<button class="buy-btn">Купить</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-controls">
				<button class="arrow-prev">
					<img src="/src/assets/images/new-books/arrow-prev.svg" alt="prev" />
				</button>
				<div class="dots">
					<button class="dot">
						<img src="/src/assets/images/new-books/dot.svg" alt="left" />
					</button>
					<button class="dot">
						<img
							src="/src/assets/images/new-books/dot-active.svg"
							alt="center"
						/>
					</button>
					<button class="dot">
						<img src="/src/assets/images/new-books/dot.svg" alt="right" />
					</button>
				</div>
				<button class="arrow-next">
					<img src="/src/assets/images/new-books/arrow-next.svg" alt="next" />
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.new-books {
	margin-top: 140px;
	margin-left: auto;
	margin-right: auto;
	height: 940px;
	width: 1440px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
}

.container {
	height: 100%;
	max-width: 1300px;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding-left: 70px;
	align-items: center;
}

.title {
	width: 860px;
	height: 100px;
	text-align: center;

	h2 {
		font-size: 64px;
		line-height: 1.2;
		letter-spacing: 0.07rem;
		font-family: 'Forum', sans-serif;
		font-weight: 400;
		text-transform: uppercase;
	}
}

.carousel-wrapper {
	position: relative;
	width: 100%;
}

.carousel {
	margin-top: 70px;
	display: flex;
	justify-content: center;
	gap: 20px;
}

.book-card {
	width: 420px;
	height: 650px;
	border: 3px solid black;

	img {
		width: 200px;
		height: 301px;
		margin-top: 25px;
		margin: 25px auto 0px auto;
	}
}

.book-title {
	width: 370px;
	height: 75px;
	margin-top: 29px;
	margin-left: 25px;
	margin-right: 25px;
	padding-right: 4px;
	font-size: 24px;
	letter-spacing: 0.07rem;
	line-height: 1.5;
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
	text-align: center;
}

.book-genre {
	display: flex;
	margin: 0 auto;
	width: 223px;
	height: 100px;
	font-size: 18px;
	line-height: 1.5;
	letter-spacing: 0.07rem;
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
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
	width: 174px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	line-height: 1.5;
	letter-spacing: 0.07rem;
	font-family: 'rawline';
	font-weight: 400;
}

.buy-btn {
	width: 174px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	line-height: 1.5;
	letter-spacing: 0.07rem;
	font-family: 'Forum', sans-serif;
	font-weight: 400;
	text-transform: uppercase;
	border: 3px solid black;
	cursor: pointer;
}
</style>
