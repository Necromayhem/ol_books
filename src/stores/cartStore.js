import { remove } from 'lodash'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('store', {
	state: () => ({
		items: [],
	}),

	getters: {
		totalPrice: state =>
			state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),

		itemCount: state =>
			state.items.reduce((count, item) => count + item.quantity, 0),
	},

	actions: {
		addItem(product) {
			const existingItem = this.items.find(item => item.id === product.id)
			if (existingItem) {
				existingItem.quantity += 1
			} else {
				this.items.push({ ...product, quantity: 1 })
			}
		},

		deleteItem(productId) {
			const existingItem = this.items.find(item => item.id === productId)
			if (existingItem) {
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1
				} else {
					this.removeItem(productId)
				}
			}
		},

		removeItem(productId) {
			this.items = this.items.filter(item => item.id !== productId)
		},

		clearCart() {
			this.items = []
		},
	},
})
