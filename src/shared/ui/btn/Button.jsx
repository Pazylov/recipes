import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, onclick, variant = 'default', className }) => {
	return (
		<button
			onClick={onclick}
			className={clsx(styles.btn, styles[variant], className)}
		>
			{children}
		</button>
	)
}

export default Button
