import clsx from 'clsx'
import { Star } from 'lucide-react'
import React from 'react'
import styles from './StarIcon.module.scss'

const StarIcon = ({ variant = 'active' }) => {
	return <Star className={clsx(styles.icon, styles[variant])} />
}

export default StarIcon
