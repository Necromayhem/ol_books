<script setup>
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import HotNewBooks from '@/components/HotNewBooks.vue'
import Submit from '@/components/Submit.vue'
</script>

<template>
	<div class="container">
		<Header
			bg-image="Hero_background.png"
			bg-height="940"
			bg-size="1440px 940px"
		>
			<template v-slot:text> книги, которые вознесут вас на олимп </template>
		</Header>
		<HotNewBooks />
		<About />
		<Submit />
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	max-width: 100%;
	width: 1440px;
	margin: 0 auto;
}
</style>
