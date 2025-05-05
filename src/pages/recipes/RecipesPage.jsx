import React from 'react'
import useCardProductsStore from '../../app/store/product/CardProducts/model/useCardProductsStore'
import ProductCard from '../../entities/product/productCard/ProductCard'
import SearchInputFilter from '../../features/searchInputFilter/SearchInputFilter'
import Container from '../../shared/ui/container/Container'
import Sidebar from '../../widgets/sidebar/ui/Sidebar'
import styles from './RecipesPage.module.scss'

const RecipesPage = () => {
	const products = useCardProductsStore(state => state.card)

	return (
		<Container>
			<div className={styles.wrapper}>
				<Sidebar className={styles.sidebar} />
				<div className={styles.content}>
					<SearchInputFilter />
					<div className={styles.wrapperCards}>
						{products.map(item => (
							<ProductCard key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}

export default RecipesPage
