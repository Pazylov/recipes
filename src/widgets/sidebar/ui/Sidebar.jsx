import clsx from 'clsx'
import React from 'react'
import Checkbox from '../../../shared/ui/checkbox/Checkbox'
import SidebarTitle from '../../../shared/ui/sidebarTitle/SidebarTitle'
import styles from './Sidebar.module.scss'

const Sidebar = ({ className }) => {
	return (
		<div className={clsx(styles.sidebar, className)}>
			<SidebarTitle>Фильтры</SidebarTitle>
			<Checkbox>Выпечка</Checkbox>
		</div>
	)
}

export default Sidebar
