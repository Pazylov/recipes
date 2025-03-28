import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useFavoriteStore = create(
	devtools(
		persist(
			(set, get) => ({
				items: [],

				addToFavorite: product =>
					set(state => ({
						items: [...state.items, product],
					})),

				removeFromFavorite: productId =>
					set(state => ({
						items: state.items.filter(item => item.id !== productId),
					})),

				clear: () => set({ items: [] }),
			}),
			{ name: 'favorite-storage', getStorage: () => localStorage }
		)
	)
)

export default useFavoriteStore
