<script setup>
import { ref, computed } from 'vue'
import BookCard from './BookCard.vue'
import { all_books } from '../data/AllBooksData'

const genres = ['Категория', 'Классика', 'Приключения', 'Сказки']

const selectedGenre = ref('Категория')
const filteredBooks = ref(all_books)
const currentPage = ref(1)

const filterBooks = genre => {
	selectedGenre.value = genre
	if (genre === 'Категория') {
		filteredBooks.value = all_books
	} else {
		filteredBooks.value = all_books.filter(book => book.genre === genre)
	}
	currentPage.value = 1
}

const paginatedBooks = computed(() => {
	const start = (currentPage.value - 1) * 9
	const end = start + 9
	return filteredBooks.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredBooks.value.length / 9))

const previousPage = () => {
	if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
	if (currentPage.value < totalPages.value) currentPage.value++
}
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
	width: 1440px;
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
	width: 860px;
	height: 100px;
	text-align: center;

	h2 {
		@include title_1;
	}
}

.categories {
	margin-top: 45px;
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: center;
}

.genre-btn {
	@include main_text;
	width: 310px;
	height: 65px;
	cursor: pointer;
	flex-shrink: 0;
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
</style>
