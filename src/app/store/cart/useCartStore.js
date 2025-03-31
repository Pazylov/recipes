import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useCartStore = create(
	devtools(
		persist(
			(set, get) => ({
				cart: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

				addToCart: id =>
					set(state => ({
						cart: [...new Set({ ...state.cart, id })],
					})),

				removeFromCart: id =>
					set(state => ({
						cart: state.cart.filter(cartId => cartId !== id),
					})),

				toggleCart: id => {
					set(state => ({
						cart: state.cart.includes(id)
							? state.cart.filter(cartId => cartId !== id)
							: [...new Set([...state.cart, id])],
					}))
				},

				clear: () => set({ cart: [] }),
			}),
			{ name: 'cart-storage' }
		)
	)
)

export default useCartStore
