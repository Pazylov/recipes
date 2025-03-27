import { useHeaderStore } from '@/model/headerStore'

export const useToggleMenu = () => {
	const { isMenuOpen, toggleMenu } = useHeaderStore()
	return { isMenuOpen, toggleMenu }
}
