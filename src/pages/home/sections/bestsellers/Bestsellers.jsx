import ProductCardList from '@/entities/product/productCardList/productCardList'
import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import useBestsellerRecipesStore from '../../../../app/store/bestsellersRecipes/model/useBestsellerRecipesStore'
import styles from './Bestsellers.module.scss'

const Bestsellers = () => {
	const bestsellers = useBestsellerRecipesStore(state => state.bestseller)

	return (
		<section className={styles.bestsellers}>
			<Container>
				<Title className={styles.bestsellersTitle} variant='large'>
					Хиты продаж
				</Title>
				<ProductCardList cards={bestsellers} />
			</Container>
		</section>
	)
}

export default Bestsellers
