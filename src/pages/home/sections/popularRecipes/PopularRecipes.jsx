import ProductCardList from '@/entities/product/productCardList/productCardList'
import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import useCardProductsStore from '../../../../app/store/product/CardProducts/model/useCardProductsStore'
import styles from './PopularRecipes.module.scss'

const PopularRecipes = () => {
	const cardItems = useCardProductsStore(state => state.card)
	return (
		<section className={styles.popular}>
			<Container>
				<Title className={styles.popularTitle} variant='large'>
					Попробуйте наши лучшие рецепты!
				</Title>
				<ProductCardList cards={cardItems} />
			</Container>
		</section>
	)
}

export default PopularRecipes
