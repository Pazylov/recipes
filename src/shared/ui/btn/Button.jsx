import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, variant = 'default', className }) => {
	return (
		<button className={clsx(styles.btn, styles[variant], className)}>
			{children}
		</button>
	)
}

export default Button
