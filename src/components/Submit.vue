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
				<form class="form">
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
	width: 1440px;
	height: 220px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 140px;
}

.container {
	width: 1300px;
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
	width: 1080px;
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
	margin-top: 60px;
	display: flex;
	gap: 20px;
}

.input {
	width: 750px;
	height: 60px;
	border: 3px solid black;
}

.btn {
	@include buy_btn;
	width: 310px;
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
</style>
