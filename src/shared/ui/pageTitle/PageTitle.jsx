import clsx from 'clsx'
import React from 'react'
import styles from './PageTitle.module.scss'

const PageTitle = ({ children, variant, className }) => {
	return (
		<h1 className={clsx(styles.pageTitle, styles[variant], className)}>
			{children}
		</h1>
	)
}

export default PageTitle
