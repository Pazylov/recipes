import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import CheckboxList from '../../../../shared/ui/checkbox/checkboxList/CheckboxList'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import { CUISINE } from '../../lib/cuisine.data'
import styles from './CuisineFilter.module.scss'

const CuisineFilter = () => {
	return (
		<div className={styles.cuisine}>
			<SidebarTitle>Кухня</SidebarTitle>
			<CheckboxList items={CUISINE} />
			<BorderBottom />
		</div>
	)
}

export default CuisineFilter
