import { useEffect } from 'react'
import useCardProductsStore from '../model/useCardProductsStore'
import { CARD } from './card.data'

export const useInitCardProducts = () => {
	const setCard = useCardProductsStore(state => state.setCard)

	useEffect(() => setCard(CARD), [setCard])
}
