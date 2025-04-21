import clsx from 'clsx'
import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({ children, className }) => {
	return (
		<label className={clsx(styles.wrapper, className)}>
			<input type='checkbox' className={styles.checkbox} />
			<p className={styles.text}>{children}</p>
		</label>
	)
}

export default Checkbox
