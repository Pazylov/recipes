import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import RangeSliderInput from '../../../../shared/ui/rangeSliderInput/RangeSliderInput'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import styles from './RangeFilter.module.scss'

const RangeFilter = () => {
	return (
		<div className={styles.range}>
			<SidebarTitle>Рейтинг</SidebarTitle>
			<RangeSliderInput min={0} max={5} step={0.1} />
			<BorderBottom />
		</div>
	)
}

export default RangeFilter
