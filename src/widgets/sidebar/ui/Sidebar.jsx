import clsx from 'clsx'
import React from 'react'
import CategoryFilter from '../../../features/sidebarFilters/ui/categoryFilter/CategoryFilter'
import RangeFilter from '../../../features/sidebarFilters/ui/rangeFilter.jsx/RangeFilter'
import TimeFilter from '../../../features/sidebarFilters/ui/timeFilter/TimeFilter'
import styles from './Sidebar.module.scss'

const Sidebar = ({ className }) => {
	return (
		<div className={clsx(styles.sidebar, className)}>
			<CategoryFilter />
			<TimeFilter />
			<RangeFilter />
		</div>
	)
}

export default Sidebar
