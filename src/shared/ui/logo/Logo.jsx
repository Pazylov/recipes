import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = ({ variant, className }) => {
	return (
		<Link to='/' className={clsx(styles.logo, styles[variant], className)}>
			Мир вкуса
		</Link>
	)
}

export default Logo
