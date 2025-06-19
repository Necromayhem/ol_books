<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { books } from '../data/NewBooksData'
import BookCard from './BookCard.vue'

const currentSlide = ref(0)
const isMobile = ref(false)
const totalSlides = computed(() =>
	isMobile.value ? books.length : Math.ceil(books.length / 3)
)
const carousel = ref(null)
const isTransitioning = ref(false)

const checkMobile = () => {
	isMobile.value = window.innerWidth < 1370
}

onMounted(() => {
	checkMobile()
	window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
	window.removeEventListener('resize', checkMobile)
})

const goToSlide = index => {
	if (isTransitioning.value || index === currentSlide.value) return
	isTransitioning.value = true
	currentSlide.value = index
	setTimeout(() => {
		isTransitioning.value = false
	}, 500)
}

const nextSlide = () => {
	if (isTransitioning.value) return
	isTransitioning.value = true
	currentSlide.value = (currentSlide.value + 1) % totalSlides.value
	setTimeout(() => {
		isTransitioning.value = false
	}, 500)
}

const prevSlide = () => {
	if (isTransitioning.value) return
	isTransitioning.value = true
	currentSlide.value =
		(currentSlide.value - 1 + totalSlides.value) % totalSlides.value
	setTimeout(() => {
		isTransitioning.value = false
	}, 500)
}

const carouselTransform = computed(() => {
	if (isMobile.value) {
		const bookWidth = window.innerWidth < 450 ? 290 : 340
		return `translateX(-${currentSlide.value * bookWidth}px)`
	}
	return `translateX(-${currentSlide.value * (420 * 3 + 20 * 2)}px)`
})
</script>

<template>
	<section class="new-books">
		<div class="container">
			<div class="title">
				<h2>Горячие новинки</h2>
			</div>
			<div class="carousel-wrapper" ref="carousel">
				<div
					class="carousel"
					:class="{ 'transition-effect': isTransitioning }"
					:style="{ transform: carouselTransform }"
				>
					<BookCard v-for="book in books" :key="book.id" :book="book" />
				</div>
			</div>
			<div class="carousel-controls">
				<button
					class="arrow-prev"
					@click="prevSlide"
					:disabled="isTransitioning"
				>
					<img src="/images/new-books/arrow-prev.svg" alt="prev" />
				</button>
				<button
					class="dot"
					v-for="index in totalSlides"
					:key="index"
					@click="goToSlide(index - 1)"
					:disabled="isTransitioning"
				>
					<img
						:src="`/images/new-books/${currentSlide === index - 1 ? 'dot-active' : 'dot'}.svg`"
						:alt="`dot-${index}`"
					/>
				</button>
				<button
					class="arrow-next"
					@click="nextSlide"
					:disabled="isTransitioning"
				>
					<img src="/images/new-books/arrow-next.svg" alt="next" />
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
	padding: 0 20px;
	padding-left: 70px;
	align-items: center;
}

.title {
	width: 860px;
	height: 100px;
	text-align: center;

	h2 {
		@include title_1;
	}
}

.carousel-wrapper {
	position: relative;
	width: calc(420px * 3 + 20px * 2);
	overflow: hidden;
	margin: 0 auto;
}

.carousel {
	margin-top: 70px;
	display: flex;
	gap: 20px;
	transition: transform 0.5s ease;
}

.carousel.transition-effect {
	transition: transform 0.5s ease;
}

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

.carousel-controls {
	width: 385px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	margin-top: auto;
	align-items: center;
}

.arrow-prev,
.arrow-next {
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
	transition: opacity 0.3s ease;
}

.arrow-prev img {
	width: 14px;
	height: 50px;
}

.arrow-next img {
	width: 14px;
	height: 50px;
}

.dot {
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
	transition: transform 0.3s ease;
}

.dot img {
	width: 30px;
	height: 30px;
}

@media (max-width: 1370px) {
	.new-books {
		height: auto;
		padding-bottom: 40px;
	}

	.title {
		width: 460px;
		height: 50px;
		h2 {
			font-size: 48px;
		}
	}

	.carousel-wrapper {
		width: 340px !important;
		overflow: hidden;
		margin: 0 auto;
		position: relative;
	}

	.carousel {
		gap: 0 !important;
		margin-top: 40px !important;
		width: max-content;
	}

	.book-card {
		width: 340px !important;
		height: 585px !important;
		margin: 0 !important;
		border: 3px solid black;

		img {
			width: 200px !important;
			height: 301px !important;
			margin: 25px auto 0 !important;
		}
	}

	.container {
		position: relative;
		padding-left: 20px;
		padding-right: 20px;
	}

	.carousel-controls {
		position: absolute;
		bottom: 0;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 500px;
		margin-top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;

		.dot {
			display: none;
		}
	}

	.arrow-prev {
		position: absolute;
		left: 0;
	}

	.arrow-next {
		position: absolute;
		right: 0;
	}

	.arrow-prev img {
		width: 50px;
		height: 100px;
	}

	.arrow-next img {
		width: 50px;
		height: 100px;
	}
}

@media (max-width: 450px) {
	.book-card {
		width: 290px !important;
		height: 500px !important;
	}

	.carousel-wrapper {
		width: 290px !important;
	}

	.title {
		width: 290px;
		height: 50px;
		h2 {
			font-size: 30px;
		}
	}

	.carousel-controls {
		margin-top: 40px !important;
		position: static;
		transform: none;
		width: 100%;
		max-width: 161px;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		padding: 0;
		height: auto;

		.dot {
			display: none;
		}

		.arrow-prev,
		.arrow-next {
			position: static;
		}
	}

	.arrow-prev img,
	.arrow-next img {
		width: 14px;
		height: 50px;
	}
}

@media (max-width: 320px) {
	.new-books {
		margin-top: 70px !important;
	}

	.container {
		width: 290px;
		max-width: 100%;
		padding-left: 0;
		padding-right: 0;
		margin: 0 auto;
	}
}
</style>
