import clsx from 'clsx'
import React from 'react'
import CategoryFilter from '../../../features/sidebarFilters/ui/categoryFilter/CategoryFilter'
import DiscountFilter from '../../../features/sidebarFilters/ui/discountFilter/DiscountFilter'
import PriceFilter from '../../../features/sidebarFilters/ui/priceFilter/PriceFilter'
import RangeFilter from '../../../features/sidebarFilters/ui/rangeFilter.jsx/RangeFilter'
import TimeFilter from '../../../features/sidebarFilters/ui/timeFilter/TimeFilter'
import styles from './Sidebar.module.scss'

const Sidebar = ({ className }) => {
	return (
		<div className={clsx(styles.sidebar, className)}>
			<CategoryFilter />
			<TimeFilter />
			<RangeFilter />
			<PriceFilter />
			<DiscountFilter />
		</div>
	)
}

export default Sidebar
