<script setup></script>

<template>
	<section class="submit">
		<div class="container">
			<div class="container-wrapper">
				<div class="title">
					<h2>хотите знать о книгах всё?</h2>
				</div>
				<div class="subtitle">
					<p>Подпишитесь на нашу новостную рассылку</p>
				</div>
				<form class="form" @click.prevent="">
					<input class="input" type="email" />
					<button class="btn" type="submit">отправить</button>
				</form>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.submit {
	width: 100%;
	max-width: 1440px;
	height: 220px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 140px;
}

.container {
	width: 100%;
	max-width: 1300px;
	height: 220px;
	margin: 0 auto;
	margin-top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container-wrapper {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1080px;
	height: 220px;
}

.title {
	width: 640px;
	height: 50px;
	text-align: center;

	h2 {
		@include title_2;
	}
}

.subtitle {
	margin-top: 14px;
	width: 640px;
	height: 36px;
	text-align: center;

	p {
		@include main_text;
	}
}

.form {
	width: 100%;
	max-width: 1080px;
	margin-top: 60px;
	display: flex;
	gap: 20px;
}

.input {
	@include main_text;
	width: 100%;
	max-width: 750px;
	height: 60px;
	border: 3px solid black;
	text-align: center;
}

.btn {
	@include buy_btn;
	width: 100%;
	max-width: 310px;
	height: 60px;
	border: 3px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;

	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:active {
		background-color: #1596c1;
		color: black;
	}
}

@media (max-width: 1100px) {
	.form {
		justify-content: center;
	}

	.input {
		width: 400px;
		height: 50px;
	}

	.btn {
		width: 160px;
		height: 50px;
		font-size: 24px;
	}
}

@media (max-width: 786px) {
	.container-wrapper {
		width: 100%;
		height: 190px;
		max-width: 580px;
	}

	.title {
		width: 460px;

		h2 {
			font-size: 30px;
		}
	}

	.subtitle {
		margin-top: 20px;
		width: 460px;
		height: 50px;
	}

	p {
		font-size: 18px !important;
	}
}

@media (max-width: 595px) {
	.submit {
		margin-top: 70px;
	}

	.container-wrapper {
		width: 100%;
		height: 290px;
		max-width: 290px;
	}

	.form {
		margin-top: 40px;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.input {
		width: 290px;
		height: 50px;
	}

	.btn {
		width: 190px;
		height: 50px;
	}

	.title {
		width: 290px;
		height: 80px;
	}

	.subtitle {
		margin-top: 10px;
		width: 290px;
		height: 50px;
	}
}
</style>
