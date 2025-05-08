import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import CheckboxList from '../../../../shared/ui/checkbox/checkboxList/CheckboxList'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import { TIMES_COOKING } from '../../lib/timesCooking.data'
import styles from './TimeFilter.module.scss'

const TimeFilter = () => {
	return (
		<div className={styles.timeCooking}>
			<SidebarTitle>Время приготовления</SidebarTitle>
			<CheckboxList items={TIMES_COOKING} />
			<BorderBottom />
		</div>
	)
}

export default TimeFilter
