import clsx from 'clsx'
import React from 'react'
import styles from './Title.module.scss'

const Title = ({ children, variant, className }) => {
	return (
		<h1 className={clsx(styles.title, styles[variant], className)}>
			{children}
		</h1>
	)
}

export default Title
