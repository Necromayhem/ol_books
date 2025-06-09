<script setup></script>

<template>
	<section class="about">
		<div class="container">
			<div
				class="book-image"
				:style="{
					'background-image': `url(/images/about/book.jpg)`,
				}"
			></div>
			<div class="about-us">
				<div class="title">
					<h2>о нас</h2>
				</div>
				<div class="description">
					<p>
						Книжное наследие от мыслителей Древней Греции и до людей
						современности. Это не просто магазин, а настоящий клуб любителей
						книги, который объединяет в своем культурном пространстве людей
						самых разных интересов.
					</p>
				</div>
			</div>
			<div class="harmony">
				<div class="title">
					<h2>гармония</h2>
				</div>
				<div class="description">
					<p>
						Наш проект «Гармония» объединяет читателей и авторов в реальности и
						в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из
						наших регулярных рубрик вы узнаете много нового о книгах и
						писателях.
					</p>
				</div>
			</div>
			<div
				class="bust"
				:style="{
					'background-image': `url(/images/about/bust.jpg)`,
				}"
			></div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.about {
	margin-top: 140px;
	margin-left: auto;
	margin-right: auto;
	height: 1180px;
	width: 1440px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
}

.container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 1300px;
	height: 1180px;
	margin: 0 auto;
}

.book-image {
	grid-column: 1 / 2;
	grid-row: 1 / 2;
}

.about-us {
	display: flex;
	justify-content: center;
	grid-column: 2 / 3;
	grid-row: 1 / 2;
	background-color: #1596c1;
	flex-direction: column;
	text-align: center;
}

.harmony {
	display: flex;
	justify-content: center;
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	background-color: #1596c1;
	flex-direction: column;
	text-align: center;
}

.title {
	width: 650px;
	height: 120px;
	margin: 0 auto;
	margin-top: 50px;

	h2 {
		@include title_1;
		color: #ffffff;
	}
}

.description {
	width: 420px;
	height: 360px;
	margin: 0 auto;
	p {
		@include main_text;
		color: #ffffff;
	}
}

.bust {
	grid-column: 2 / 3;
	grid-row: 2 / 3;
}
</style>
