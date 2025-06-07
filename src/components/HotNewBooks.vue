<script setup>
import { ref, computed } from 'vue'

const books = [
	{
		id: 1,
		title: 'Двадцать тысяч лье под водой',
		author: 'Ж. Верн',
		genre: 'Приключения',
		price: 168,
		image: '/images/book1.jpg',
	},
	{
		id: 2,
		title: 'Мастер и Маргарита',
		author: 'М. Булгаков',
		genre: 'Классика',
		price: 210,
		image: '/images/book2.jpg',
	},
	{
		id: 3,
		title: '1984',
		author: 'Дж. Оруэлл',
		genre: 'Антиутопия',
		price: 195,
		image: '/images/book3.jpg',
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
						<img src="" alt="book.title" />
						<h3 class="book-title">{{ book.author }}, {{ book.title }}</h3>
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

	img {
		width: 200px;
		height: 301px;
		margin-top: 25px;
	}
}

.book-title {
	margin-top: 29px;
	font-size: 24px;
	letter-spacing: 0.07rem;
	line-height: 36px;
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
}
</style>
