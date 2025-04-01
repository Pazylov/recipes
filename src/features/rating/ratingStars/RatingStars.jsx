import React from 'react'

import StarIcon from '@/shared/ui/icon/starIcon/starIcon'
import styles from './RatingStars.module.scss'

const RatingStars = ({ rating }) => {
	const stars = []

	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<StarIcon key={i} variant='active' />)
		} else {
			stars.push(<StarIcon key={i} variant='disable' />)
		}
	}

	return <div className={styles.rating}>{stars}</div>
}

export default RatingStars
