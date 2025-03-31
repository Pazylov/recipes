import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useCartStore = create(
	devtools(
		persist(
			(set, get) => ({
				items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

				addToCart: product =>
					set(state => ({
						items: [...state.items, product],
					})),

				removeFromCart: productId =>
					set(state => ({
						items: state.items.filter(item => item.id !== productId),
					})),

				clear: () => set({ items: [] }),
			}),
			{ name: 'cart-storage', getStorage: () => localStorage }
		)
	)
)

export default useCartStore
