import ProductCardList from '@/entities/product/productCardList/productCardList'
import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import usePopularRecipesStore from '../../../../app/store/popularsRecipes/usePopularRecipesStore'
import styles from './PopularRecipes.module.scss'

const PopularRecipes = () => {
	const popular = usePopularRecipesStore(state => state.popular)

	return (
		<section className={styles.popular}>
			<Container>
				<Title className={styles.popularTitle} variant='large'>
					Попробуйте наши лучшие рецепты!
				</Title>
				<ProductCardList cards={popular} />
			</Container>
		</section>
	)
}

export default PopularRecipes
