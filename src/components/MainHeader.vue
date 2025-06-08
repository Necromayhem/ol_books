<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<nav class="menu">
				<div class="title">
					<h1>
						olympians<br />
						books
					</h1>
				</div>
				<div class="arrow">
					<img
						src="/src/assets/images/header/arrow-down.svg"
						alt="arrow-down"
					/>
				</div>
				<div class="shopping">
					<img
						src="/src/assets/images/header/shopping-cart.svg"
						alt="shopping-cart"
					/>
				</div>
			</nav>
			<div class="description">
				<div class="subtitle">
					книги, которые<br />
					вознесут вас на<br />
					олимп
				</div>
			</div>
			<div class="more">
				<button>узнать больше</button>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use '/src/assets/style/main.scss' as *;

.header {
	height: 940px;
	width: 1440px;
	max-width: 100%;
	background-image: url(/src/assets/images/header/Hero_background.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	color: white;

	.container {
		height: 100%;
		max-width: 1300px;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding-left: 70px;

		.menu {
			display: flex;
			width: 1300px;
			justify-content: space-between;
			align-items: center;
			height: 100px;

			.title {
				@include title;
			}

			.arrow {
				width: 64px;
				height: 18px;
				margin-right: 140px;
			}

			.shopping {
				width: 55px;
				height: 64px;
			}
		}

		.description {
			display: flex;
			flex-direction: column;
			justify-content: start;
			height: 460px;
			width: 860px;
			margin-top: 20px;
			padding-top: 77px;
			padding-bottom: 77px;

			.subtitle {
				@include title_0;
			}
		}

		.more {
			margin-top: 20px;

			button {
				margin-top: 20px;
				width: 420px;
				height: 75px;
				background: transparent;
				color: white;
				border: 2px solid white;
				transition: all 0.2s;
				@include title_2;

				&:hover {
					opacity: 0.9;
				}

				&:active {
					background: white;
					color: black;
				}
			}
		}
	}
}
</style>
