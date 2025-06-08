<script setup>
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import HotNewBooks from './components/HotNewBooks.vue'
import MainHeader from './components/MainHeader.vue'
import Submit from './components/Submit.vue'
</script>

<template>
	<div class="container">
		<MainHeader />
		<HotNewBooks />
		<About />
		<Submit />
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
