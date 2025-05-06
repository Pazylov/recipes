import { useFavoriteStore } from '@/app/store/stores'
import FavoriteIcon from '@/shared/ui/icon/favoriteIcon/FavoriteIcon'
import clsx from 'clsx'
import { motion } from 'motion/react'
import React from 'react'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ productId, className }) => {
	const { favorites, toggleFavorite } = useFavoriteStore()
	const isFavorite = favorites.includes(productId)

	return (
		<>
			<motion.button
				className={clsx(styles.favoriteBtn, className)}
				onClick={() => toggleFavorite(productId)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			>
				<FavoriteIcon variant={isFavorite ? 'add' : 'remove'} />
			</motion.button>
		</>
	)
}

export default FavoriteButton
