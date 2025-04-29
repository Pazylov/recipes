import clsx from 'clsx'
import React from 'react'
import styles from './Input.module.scss'

const Input = ({
	placeholder,
	value,
	onChange,
	checked,
	className,
	defaultValue = 5, // для демонстрации при разработке
}) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={clsx(styles.input, className)}
				type='text'
				placeholder={placeholder}
				inputMode='decimal'
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<span className={clsx(styles.value, value && styles.hidden)}>
				{defaultValue}
			</span>
		</div>
	)
}

export default Input
