import { useFavoriteStore } from '@/app/store/stores'
import FavoriteIcon from '@/shared/ui/icon/favoriteIcon/FavoriteIcon'
import clsx from 'clsx'
import React from 'react'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ productId, className }) => {
	const { favorites, toggleFavorite } = useFavoriteStore()

	const isFavorite = favorites.includes(productId)

	return (
		<button
			className={clsx(styles.favoriteBtn, className)}
			onClick={() => toggleFavorite(1)}
		>
			{isFavorite ? (
				<FavoriteIcon variant='add-card' />
			) : (
				<FavoriteIcon variant='remove-card' />
			)}
		</button>
	)
}

export default FavoriteButton
