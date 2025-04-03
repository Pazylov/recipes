import clsx from 'clsx'
import React from 'react'
import styles from './CardTag.module.scss'

const CardTag = ({ children, tag, className }) => {
	return (
		<span
			className={clsx(
				styles.cardTag,
				{
					[styles.popular]: tag === 'Популярное',
					[styles.new]: tag === 'Новинка',
					[styles.top]: tag === 'Топ',
					[styles.discount]: tag === true,
				},
				className
			)}
		>
			{children}
		</span>
	)
}

export default CardTag
