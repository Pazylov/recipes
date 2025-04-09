import { CARD } from '@/entities/product/lib/card.data'
import ProductCardList from '@/entities/product/productCardList/productCardList'
import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import styles from './Bestsellers.module.scss'

const Bestsellers = () => {
	return (
		<section className={styles.bestsellers}>
			<Container>
				<Title className={styles.bestsellersTitle} variant='large'>
					Хиты продаж
				</Title>
				<ProductCardList cards={CARD} />
			</Container>
		</section>
	)
}

export default Bestsellers
