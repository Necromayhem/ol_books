<script setup>
import DropdownMenu from './components/DropdownMenu.vue'
import Library from './components/Library.vue'
import TopNav from './components/TopNav.vue'
import Catalog from './pages/Catalog.vue'
import Home from './pages/Home.vue'
</script>

<template>
	<RouterView v-slot="{ Component }">
		<Transition name="fade" mode="out-in">
			<component :is="Component" />
		</Transition>
	</RouterView>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
