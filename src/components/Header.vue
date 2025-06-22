<script setup>
import TopNav from './TopNav.vue'

const props = defineProps({
	bgImage: {
		type: String,
	},
	bgHeight: {
		type: [String, Number],
	},
	bgSize: {
		type: String,
	},
})
</script>

<template>
	<header
		class="header"
		:style="{
			'background-image': `url(/images/header/${bgImage})`,
			height: `${bgHeight}px`,
			'background-size': bgSize,
		}"
	>
		<TopNav />
		<div class="container">
			<div class="description">
				<div class="subtitle">
					<slot name="text"></slot>
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
	width: 100%;
	max-width: 1440px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	z-index: 1;
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

@media (max-width: 1348px) {
	.container {
		padding-left: 34px !important;
	}

	.header {
		height: auto !important;
		min-height: 820px;
		background-size: cover;

		.description {
			padding-top: 0 !important;
			padding-bottom: 0 !important;
			width: 460px !important;
			height: 400px !important;
			margin-right: 100px !important;
		}

		.subtitle {
			font-size: 64px !important;
			line-height: 1.5 !important;
			width: 460px !important;
			height: 400px !important;
			margin-top: 0 !important;
		}
	}

	.more {
		margin: 0 !important;
		width: 100%;
		padding-bottom: 40px;
		display: flex;
		justify-content: flex-start;

		button {
			width: 220px !important;
			height: 50px !important;
			font-size: 24px !important;
			line-height: 1.5 !important;
		}
	}
}

@media (max-width: 840px) {
	.header {
		min-height: 820px;
		background-size: cover;
		background-size: cover !important;
		background-position: center right 42% !important;
		background-repeat: no-repeat !important;
		overflow: hidden;
	}

	.subtitle {
		font-size: 64px !important;
		line-height: 1.5 !important;
		width: 460px !important;
		height: 400px !important;
		white-space: pre-line;
		br {
			line-height: 0;
			&::before {
				content: ' ';
				white-space: pre;
			}
		}
	}

	.content-wrapper {
		flex-direction: column !important;
	}

	.description {
		width: 400px !important;
		height: 460px !important;
	}

	.more {
		width: 100% !important;
		margin-top: 0 !important;
		padding-bottom: 40px !important;
		display: flex;
		justify-content: flex-start;

		button {
			width: 100% !important;
			max-width: 220px;
			height: 50px;
			font-size: 24px !important;
			line-height: 1.5 !important;
		}
	}
}

@media (max-width: 710px) {
	.header {
		.subtitle {
			width: 265px !important;
			height: 290px !important;
			font-size: 40px !important;
			line-height: 1.5 !important;
		}

		.description {
			width: 265px !important;
			height: 290px !important;
		}
	}
}

@media (max-width: 590px) {
	.header {
		width: 100%;
		max-width: 590px;
	}

	.subtitle {
		font-size: 40px !important;
		width: 265px !important;
		height: 290px;
	}

	.description {
		width: 265px !important;
		height: 290px;
	}
}

@media (max-width: 320px) {
	.header {
		width: 100%;
		min-width: 320px;
		min-height: 590px !important;
		height: 590px !important;
		background-size: cover !important;
		background-position: center right 42% !important;
		background-repeat: no-repeat !important;
		overflow: hidden;
	}

	.description {
		margin-top: 0 !important;
		padding-top: 0 !important;
	}

	.container {
		padding-left: 15px !important;
	}
}
</style>
