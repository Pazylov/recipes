import clsx from 'clsx'
import React from 'react'
import styles from './ProductInfo.module.scss'

const ProductInfo = ({ category, cuisine, season, className }) => {
	return (
		<ul className={clsx(styles.productInfo, className)}>
			<li className={styles.item}>
				<h5 className={styles.title}>Категория:</h5>
				<p className={styles.text}>{category}</p>
			</li>
			<li className={styles.item}>
				<h5 className={styles.title}>Кухня:</h5>
				<p className={styles.text}>{cuisine}</p>
			</li>
			<li className={styles.item}>
				<h5 className={styles.title}>Сезонность:</h5>
				<p className={styles.text}>{season}</p>
			</li>
		</ul>
	)
}

export default ProductInfo
