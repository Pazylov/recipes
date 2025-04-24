import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useCardProductsStore = create(
	devtools(set => ({
		card: [],

		setCard: product => set({ card: product }),
	}))
)

export default useCardProductsStore
