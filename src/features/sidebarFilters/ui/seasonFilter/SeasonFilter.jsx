import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import CheckboxList from '../../../../shared/ui/checkbox/checkboxList/CheckboxList'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import { SEASON } from '../../lib/season.data'
import styles from './SeasonFilter.module.scss'

const SeasonFilter = () => {
	return (
		<div className={styles.season}>
			<SidebarTitle>Сезонность</SidebarTitle>
			<CheckboxList items={SEASON} />
			<BorderBottom />
		</div>
	)
}

export default SeasonFilter
