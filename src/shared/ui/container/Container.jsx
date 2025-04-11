import clsx from 'clsx'
import React from 'react'
import styles from './Container.module.scss'

const Container = ({ children, className }) => {
	return <div className={clsx(styles.container, className)}>{children}</div>
}

export default Container
