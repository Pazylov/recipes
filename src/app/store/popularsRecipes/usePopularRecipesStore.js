import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const usePopularRecipesStore = create(
	devtools(set => ({
		popular: [],

		setPopular: products => set({ popular: products }),
	}))
)

export default usePopularRecipesStore
