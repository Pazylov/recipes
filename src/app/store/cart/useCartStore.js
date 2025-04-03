import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useCartStore = create(
	devtools(
		persist(
			(set, get) => ({
				cart: [],

				addToCart: id =>
					set(state => ({
						cart: [...state.cart, id],
					})),

				removeFromCart: id =>
					set(state => ({
						cart: state.cart.filter(cartId => cartId !== id),
					})),

				toggleCart: id => {
					const { cart } = get()
					set({
						cart: cart.includes(id)
							? cart.filter(favId => favId !== id)
							: [...cart, id],
					})
				},

				clear: () => set({ cart: [] }),
			}),
			{ name: 'cart-storage' }
		)
	)
)

export default useCartStore
