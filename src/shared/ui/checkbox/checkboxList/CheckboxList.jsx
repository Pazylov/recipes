import clsx from 'clsx'
import React from 'react'
import Checkbox from '../Checkbox'
import styles from './CheckboxList.module.scss'

const CheckboxList = ({ className, items }) => {
	return (
		<div className={clsx(styles.list, className)}>
			{items.map(item => (
				<Checkbox key={item}>{item}</Checkbox>
			))}
		</div>
	)
}

export default CheckboxList
