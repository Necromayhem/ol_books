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
	width: 1440px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
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
</style>
