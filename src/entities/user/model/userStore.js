import { create } from 'zustand'

export const useUserStore = create(set => ({
	avatar: '',
	isAuth: false,
	login: () => set({ isAuth: true }),
	logout: () => set({ isAuth: false }),
}))
