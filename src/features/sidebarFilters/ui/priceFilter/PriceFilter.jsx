import React from 'react'
import BorderBottom from '../../../../shared/ui/border/BorderBottom'
import RangeSliderInput from '../../../../shared/ui/rangeSliderInput/RangeSliderInput'
import SidebarTitle from '../../../../shared/ui/sidebarTitle/SidebarTitle'
import styles from './PriceFilter.module.scss'

const PriceFilter = () => {
	return (
		<div className={styles.price}>
			<SidebarTitle className={styles.title}>
				Цена
				<span className={styles.currency}>(сом)</span>
			</SidebarTitle>
			<RangeSliderInput min={50} max={500} step={10} />
			<BorderBottom />
		</div>
	)
}

export default PriceFilter
