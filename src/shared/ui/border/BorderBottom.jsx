import clsx from 'clsx'
import React from 'react'
import styles from './BorderBottom.module.scss'

const BorderBottom = ({ className }) => {
	return <span className={clsx(styles.border, className)} />
}

export default BorderBottom
