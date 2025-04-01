import React from 'react'
import { Link } from 'react-router-dom'

import FavoriteButton from '@/features/favorite/ui/favoriteButton/FavoriteButton'
import CardTag from '@/shared/ui/cardTag/CardTag'
import ClockIcon from '@/shared/ui/icon/clockIcon/ClockIcon'

import RatingStars from '@/features/rating/ratingStars/RatingStars'
import styles from './ProductCard.module.scss'
import ProductInfo from './productInfo/ProductInfo'

const ProductCard = ({ id }) => {
	return (
		<div className={styles.productCard}>
			<Link className={styles.img} to={`/recipes/${id}`}>
				<img src='/card/card-preview.jpg' alt='Card preview' />
			</Link>
			<FavoriteButton className={styles.btnFavorite} />
			<CardTag className={styles.tag} variant='popular'>
				Популярное
			</CardTag>
			<h3 className={styles.title}>
				Изысканные кольца кальмаров с острым айоли и салатом
			</h3>
			<div className={styles.ratingTime}>
				<RatingStars rating={4} />
				<p className={styles.cookingTime}>
					<ClockIcon size={16} />
					30 мин
				</p>
			</div>
			<ProductInfo
				className={styles.info}
				category='Закуска'
				cuisine='Азиатская'
				season='Зимнее блюдо'
			/>
		</div>
	)
}

export default ProductCard
