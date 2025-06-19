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
	margin: 140px auto 0;
	width: 100%;
	max-width: 1440px;
}

.container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 90%;
	max-width: 1300px;
	aspect-ratio: 1300/1180;
	margin: 0 auto;
}

.book-image,
.bust {
	background-size: cover;
	background-position: center;
}

.about-us,
.harmony {
	display: flex;
	justify-content: center;
	background-color: #1596c1;
	flex-direction: column;
	text-align: center;
	padding: 2rem;
}

.about-us {
	grid-column: 2 / 3;
	grid-row: 1 / 2;
}

.harmony {
	grid-column: 1 / 2;
	grid-row: 2 / 3;
}

.title {
	width: 100%;
	max-width: 650px;
	margin: 0 auto;
	margin-top: 3rem;

	h2 {
		@include title_1;
		color: #ffffff;
	}
}

.description {
	width: 100%;
	max-width: 420px;
	margin: 0 auto;
	p {
		@include main_text;
		color: #ffffff;
	}
}

@media (max-width: 768px) {
	.title {
		width: 100%;
		max-width: 350px;
		margin: 0 auto;
		margin-bottom: 30px;

		h2 {
			font-size: 48px;
		}
	}

	.description {
		width: 100%;
		max-width: 260px;
		margin: 0 auto;
		margin-top: 30px;
		p {
			height: 330px;
			font-size: 18px;
		}
	}
}

@media (max-width: 647px) {
	.about {
		margin-top: 20px;
	}

	.container {
		display: flex;
		flex-direction: column;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		aspect-ratio: auto;
	}

	.about-us {
		order: 1;
	}

	.book-image {
		order: 2;
	}

	.harmony {
		order: 3;
	}

	.bust {
		order: 4;
	}

	.book-image,
	.about-us,
	.harmony,
	.bust {
		width: 100%;
		max-width: 340px;
		height: 585px;
		margin: 0 auto;
	}

	.about-us,
	.harmony {
		grid-column: auto;
		grid-row: auto;
		padding: 1rem;
	}

	.title {
		margin-top: 1rem;
		margin-bottom: 1rem;

		h2 {
			font-size: 36px;
		}
	}

	.description {
		max-width: 250px;

		p {
			height: auto;
			font-size: 16px;
		}
	}

	.title {
		h2 {
			font-size: 30px;
		}
	}

	.description {
		p {
			font-size: 18px;
		}
	}
}
</style>
