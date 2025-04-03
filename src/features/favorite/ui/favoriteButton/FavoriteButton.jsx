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
			onClick={() => toggleFavorite(productId)}
		>
			{isFavorite ? (
				<FavoriteIcon variant='add' />
			) : (
				<FavoriteIcon variant='remove' />
			)}
		</button>
	)
}

export default FavoriteButton
