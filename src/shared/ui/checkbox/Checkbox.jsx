import clsx from 'clsx'
import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({ children, className, checked, onChange }) => {
	return (
		<label className={clsx(styles.checkboxWrapper, className)}>
			<input
				type='checkbox'
				className={styles.checkbox}
				checked={checked}
				onChange={onChange}
			/>
			<p className={styles.text}>{children}</p>
		</label>
	)
}

export default Checkbox
