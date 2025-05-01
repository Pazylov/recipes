import { useEffect } from 'react'
import useBestsellerRecipesStore from '../../../bestsellersRecipes/model/useBestsellerRecipesStore'
import usePopularRecipesStore from '../../../popularsRecipes/usePopularRecipesStore'
import useCardProductsStore from '../model/useCardProductsStore'
import { CARD } from './card.data'

export const useInitCardProducts = () => {
	const setCard = useCardProductsStore(state => state.setCard)
	const setBestseller = useBestsellerRecipesStore(state => state.setBestseller)
	const setPopular = usePopularRecipesStore(state => state.setPopular)

	useEffect(() => {
		setCard(CARD)

		const top4 = CARD.slice(0, 4)
		setBestseller(top4)
		setPopular(top4)
	}, [setCard, setBestseller, setPopular])
}
