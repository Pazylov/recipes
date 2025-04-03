import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useFavoriteStore = create(
	devtools(
		persist(
			(set, get) => ({
				favorites: [],

				addToFavorite: id =>
					set(state => ({
						favorites: [...state.favorites, id],
					})),

				removeFromFavorite: id =>
					set(state => ({
						favorites: state.favorites.filter(favId => favId !== id),
					})),

				toggleFavorite: id => {
					const { favorites } = get()
					set({
						favorites: favorites.includes(id)
							? favorites.filter(favId => favId !== id)
							: [...favorites, id],
					})
				},

				clearFavorites: () => set({ favorites: [] }),
			}),
			{ name: 'favorite-storage' }
		)
	)
)

export default useFavoriteStore
