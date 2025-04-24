import ProductCardList from '@/entities/product/productCardList/productCardList'
import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import useCardProductsStore from '../../../../app/store/product/CardProducts/model/useCardProductsStore'
import styles from './Bestsellers.module.scss'

const Bestsellers = () => {
	const cardItems = useCardProductsStore(state => state.card)
	return (
		<section className={styles.bestsellers}>
			<Container>
				<Title className={styles.bestsellersTitle} variant='large'>
					Хиты продаж
				</Title>
				<ProductCardList cards={cardItems} />
			</Container>
		</section>
	)
}

export default Bestsellers
