[file name]: Library.vue [file content begin]
<script setup>
import { ref } from 'vue'
import BookCard from './BookCard.vue'
import { books } from '../data/NewBooksData'

const genres = ['Категория', 'Классика', 'Приключения', 'Сказки']

const selectedGenre = ref('Все')
const filteredBooks = ref(books)

const filterBooks = genre => {
	selectedGenre.value = genre
	if (genre === 'Категория') {
		filteredBooks.value = books
	} else {
		filteredBooks.value = books.filter(book => book.genre === genre)
	}
}
</script>

<template>
	<div class="library">
		<div class="container">
			<div class="title">
				<h2>Библиотека</h2>
			</div>
			<div class="genre-filter">
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

			<TransitionGroup name="book-list" tag="div" class="books-container">
				<BookCard v-for="book in filteredBooks" :key="book.id" :book="book" />
			</TransitionGroup>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.library {
	width: 1440px;
	margin: 0 auto;
	background-color: white;
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

.genre-filter {
	display: flex;
	gap: 15px;
	margin-bottom: 30px;
	flex-wrap: wrap;
	justify-content: center;
}

.genre-btn {
	@include main_text;
	padding: 10px 20px;
	border: 3px solid black;
	background-color: white;
	cursor: pointer;
	transition:
		background-color 0.3s ease,
		color 0.3s ease;

	&:hover {
		background-color: #f0f0f0;
	}

	&.active {
		background-color: black;
		color: white;
	}
}

.books-container {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
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
</style>
