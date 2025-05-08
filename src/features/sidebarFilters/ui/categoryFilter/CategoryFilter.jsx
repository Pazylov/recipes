import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import CheckboxList from '../../../../shared/ui/checkbox/checkboxList/CheckboxList'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import { CATEGORY_RECIPES } from '../../lib/category.data'
import styles from './CategoryFilter.module.scss'

const CategoryFilter = () => {
	return (
		<div className={styles.category}>
			<SidebarTitle>Категория рецепта</SidebarTitle>
			<CheckboxList items={CATEGORY_RECIPES}></CheckboxList>
			<BorderBottom />
		</div>
	)
}

export default CategoryFilter
