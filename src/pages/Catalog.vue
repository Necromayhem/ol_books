<script setup>
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Library from '@/components/Library.vue'
</script>

<template>
	<div class="container">
		<Header bg-image="woman.png" bg-height="820" bg-size="1440px 820px">
			<template v-slot:text>
				Собрание<br />
				древних знаний
			</template>
		</Header>
		<div class="library-wrapper">
			<Library />
		</div>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	width: 1440px;
	max-width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.header {
	flex-shrink: 0;
}

.library-wrapper {
	flex: 1;
}

.footer {
	flex-shrink: 0;
}
</style>
