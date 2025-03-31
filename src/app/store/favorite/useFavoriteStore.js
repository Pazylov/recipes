import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useFavoriteStore = create(
	devtools(
		persist(
			(set, get) => ({
				favorites: [],

				addToFavorite: id =>
					set(state => ({
						favorites: [...new Set([...state.favorites, id])],
					})),

				removeFromFavorite: id =>
					set(state => ({
						favorites: state.favorites.filter(fanId => fanId !== id),
					})),

				toggleFavorite: id => {
					set(state => ({
						favorites: state.favorites.includes(id)
							? state.favorites.filter(favId => favId !== id)
							: [...new Set({ ...state.favorites, id })],
					}))
				},

				clearFavorites: () => set({ favorites: [] }),
			}),
			{ name: 'favorite-storage' }
		)
	)
)

export default useFavoriteStore
