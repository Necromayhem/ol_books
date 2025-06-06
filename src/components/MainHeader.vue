<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<nav class="menu">
				<div class="title">
					<h1>
						OLYMPIANS<br />
						BOOKS
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
					КНИГИ, КОТОРЫЕ<br />
					ВОЗНЕСУТ ВАС НА<br />
					ОЛИМП
				</div>
			</div>
			<div class="more">
				<button>УЗНАТЬ БОЛЬШЕ</button>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@use '/src/assets/style/main.scss' as *;

.header {
	height: 940px;
	width: 1440px;
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
		display: flex;
		flex-direction: column;
		margin: 0;
		padding-left: 70px;
		padding-right: 74px;

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100px;

			.title {
				font-family: 'Archeologicaps', sans-serif;
				font-weight: 100;
				font-size: 24px;
				letter-spacing: 0.1em;
				text-transform: uppercase;
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
				font-family: 'Forum', sans-serif;
				font-size: 80px;
				line-height: 120px;
				letter-spacing: 0.07em;
			}
		}

		.more {
			margin-top: 20px;

			button {
				margin-top: 20px;
				width: 420px;
				height: 75px;
				font-family: 'Forum', sans-serif;
				font-size: 42px;
				line-height: 1.2;
				letter-spacing: 0.07em;
				background: transparent;
				color: white;
				border: 2px solid white;
				transition: all 0.2s;

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
