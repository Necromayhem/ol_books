<script setup>
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
	<div class="container">
		<Header bg-image="woman.png" bg-height="820" bg-size="1440px 820px">
			>
			<template v-slot:text>
				Собрание<br />
				древних знаний
			</template>
		</Header>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	width: 1440px;
	margin: 0 auto;
}
</style>
