import React from 'react'
import CheckboxList from '../../../../shared/ui/checkbox/checkboxList/CheckboxList'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import { DISCOUNT } from '../../lib/discount.data'
import styles from './DiscountFilter.module.scss'

const DiscountFilter = () => {
	return (
		<div className={styles.discount}>
			<SidebarTitle>Скидка</SidebarTitle>
			<CheckboxList items={DISCOUNT}></CheckboxList>
		</div>
	)
}

export default DiscountFilter
