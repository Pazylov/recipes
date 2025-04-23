import clsx from 'clsx'
import React from 'react'
import BorderBottom from '../../../shared/ui/border/BorderBottom'
import Checkbox from '../../../shared/ui/checkbox/Checkbox'
import SidebarTitle from '../../../shared/ui/sidebarTitle/SidebarTitle'
import { CATEGORY_RECIPES } from '../lib/recipesCategory.data'
import styles from './Sidebar.module.scss'

const Sidebar = ({ className }) => {
	return (
		<div className={clsx(styles.sidebar, className)}>
			<div className={styles.categoryWrapper}>
				<SidebarTitle>Категория рецепта</SidebarTitle>
				<div className={styles.recipesItems}>
					{CATEGORY_RECIPES.map(item => (
						<Checkbox key={item}>{item}</Checkbox>
					))}
				</div>
				<BorderBottom className={styles.borderBottom} />
			</div>
		</div>
	)
}

export default Sidebar
