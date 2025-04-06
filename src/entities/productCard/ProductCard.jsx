import React from 'react'
import { Link } from 'react-router-dom'

import FavoriteButton from '@/features/favorite/ui/favoriteButton/FavoriteButton'
import CardTag from '@/shared/ui/cardTag/CardTag'
import ClockIcon from '@/shared/ui/icon/clockIcon/ClockIcon'

import CardButton from '@/features/cardButton/CardButton'
import RatingStars from '@/features/rating/ratingStars/RatingStars'
import clsx from 'clsx'
import Price from './price/Price'
import styles from './ProductCard.module.scss'
import ProductInfo from './productInfo/ProductInfo'

const ProductCard = ({
	id,
	title,
	rating,
	img,
	tag,
	cookingTime,
	productInfo,
	originalPrice,
	discountPrice,
	className,
}) => {
	return (
		<div className={clsx(styles.productCard, className)}>
			<Link to={`/recipes/${id}`}>
				<img className={styles.img} src={img} alt='Card preview' />
			</Link>
			<FavoriteButton className={styles.btnFavorite} productId={id} />
			<CardTag className={styles.tag} tag={tag}>
				{tag}
			</CardTag>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.ratingTime}>
				<RatingStars rating={rating} />
				<p className={styles.cookingTime}>
					<ClockIcon size={16} />
					{cookingTime} мин
				</p>
			</div>
			<ProductInfo className={styles.info} {...productInfo} />
			<Price originalPrice={originalPrice} discountPrice={discountPrice} />
			<CardButton
				productId={id}
				originalPrice={originalPrice}
				discountPrice={discountPrice}
			/>
		</div>
	)
}

export default ProductCard
