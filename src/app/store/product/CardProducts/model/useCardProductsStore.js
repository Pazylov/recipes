import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useCardProductsStore = create(
	devtools(set => ({
		card: [],

		setCard: products => set({ card: products }),
	}))
)

export default useCardProductsStore
