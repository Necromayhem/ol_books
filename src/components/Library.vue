<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import BookCard from './BookCard.vue'
import { all_books } from '../data/AllBooksData'
import { debounce } from 'lodash'

const genres = ['Категория', 'Классика', 'Приключения', 'Сказки']
const selectedGenre = ref('Категория')
const filteredBooks = ref(all_books)
const currentPage = ref(1)
const booksPerPage = ref(9)

const calculateBooksPerPage = width => {
	if (width <= 600) return 3
	if (width <= 767) return 3
	if (width < 1300) return 4
	return 9
}

const updateBooksPerPage = () => {
	const viewportWidth = document.documentElement.clientWidth
	const newValue = calculateBooksPerPage(viewportWidth)
	booksPerPage.value = newValue
}

const debouncedUpdate = debounce(updateBooksPerPage, 150, {
	leading: true,
	trailing: true,
})

const forceUpdate = () => {
	updateBooksPerPage()
}

onMounted(() => {
	forceUpdate()
	window.addEventListener('resize', debouncedUpdate)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', debouncedUpdate)
	debouncedUpdate.cancel()
})

const filterBooks = genre => {
	selectedGenre.value = genre
	filteredBooks.value =
		genre === 'Категория'
			? all_books
			: all_books.filter(book => book.genre === genre)
	currentPage.value = 1
}

const paginatedBooks = computed(() => {
	const start = (currentPage.value - 1) * booksPerPage.value
	const end = start + booksPerPage.value
	return filteredBooks.value.slice(start, end)
})

const totalPages = computed(() =>
	Math.ceil(filteredBooks.value.length / booksPerPage.value)
)

const previousPage = () => currentPage.value > 1 && currentPage.value--
const nextPage = () =>
	currentPage.value < totalPages.value && currentPage.value++

watch(booksPerPage, (newVal, oldVal) => {
	if (currentPage.value > Math.ceil(filteredBooks.value.length / newVal)) {
		currentPage.value = 1
	}
})
</script>

<template>
	<div class="library">
		<div class="container">
			<div class="title">
				<h2>Библиотека</h2>
				<div class="categories">
					<button
						v-for="genre in genres"
						:key="genre"
						@click="filterBooks(genre)"
						:class="{ active: selectedGenre === genre }"
						class="genre-btn"
					>
						{{ genre }}
					</button>
				</div>
			</div>

			<TransitionGroup name="book-list" tag="div" class="books-container">
				<BookCard v-for="book in paginatedBooks" :key="book.id" :book="book" />
			</TransitionGroup>

			<div class="pagination">
				<button
					@click="previousPage"
					:disabled="currentPage === 1"
					class="pagination-btn"
				>
					〈
				</button>
				<span class="page-indicator">
					{{ currentPage }}/{{ totalPages || 1 }}
				</span>
				<button
					@click="nextPage"
					:disabled="currentPage === totalPages"
					class="pagination-btn"
				>
					〉
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.library {
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	background-color: white;
	margin-top: 140px;
}

.container {
	height: 100%;
	max-width: 1300px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
}

.title {
	width: 100%;
	max-width: 1300px;
	height: 100px;
	text-align: center;

	h2 {
		@include title_1;
	}
}

.categories {
	display: flex;
	width: 100%;
	max-width: 1300px;
	margin-top: 45px;
	gap: 20px;
	justify-content: center;
	align-items: center;
}

.genre-btn {
	@include main_text;
	width: 100%;
	max-width: 310px;
	height: 65px;
	cursor: pointer;
	position: relative;
	background: none;
	border: none;
	transition: all 0.3s ease;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -5px;
		width: 0;
		height: 2px;
		background-color: black;
		transition:
			width 0.3s ease,
			background-color 0.3s ease;
	}

	&:hover::after {
		width: 100%;
	}

	&:active {
		color: #1596c1;
	}

	&:active::after {
		width: 100%;
		background-color: #1596c1;
	}

	&.active:not(:first-child)::after {
		width: 100%;
	}

	&:first-child.active::after {
		width: 0;
	}
}

.books-container {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	margin-top: 175px;
}

.book-list-move,
.book-list-enter-active,
.book-list-leave-active {
	transition: all 0.5s ease;
}

.book-list-enter-from,
.book-list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.book-list-leave-active {
	position: absolute;
}

.pagination {
	display: flex;
	align-items: center;
	gap: 30px;
	margin-top: 60px;
}

.pagination-btn {
	@include main_text;
	background: none;
	border: none;
	font-size: 28px;
	cursor: pointer;
	padding: 10px 20px;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
}

.page-indicator {
	@include main_text;
	font-size: 24px;
}

@media (max-width: 1000px) {
	.library {
		padding-right: 34px;
		padding-left: 34px;
	}
}

@media (max-width: 930px) {
	.books-container {
		margin-top: 115px;
	}

	:deep(.book-card) {
		width: 340px;
		height: 585px;
	}
}

@media (max-width: 860px) {
	.library {
		margin-top: 90px;
	}

	.title {
		h2 {
			font-size: 48px;
		}
	}

	.genre-btn:first-child {
		font-size: 24px;
		text-transform: uppercase;
	}

	.genre-btn:not(:first-child) {
		font-size: 18px;
	}
}

@media (max-width: 600px) {
	.library {
		margin-top: 40px;
	}

	.categories {
		flex-direction: column;
		width: 240px;
		height: 200px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.title h2 {
		font-size: 30px;
	}

	.books-container {
		margin-top: 190px;
		gap: 10px;
	}

	:deep(.book-card) {
		width: 290px;
		height: 500px;

		img {
			width: 132px;
			height: 200px;
			margin-top: 25px;
			margin: 25px auto 0px auto;
		}

		.book-title {
			font-size: 18px;
			width: 262px;
			height: 70px;
		}

		.book-genre {
			font-size: 14px;
			width: 181px;
			height: 50px;
		}

		.book-price {
			font-size: 22px;
			width: 115px;
			height: 50px;
		}

		.buy-btn {
			width: 115px;
			height: 50px;
			font-size: 24px;
			margin-right: 20px;
		}

		.add-to-cart {
			width: 290px !important;
		}
	}
}
</style>
