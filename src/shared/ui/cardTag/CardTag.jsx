import clsx from 'clsx'
import React from 'react'
import styles from './CardTag.module.scss'

const CardTag = ({ children, variant = 'popular', className }) => {
	return (
		<div className={clsx(styles.cardTag, styles[variant], className)}>
			{children}
		</div>
	)
}

export default CardTag
