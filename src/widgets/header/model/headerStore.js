import { create } from 'zustand'

export const useHeaderStore = create(set => ({
	isMenuOpen: false,
	toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
}))
