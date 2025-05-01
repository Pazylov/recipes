import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useBestsellerRecipesStore = create(
	devtools(set => ({
		bestseller: [],

		setBestseller: products => set({ bestseller: products }),
	}))
)

export default useBestsellerRecipesStore
