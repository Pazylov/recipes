import ProductCard from '../productCard/ProductCard'
import styles from './productCardList.module.scss'

const ProductCardList = ({ cards }) => {
	return (
		<div className={styles.productCardList}>
			{cards.map(product => (
				<ProductCard className={styles.card} key={product.id} {...product} />
			))}
		</div>
	)
}

export default ProductCardList
